// Compare two SEO snapshots (see snapshot.mjs / extract.mjs) and list every
// difference a search engine could notice. The only tolerated differences:
//   - text / alts / outbound / analytics entries that are gone in `next` and
//     are listed in allow.json (the removals the redesign signed off on);
//   - text and alts that are *new* in `next` (new UI labels are already
//     excluded at extraction through data-ui-label; new copy is caught in
//     review);
//   - hiddenText entries that are gone in `next`: copy that stops being hidden
//     is fine, and copy that vanishes altogether is caught by `text`. Only
//     newly hidden copy is a finding.
// Everything else — including pages added or removed — is a finding.

/** @typedef {{ path: string, field: string, detail: string }} Finding */
/** @typedef {{ removedText: string[], removedAlts: string[], removedOutbound: string[], removedAnalytics: string[] }} Allow */

const SCALARS = ["htmlLang", "htmlDir", "title", "description", "canonical", "robots"];

const show = (v) => JSON.stringify(v);

/** Multiset difference: entries of `a` not matched one-for-one in `b`. */
function minus(a, b) {
  const left = new Map();
  for (const x of b) left.set(x, (left.get(x) ?? 0) + 1);
  const out = [];
  for (const x of a) {
    const n = left.get(x) ?? 0;
    if (n > 0) left.set(x, n - 1);
    else out.push(x);
  }
  return out;
}

/** Group repeated entries so a string missing three times is one line. */
function counted(list) {
  const m = new Map();
  for (const x of list) m.set(x, (m.get(x) ?? 0) + 1);
  return [...m].map(([x, n]) => (n > 1 ? `${x} (x${n})` : x));
}

/**
 * Per-field set/multiset rules: how an entry is keyed, which allow list
 * excuses its removal, and whether removals / additions count at all.
 */
const COLLECTIONS = {
  hreflang: { key: (e) => `${e.lang} ${e.href}`, allow: null, removed: true, added: true },
  jsonLd: { key: (e) => e, allow: null, removed: true, added: true },
  headLinks: { key: (e) => e, allow: null, removed: true, added: true },
  links: { key: (e) => e, allow: null, removed: true, added: true },
  internalRel: { key: (e) => show(e), allow: null, removed: true, added: true },
  outbound: { key: (e) => show(e), allow: { list: "removedOutbound", of: (e) => e.href }, removed: true, added: true },
  text: { key: (e) => e, allow: { list: "removedText", of: (e) => e }, removed: true, added: false },
  alts: { key: (e) => e, allow: { list: "removedAlts", of: (e) => e }, removed: true, added: false },
  analytics: { key: (e) => e, allow: { list: "removedAnalytics", of: (e) => e }, removed: true, added: true },
  hiddenText: { key: (e) => e, allow: null, removed: false, added: true },
};

/**
 * @param {any} base  a PageSnapshot
 * @param {any} next
 * @param {Allow} allow
 * @param {Record<string, Set<string>>} used  collects the allow entries that excused a removal
 * @returns {Finding[]}
 */
function diffPage(base, next, allow, used) {
  /** @type {Finding[]} */
  const out = [];
  const path = base.path;
  const add = (field, detail) => out.push({ path, field, detail });

  for (const f of SCALARS) {
    if (base[f] !== next[f]) add(f, `${show(base[f])} → ${show(next[f])}`);
  }

  // og:* / twitter:*, per key.
  const keys = [...new Set([...Object.keys(base.meta ?? {}), ...Object.keys(next.meta ?? {})])].sort();
  for (const k of keys) {
    const a = base.meta?.[k];
    const b = next.meta?.[k];
    if (a === b) continue;
    if (b === undefined) add("meta", `${k} removed (was ${show(a)})`);
    else if (a === undefined) add("meta", `${k} added ${show(b)}`);
    else add("meta", `${k}: ${show(a)} → ${show(b)}`);
  }

  // Headings: text, level and order all matter — one finding for the field.
  const ha = base.headings ?? [];
  const hb = next.headings ?? [];
  const hs = (h) => (h ? `h${h.level} ${show(h.text)}` : "(none)");
  const i = ha.findIndex((h, j) => hs(h) !== hs(hb[j]));
  const first = i === -1 && hb.length > ha.length ? ha.length : i;
  if (first !== -1) {
    const count = ha.length !== hb.length ? `count ${ha.length} → ${hb.length}; ` : "";
    add("headings", `${count}first difference at #${first + 1}: ${hs(ha[first])} → ${hs(hb[first])}`);
  }

  for (const [field, rule] of Object.entries(COLLECTIONS)) {
    const a = base[field] ?? [];
    const b = next[field] ?? [];
    const aKeys = a.map(rule.key);
    const bKeys = b.map(rule.key);
    const allowed = rule.allow ? new Set(allow[rule.allow.list] ?? []) : new Set();
    const byKey = new Map(a.map((e) => [rule.key(e), e]));
    const removed = minus(aKeys, bKeys).filter((k) => {
      if (!rule.allow) return true;
      const entry = rule.allow.of(byKey.get(k));
      if (!allowed.has(entry)) return true;
      (used[rule.allow.list] ??= new Set()).add(entry);
      return false;
    });
    if (rule.removed) for (const k of counted(removed)) add(field, `removed ${k}`);
    if (rule.added) for (const k of counted(minus(bKeys, aKeys))) add(field, `added ${k}`);
  }

  return out;
}

const isSitemap = (name) => /^sitemap[^/]*\.xml$/.test(name);

/**
 * @param {{ pages: Record<string, any>, files: Record<string, string> }} base
 * @param {{ pages: Record<string, any>, files: Record<string, string> }} next
 * @param {Allow} allow
 * @param {Record<string, Set<string>>} [used]  optional out-param: per allow list,
 *   the entries that actually excused a removal (compare.mjs warns about the rest)
 * @returns {Finding[]}
 */
export function diffSnapshots(base, next, allow, used = {}) {
  /** @type {Finding[]} */
  const out = [];

  const paths = [...new Set([...Object.keys(base.pages ?? {}), ...Object.keys(next.pages ?? {})])].sort();
  for (const p of paths) {
    const a = base.pages?.[p];
    const b = next.pages?.[p];
    if (!b) out.push({ path: p, field: "page", detail: "removed" });
    else if (!a) out.push({ path: p, field: "page", detail: "added" });
    else out.push(...diffPage({ ...a, path: p }, b, allow, used));
  }

  const names = [...new Set([...Object.keys(base.files ?? {}), ...Object.keys(next.files ?? {})])].sort();
  for (const name of names) {
    const a = base.files?.[name];
    const b = next.files?.[name];
    if (a === b) continue;
    if (b === undefined) out.push({ path: name, field: "file", detail: "removed" });
    else if (a === undefined) out.push({ path: name, field: "file", detail: "added" });
    else if (isSitemap(name)) {
      // Stored as the sorted <loc> list; compare as a set of URLs.
      const la = a.split("\n").filter(Boolean);
      const lb = b.split("\n").filter(Boolean);
      for (const loc of minus(la, lb)) out.push({ path: name, field: "sitemap", detail: `removed ${loc}` });
      for (const loc of minus(lb, la)) out.push({ path: name, field: "sitemap", detail: `added ${loc}` });
    } else {
      out.push({ path: name, field: "file", detail: `sha256 ${a.slice(0, 12)} → ${b.slice(0, 12)}` });
    }
  }

  return out;
}
