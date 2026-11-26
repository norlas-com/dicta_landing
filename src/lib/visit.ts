import type { VisitTopic } from "../i18n/pages/meeting-ui";

export const VISIT_KEY = "dicta.visit.v1";

export interface VisitState {
  startedAt: number;
  pages: { path: string; topic: VisitTopic | null }[];
}

const MAX_PAGES = 50;
const MAX_TOPICS = 3;
const FRESH_AFTER_MS = 4 * 60 * 60 * 1000;

const TOPICS: readonly string[] = [
  "home",
  "features",
  "useCases",
  "pricing",
  "blog",
  "download",
  "developers",
  "faq",
];

function fresh(now: number): VisitState {
  return { startedAt: now, pages: [] };
}

function isTopic(v: unknown): v is VisitTopic {
  return typeof v === "string" && TOPICS.includes(v);
}

export function loadVisit(storage: Pick<Storage, "getItem"> | null, now: number): VisitState {
  if (!storage) return fresh(now);
  try {
    const raw = storage.getItem(VISIT_KEY);
    if (!raw) return fresh(now);
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object") return fresh(now);
    const { startedAt, pages } = data as { startedAt?: unknown; pages?: unknown };
    if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) return fresh(now);
    if (!Array.isArray(pages)) return fresh(now);
    const out: VisitState["pages"] = [];
    for (const p of pages) {
      if (!p || typeof p !== "object") return fresh(now);
      const { path, topic } = p as { path?: unknown; topic?: unknown };
      if (typeof path !== "string") return fresh(now);
      if (topic !== null && typeof topic !== "string") return fresh(now);
      out.push({ path, topic: isTopic(topic) ? topic : null });
    }
    const start = Math.min(startedAt, now);
    if (now - start > FRESH_AFTER_MS) return fresh(now);
    return { startedAt: start, pages: out.slice(-MAX_PAGES) };
  } catch {
    return fresh(now);
  }
}

export function recordPage(state: VisitState, path: string, topic: VisitTopic | null): VisitState {
  const last = state.pages[state.pages.length - 1];
  if (last && last.path === path) return state;
  const pages = [...state.pages, { path, topic }].slice(-MAX_PAGES);
  return { startedAt: state.startedAt, pages };
}

export function saveVisit(storage: Pick<Storage, "setItem"> | null, state: VisitState): void {
  if (!storage) return;
  try {
    storage.setItem(VISIT_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable or full: the timer simply won't persist
  }
}

export function formatClock(ms: number): string {
  const total = Number.isFinite(ms) && ms > 0 ? Math.floor(ms / 1000) : 0;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export function summarizeVisit(
  state: VisitState,
  now: number,
): { pageCount: number; clock: string; topics: VisitTopic[] } {
  const topics: VisitTopic[] = [];
  for (const p of state.pages) {
    if (!p.topic || p.topic === "home") continue;
    const i = topics.indexOf(p.topic);
    if (i !== -1) topics.splice(i, 1);
    topics.push(p.topic);
  }
  return {
    pageCount: state.pages.length,
    clock: formatClock(now - state.startedAt),
    topics: topics.slice(-MAX_TOPICS),
  };
}
