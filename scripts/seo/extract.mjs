// Reduce one built HTML page to what search engines read from it: head tags,
// structured data, headings, links, and the static text in the DOM. Two
// snapshots of the same page are then compared field by field (diff.mjs), so
// every field here is normalised to be order- and whitespace-stable where the
// order does not matter to a crawler, and kept in document order where it does
// (headings).
//
// The text is read from the static HTML only. CSS (clipping, opacity, motion)
// is deliberately ignored; what is *hidden* from the static render is reported
// separately in `hiddenText`, so a redesign cannot quietly hide copy.

import { parse } from "parse5";

/** Elements whose contents are never page text. */
const SKIP = new Set(["script", "style", "template", "noscript"]);
// <noscript> is skipped because parse5 (scripting on, like a browser) keeps its
// contents as raw markup text; the only noscript here is a tracking pixel.

const collapse = (s) => s.replace(/\s+/g, " ").trim();

/** @param {any} el @param {string} name */
const attr = (el, name) => el.attrs?.find((a) => a.name === name)?.value;

const isElement = (n) => typeof n.tagName === "string";

/** Plain textContent (skipping script/style/template/noscript), collapsed. */
function textContent(node) {
  let out = "";
  const walk = (n) => {
    if (n.nodeName === "#text") out += n.value;
    else if (isElement(n) && SKIP.has(n.tagName)) return;
    n.childNodes?.forEach(walk);
  };
  walk(node);
  return collapse(out);
}

/** JSON.stringify with object keys sorted at every depth. */
function stableStringify(value) {
  const sort = (v) =>
    Array.isArray(v)
      ? v.map(sort)
      : v && typeof v === "object"
        ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, sort(v[k])]))
        : v;
  return JSON.stringify(sort(value));
}

const byString = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const isUiLabel = (el) => attr(el, "data-ui-label") !== undefined;
const isAriaHidden = (el) => attr(el, "aria-hidden") === "true";
function isHidden(el) {
  if (attr(el, "hidden") !== undefined) return true;
  const style = attr(el, "style") ?? "";
  return /(^|;)\s*display\s*:\s*none\b/i.test(style) || /(^|;)\s*visibility\s*:\s*hidden\b/i.test(style);
}

/**
 * @param {string} html
 * @param {string} relPath  path of the file inside the dist dir, e.g. "pricing/index.html"
 */
export function extractPage(html, relPath) {
  const doc = parse(html);
  const htmlEl = doc.childNodes.find((n) => n.tagName === "html");
  const head = htmlEl?.childNodes.find((n) => n.tagName === "head");
  const body = htmlEl?.childNodes.find((n) => n.tagName === "body");

  /** Every element in document order (template contents excluded by parse5). */
  const elements = [];
  const collect = (n) => {
    if (isElement(n)) elements.push(n);
    n.childNodes?.forEach(collect);
  };
  collect(doc);

  const headEls = [];
  if (head) {
    const walkHead = (n) => {
      if (isElement(n)) headEls.push(n);
      n.childNodes?.forEach(walkHead);
    };
    head.childNodes.forEach(walkHead);
  }

  // --- head -------------------------------------------------------------
  const titleEl = headEls.find((e) => e.tagName === "title");
  const title = titleEl ? textContent(titleEl) : null;
  const metaNamed = (name) =>
    headEls.find((e) => e.tagName === "meta" && attr(e, "name")?.toLowerCase() === name);
  const description = metaNamed("description") ? (attr(metaNamed("description"), "content") ?? "") : null;
  const robots = metaNamed("robots") ? (attr(metaNamed("robots"), "content") ?? "") : null;
  const relHas = (e, v) => (attr(e, "rel") ?? "").toLowerCase().split(/\s+/).includes(v);
  const canonicalEl = headEls.find((e) => e.tagName === "link" && relHas(e, "canonical"));
  const canonical = canonicalEl ? (attr(canonicalEl, "href") ?? "") : null;

  const hreflang = headEls
    .filter((e) => e.tagName === "link" && relHas(e, "alternate") && attr(e, "hreflang") !== undefined)
    .map((e) => ({ lang: attr(e, "hreflang"), href: attr(e, "href") ?? "" }))
    .sort((a, b) => byString(a.lang, b.lang) || byString(a.href, b.href));

  // og:* / twitter:* from either attribute. A key that appears more than once
  // (og:locale:alternate, several og:image) keeps every value, sorted, "\n"-joined.
  const metaValues = {};
  for (const e of elements) {
    if (e.tagName !== "meta") continue;
    const key = attr(e, "property") ?? attr(e, "name");
    if (!key || !/^(og|twitter):/i.test(key)) continue;
    (metaValues[key] ??= []).push(attr(e, "content") ?? "");
  }
  const meta = Object.fromEntries(
    Object.keys(metaValues)
      .sort()
      .map((k) => [k, metaValues[k].sort().join("\n")]),
  );

  // Every JSON-LD block, keys sorted. Sorted as a list too: where a block sits
  // in the document is not something structured-data readers care about.
  const jsonLd = elements
    .filter((e) => e.tagName === "script" && attr(e, "type")?.toLowerCase() === "application/ld+json")
    .map((e) => {
      const raw = e.childNodes.map((c) => c.value ?? "").join("");
      try {
        return stableStringify(JSON.parse(raw));
      } catch {
        return `INVALID JSON: ${collapse(raw)}`;
      }
    })
    .sort(byString);

  // --- body structure ----------------------------------------------------
  const headings = elements
    .filter((e) => /^h[1-3]$/.test(e.tagName))
    .map((e) => ({ level: Number(e.tagName[1]), text: textContent(e) }));

  const origin = (() => {
    try {
      return canonical ? new URL(canonical).origin : null;
    } catch {
      return null;
    }
  })();
  const isInternal = (href) =>
    (href.startsWith("/") && !href.startsWith("//")) ||
    (origin !== null && (href === origin || href.startsWith(origin + "/") || href.startsWith(origin + "?") || href.startsWith(origin + "#")));

  const linkSet = new Set();
  const outboundMap = new Map();
  for (const e of elements) {
    if (e.tagName !== "a") continue;
    const href = attr(e, "href");
    if (href === undefined) continue;
    const h = href.trim();
    // Same-page fragments and empty hrefs are not links to another URL.
    if (h === "" || h.startsWith("#")) continue;
    if (isInternal(h)) linkSet.add(h);
    else {
      const entry = { href: h, rel: attr(e, "rel") ?? "" };
      outboundMap.set(JSON.stringify(entry), entry);
    }
  }
  const links = [...linkSet].sort(byString);
  const outbound = [...outboundMap.values()].sort((a, b) => byString(a.href, b.href) || byString(a.rel, b.rel));

  // data-analytics-*: "event|location|url", followed by "|name=value" for any
  // other data-analytics-* attribute on the element (sorted by name), so that
  // e.g. data-analytics-os or -plan are protected too.
  const CORE = ["data-analytics-event", "data-analytics-location", "data-analytics-url"];
  const analytics = [];
  for (const e of elements) {
    const extra = (e.attrs ?? [])
      .filter((a) => a.name.startsWith("data-analytics-") && !CORE.includes(a.name))
      .sort((a, b) => byString(a.name, b.name));
    const hasCore = CORE.some((n) => attr(e, n) !== undefined);
    if (!hasCore && extra.length === 0) continue;
    analytics.push(
      [
        ...CORE.map((n) => attr(e, n) ?? ""),
        ...extra.map((a) => `${a.name.slice("data-analytics-".length)}=${a.value}`),
      ].join("|"),
    );
  }
  analytics.sort(byString);

  // --- text, alts, hidden text (body only) --------------------------------
  const text = [];
  const alts = [];
  const hiddenText = [];
  const walkBody = (n, { excluded, hidden, hiddenExcluded }) => {
    if (n.nodeName === "#text") {
      const t = collapse(n.value);
      if (!t) return;
      if (!excluded) text.push(t);
      if (hidden && !hiddenExcluded) hiddenText.push(t);
      return;
    }
    if (!isElement(n)) {
      n.childNodes?.forEach((c) => walkBody(c, { excluded, hidden, hiddenExcluded }));
      return;
    }
    if (SKIP.has(n.tagName)) return;
    const uiLabel = isUiLabel(n);
    const next = {
      excluded: excluded || uiLabel || isAriaHidden(n),
      hidden: hidden || isHidden(n),
      // A <dialog> is closed by design (menus); UI labels are not copy.
      hiddenExcluded: hiddenExcluded || uiLabel || n.tagName === "dialog",
    };
    if (n.tagName === "img" && !next.excluded) {
      const alt = collapse(attr(n, "alt") ?? "");
      if (alt) alts.push(alt);
    }
    n.childNodes?.forEach((c) => walkBody(c, next));
  };
  if (body) walkBody(body, { excluded: false, hidden: false, hiddenExcluded: false });
  text.sort(byString);
  alts.sort(byString);
  hiddenText.sort(byString);

  return {
    path: relPath,
    title,
    description,
    canonical,
    robots,
    hreflang,
    meta,
    jsonLd,
    headings,
    links,
    outbound,
    text,
    alts,
    analytics,
    hiddenText,
  };
}

/**
 * A sitemap reduced to its URLs: every <loc>, sorted, "\n"-joined. lastmod is
 * dropped on purpose (it follows content dates, not anything SEO-visible we
 * are changing).
 * @param {string} xml
 */
export function sitemapLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/g)]
    .map((m) => m[1])
    .sort(byString)
    .join("\n");
}
