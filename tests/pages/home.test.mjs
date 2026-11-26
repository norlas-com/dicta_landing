// Structure checks for the redesigned home page. Build first:
//   npm run build:uz && npm run build:global
// Most of these fail until the home page is rebuilt (later tasks).

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { loadPage, findAll, attr, textOf, docIndex } from "../lib/dom.mjs";
import { extractPage } from "../../scripts/seo/extract.mjs";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const readJson = (p) => JSON.parse(readFileSync(ROOT + p, "utf8"));
const allow = () => readJson("scripts/seo/allow.json"); // read at runtime: Task 6 fills it

const PAGES = [
  { site: "uz", rel: "index.html" },
  { site: "uz", rel: "en/index.html" },
  { site: "global", rel: "ar/index.html" },
];

const baselines = { uz: readJson("seo-baseline/uz.json").pages, global: readJson("seo-baseline/global.json").pages };
const raw = (site, rel) => readFileSync(`${ROOT}dist-${site}/${rel}`, "utf8");
const byTag = (doc, tag) => findAll(doc, (e) => e.tagName === tag);
const heading = (doc, level, text) => {
  const hits = findAll(doc, (e) => e.tagName === `h${level}` && textOf(e) === text);
  assert.ok(hits.length >= 1, `h${level} "${text}" not found in rendered page`);
  return hits[0];
};

// R14: locate headings by TEXT taken from the baseline snapshot of the same page.
// payoff H2 = the H2 immediately preceding the first H3 (the meeting title H3);
// languages H2 = the H2 immediately following that H3.
function anchorsFor(site, rel) {
  const hs = baselines[site][rel].headings;
  const h3 = hs.findIndex((h) => h.level === 3);
  assert.ok(h3 > 0, `baseline ${rel} has no H3`);
  let p = h3 - 1;
  while (hs[p].level !== 2) p--;
  let n = h3 + 1;
  while (hs[n].level !== 2) n++;
  return { payoff: hs[p].text, title: hs[h3].text, languages: hs[n].text };
}

for (const { site, rel } of PAGES) {
  const label = `${site}/${rel}`;

  test(`${label}: no Premier`, () => {
    assert.ok(!/premier/i.test(raw(site, rel)), "raw HTML must not contain 'Premier'");
  });

  test(`${label}: no removed stock photos`, () => {
    const removed = new Set(allow().removedAlts);
    const doc = loadPage(site, rel);
    const bad = findAll(doc, (e) => e.tagName === "img" && removed.has(attr(e, "alt")));
    assert.deepEqual(bad.map((e) => attr(e, "alt")), [], "stock-photo <img> still rendered");
  });

  test(`${label}: notes card sits between payoff H2 and languages H2`, () => {
    const doc = loadPage(site, rel);
    const { payoff, title, languages } = anchorsFor(site, rel);
    const [main] = byTag(doc, "main");
    assert.ok(main, "no <main>");
    const cards = findAll(main, (e) => attr(e, "data-notes-card") !== undefined);
    assert.equal(cards.length, 1, "expected exactly one [data-notes-card] inside <main> (the meeting notes card)");
    const card = cards[0];
    const idx = docIndex(card);
    assert.ok(idx > docIndex(heading(doc, 2, payoff)), `[data-notes-card] must come after payoff H2 "${payoff}"`);
    assert.ok(idx < docIndex(heading(doc, 2, languages)), `[data-notes-card] must come before languages H2 "${languages}"`);
    const inner = findAll(card, (e) => e.tagName === "h3" && textOf(e) === title);
    assert.equal(inner.length, 1, `[data-notes-card] must contain the payoff H3 "${title}"`);
  });

  test(`${label}: nothing hidden`, () => {
    const got = extractPage(raw(site, rel), rel).hiddenText;
    assert.deepEqual(got, baselines[site][rel].hiddenText, "hiddenText must equal baseline");
  });

  test(`${label}: rec pill only in header`, () => {
    // R13: header renders 2-3 RecPill instances depending on breakpoint/locale.
    const doc = loadPage(site, rel);
    const pills = findAll(doc, (e) => attr(e, "data-rec-pill") !== undefined);
    assert.ok(pills.length >= 1, "expected at least one [data-rec-pill]");
    const [header] = byTag(doc, "header");
    const inHeader = new Set(findAll(header, (e) => attr(e, "data-rec-pill") !== undefined));
    assert.deepEqual(pills.filter((p) => !inHeader.has(p)).length, 0, "every [data-rec-pill] must be inside <header>");
  });

  test(`${label}: closing task link`, () => {
    const doc = loadPage(site, rel);
    const [footer] = byTag(doc, "footer");
    assert.ok(footer, "no <footer>");
    const fIdx = docIndex(footer);
    const sections = byTag(doc, "section").filter((s) => docIndex(s) < fIdx);
    const last = sections[sections.length - 1];
    assert.ok(last, "no <section> before <footer>");
    const links = findAll(last, (e) => e.tagName === "a" && attr(e, "data-analytics-event") === "signup_start_click");
    assert.ok(links.length >= 1, 'last <section> before <footer> must contain a task-line <a data-analytics-event="signup_start_click">');
  });
}
