// Dicta first-party analytics for the landing site (contract:
// docs/analytics/first-party-analytics-contract.md, platform "landing").
// A third sink next to GA4 + Metrica: no auth, a localStorage queue, flushed to
// POST /v1/analytics/events. Same semantics as the web app's lib/dictaEvents.ts,
// trimmed: events -> durable queue (`dicta_ev_q`, cap 5,000, 30-day TTL), upload
// on >= 20 queued / every 10 s while visible / pagehide (keepalive, <= 60 KB),
// exponential backoff 5 s -> 10 min, poison batch (400/413/422) dropped.
// Shares the anon id with the app through a cookie on the parent domain.
// Everything is swallowed on failure; nothing here may break the page.

const API = "https://api.dicta.uz/v1/analytics/events";
const QUEUE_KEY = "dicta_ev_q";
const ANON_KEY = "dicta_aid";
const SESSION_KEY = "dicta_sid";
const CAP = 5000;
const TTL_MS = 30 * 24 * 3600 * 1000;
const IDLE_MS = 30 * 60 * 1000;
const BATCH = 200;
const THRESHOLD = 20;
const INTERVAL_MS = 10_000;
const KEEPALIVE_BYTES = 60 * 1024;

type Params = Record<string, string | number | boolean>;
interface Ev {
  event_id: string;
  name: string;
  ts: string;
  session_id: string;
  user_id: null;
  workspace_id: null;
  screen: string | null;
  component: string | null;
  duration_ms: number | null;
  params: Params;
}

let started = false;
let anonId = "";
let firstSession = false;
let inflight = false;
let failures = 0;
let nextAt = 0;
let screenSince: number | null = null;
let mem: Ev[] = [];
let storageBroken = false;

const uuid = (): string =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 3) | 8).toString(16);
      });

/** snake_case [a-z0-9_] label, <= 48 chars. */
export function slug(s: string, max = 48): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, max)
    .replace(/_+$/g, "");
}

function cookieDomain(): string | null {
  const h = location.hostname.toLowerCase();
  for (const root of ["dicta.uz", "dicta.live"]) {
    if (h === root || h.endsWith("." + root)) return "." + root;
  }
  return null;
}

function resolveAnon(): void {
  let found: string | null = null;
  try {
    const m = document.cookie.match(new RegExp("(?:^|; )" + ANON_KEY + "=([^;]*)"));
    found = m ? decodeURIComponent(m[1]) : null;
  } catch {
    /* ignore */
  }
  if (!found) {
    try {
      found = localStorage.getItem(ANON_KEY);
    } catch {
      /* ignore */
    }
  }
  if (!found) {
    found = uuid();
    firstSession = true;
  }
  anonId = found;
  try {
    localStorage.setItem(ANON_KEY, found);
  } catch {
    /* ignore */
  }
  try {
    const d = cookieDomain();
    document.cookie =
      `${ANON_KEY}=${encodeURIComponent(found)}; Path=/; Max-Age=63072000; SameSite=Lax` +
      (d ? `; Domain=${d}` : "") +
      (location.protocol === "https:" ? "; Secure" : "");
  } catch {
    /* ignore */
  }
}

function readQ(): Ev[] {
  if (!storageBroken) {
    try {
      const raw = localStorage.getItem(QUEUE_KEY);
      if (!raw) return [];
      const p = JSON.parse(raw);
      return Array.isArray(p) ? (p as Ev[]) : [];
    } catch {
      return [];
    }
  }
  return mem;
}

function writeQ(list: Ev[]): Ev[] {
  const cutoff = Date.now() - TTL_MS;
  let q = list.filter((e) => Date.parse(e.ts) >= cutoff);
  if (q.length > CAP) q = q.slice(q.length - CAP);
  mem = q;
  if (!storageBroken) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    } catch {
      storageBroken = true;
    }
  }
  return q;
}

/** Session id: continues across reloads/pages for 30 min of inactivity, else rotates (+ session_start). */
function session(): string {
  const now = Date.now();
  let cur: { id: string; last: number } | null = null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) cur = JSON.parse(raw);
  } catch {
    /* ignore */
  }
  if (cur && typeof cur.id === "string" && now - cur.last < IDLE_MS) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: cur.id, last: now }));
    } catch {
      /* ignore */
    }
    return cur.id;
  }
  const id = uuid();
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id, last: now }));
  } catch {
    /* ignore */
  }
  const first = firstSession;
  firstSession = false;
  push(mk("session_start", { is_first_session: first }, id));
  return id;
}

function mk(
  name: string,
  params: Params,
  sid: string,
  extra: { component?: string; duration_ms?: number } = {},
): Ev {
  return {
    event_id: uuid(),
    name,
    ts: new Date().toISOString(),
    session_id: sid,
    user_id: null,
    workspace_id: null,
    screen: "landing",
    component: extra.component ?? null,
    duration_ms: extra.duration_ms ?? null,
    params,
  };
}

function push(ev: Ev): void {
  const q = writeQ([...readQ(), ev]);
  if (q.length >= THRESHOLD) void flush();
}

function emit(name: string, params: Params = {}, extra: { component?: string; duration_ms?: number } = {}): void {
  try {
    push(mk(name, params, session(), extra));
  } catch {
    /* never throw */
  }
}

function body(batch: Ev[]): string {
  return JSON.stringify({
    anon_id: anonId,
    platform: "landing",
    app_version: "landing",
    locale: document.documentElement.lang || undefined,
    sent_at: new Date().toISOString(),
    events: batch,
  });
}

async function flush(): Promise<void> {
  if (inflight || Date.now() < nextAt) return;
  inflight = true;
  try {
    for (;;) {
      const q = readQ();
      if (!q.length) return;
      const batch = q.slice(0, BATCH);
      let status = 0;
      try {
        const r = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body(batch),
          credentials: "omit",
        });
        status = r.status;
      } catch {
        status = 0;
      }
      if ((status >= 200 && status < 300) || status === 400 || status === 413 || status === 422) {
        const ids = new Set(batch.map((e) => e.event_id));
        writeQ(readQ().filter((e) => !ids.has(e.event_id)));
        failures = 0;
        nextAt = 0;
        continue;
      }
      failures++;
      nextAt = Date.now() + Math.min(5000 * 2 ** (failures - 1), 10 * 60 * 1000);
      return;
    }
  } catch {
    /* ignore */
  } finally {
    inflight = false;
  }
}

function flushKeepalive(): void {
  try {
    const batch: Ev[] = [];
    let size = 400;
    for (const e of readQ().slice(0, BATCH)) {
      const len = JSON.stringify(e).length + 1;
      if (size + len > KEEPALIVE_BYTES) break;
      size += len;
      batch.push(e);
    }
    if (!batch.length) return;
    // Events stay queued; the server dedupes on event_id if this and a later retry both land.
    void fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body(batch),
      keepalive: true,
      credentials: "omit",
    }).catch(() => {});
  } catch {
    /* ignore */
  }
}

function leaveScreen(): void {
  if (screenSince == null) return;
  const dur = Math.min(Date.now() - screenSince, 30 * 60 * 1000);
  screenSince = null;
  if (dur >= 300) emit("screen_leave", { path: location.pathname }, { duration_ms: Math.round(dur) });
}

function enterScreen(resumed = false): void {
  screenSince = Date.now();
  emit("screen_view", resumed ? { path: location.pathname, resumed: true } : { path: location.pathname });
}

/** meet.dicta.uz on dicta.uz, meet.dicta.live on dicta.live. Derived from the host:
 *  site.config.mjs reads process.env and cannot be imported into browser code. */
function appHost(): string | null {
  const d = cookieDomain();
  return d ? "meet" + d : null;
}

function appHostPath(a: HTMLAnchorElement): string | null {
  try {
    const u = new URL(a.href, location.href);
    return u.hostname === appHost() ? u.pathname : null;
  } catch {
    return null;
  }
}

function onClick(e: MouseEvent): void {
  try {
    const target = e.target as HTMLElement | null;
    if (!target || typeof target.closest !== "function") return;
    const tagged = target.closest<HTMLElement>("[data-analytics-event]");
    let signup = false;
    let signupLocation = "";
    if (tagged) {
      const ev = tagged.dataset.analyticsEvent || "";
      const params: Params = {};
      for (const attr of Array.from(tagged.attributes)) {
        if (attr.name.startsWith("data-analytics-") && attr.name !== "data-analytics-event") {
          params[attr.name.slice("data-analytics-".length).replace(/-/g, "_").slice(0, 40)] = attr.value.slice(0, 200);
        }
      }
      const where = params.location || params.item || "";
      const component = slug(where ? `${ev}_${where}` : ev);
      if (component) emit("ui_tap", params, { component });
      if (ev === "signup_start_click") {
        signup = true;
        signupLocation = String(params.location || "");
      }
    }
    const a = target.closest<HTMLAnchorElement>("a[href]");
    const appPath = a ? appHostPath(a) : null;
    if (a && appPath !== null) {
      if (!tagged) emit("ui_tap", {}, { component: slug("app_link_" + (appPath.replace(/\//g, "_") || "home")) });
      if (!signup && appPath.startsWith("/sign-up")) {
        signup = true;
        signupLocation = "app_link";
      }
    }
    if (signup) emit("signup_cta_tapped", { location: signupLocation });
  } catch {
    /* never break a click */
  }
}

/** Idempotent. Call once per page from the layout. */
export function initFirstParty(): void {
  if (started || typeof window === "undefined") return;
  started = true;
  try {
    resolveAnon();
    session(); // session_start when a new session begins
    enterScreen();
    document.addEventListener("click", onClick, true);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        leaveScreen();
        flushKeepalive();
      } else {
        session();
        enterScreen(true);
        void flush();
      }
    });
    window.addEventListener("pagehide", () => {
      leaveScreen();
      flushKeepalive();
    });
    window.addEventListener("online", () => void flush());
    window.setInterval(() => {
      if (document.visibilityState === "visible") void flush();
    }, INTERVAL_MS);
    void flush();
  } catch {
    /* ignore */
  }
}
