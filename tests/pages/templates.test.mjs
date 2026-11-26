// Structure checks for the template pages. Build first:
//   npm run build:uz && npm run build:global

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { loadPage, findAll, attr, textOf, docIndex } from "../lib/dom.mjs";

const PAGES = [
  { site: "uz", rel: "features/offline-recording/index.html", kind: "meeting" },
  { site: "uz", rel: "use-cases/round-table/index.html", kind: "meeting" },
  { site: "uz", rel: "pricing/index.html", kind: "plain" },
  { site: "uz", rel: "blog/vebinar-nima/index.html", kind: "post" },
  { site: "global", rel: "ar/features/offline-recording/index.html", kind: "meeting" },
];

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const baselines = {
  uz: JSON.parse(readFileSync(ROOT + "seo-baseline/uz.json", "utf8")).pages,
  global: JSON.parse(readFileSync(ROOT + "seo-baseline/global.json", "utf8")).pages,
};
const has = (name) => (e) => attr(e, name) !== undefined;

for (const { site, rel, kind } of PAGES) {
  const label = `${site}/${rel}`;

  test(`${label}: rec pill only in header`, () => {
    // R13: header renders 2-3 RecPill instances depending on breakpoint/locale.
    const doc = loadPage(site, rel);
    const pills = findAll(doc, has("data-rec-pill"));
    assert.ok(pills.length >= 1, "expected at least one [data-rec-pill]");
    const [header] = findAll(doc, (e) => e.tagName === "header");
    assert.ok(header, "no <header>");
    const inHeader = new Set(findAll(header, has("data-rec-pill")));
    assert.equal(pills.filter((p) => !inHeader.has(p)).length, 0, "every [data-rec-pill] must be inside <header>");
  });

  if (kind === "meeting") {
    test(`${label}: notes card holds the first section after the hero`, () => {
      // R15: the single [data-notes-card] contains the FIRST H2 after the H1 and every H3
      // between that H2 and the next H2 (feature: benefits H2 + 3 H3s; use-case: problem H2,
      // no H3s). It must also come before the second H2 in DOM order.
      const doc = loadPage(site, rel);
      const cards = findAll(doc, has("data-notes-card"));
      assert.equal(cards.length, 1, "expected exactly one [data-notes-card]");
      const card = cards[0];
      const main = findAll(doc, (e) => e.tagName === "main")[0];
      const heads = findAll(main, (e) => /^h[123]$/.test(e.tagName));
      const first = heads.findIndex((h) => h.tagName === "h2");
      assert.ok(first >= 0, "page has no H2");
      const h2 = heads[first];
      const h3s = [];
      let second = null;
      for (let i = first + 1; i < heads.length; i++) {
        if (heads[i].tagName === "h2") { second = heads[i]; break; }
        if (heads[i].tagName === "h3") h3s.push(heads[i]);
      }
      const inCard = new Set(findAll(card, (e) => /^h[23]$/.test(e.tagName)));
      assert.ok(inCard.has(h2), `[data-notes-card] must contain the first H2 "${textOf(h2)}"`);
      for (const h of h3s) assert.ok(inCard.has(h), `[data-notes-card] must contain H3 "${textOf(h)}" (before the next H2)`);
      assert.ok(second, "page has no second H2");
      assert.ok(!findAll(card, (e) => e === second).length, `second H2 "${textOf(second)}" must NOT be inside [data-notes-card]`);
      // Cross-check against the baseline: H3 texts under the first H2 must match, and
      // must still be rendered as H3 (demoting them fails).
      const bh = baselines[site][rel].headings;
      const bi = bh.findIndex((h, i) => i > 0 && h.level === 2);
      assert.equal(textOf(h2), bh[bi].text, "first H2 text must match baseline");
      const baseH3 = [];
      for (let i = bi + 1; i < bh.length && bh[i].level !== 2; i++) if (bh[i].level === 3) baseH3.push(bh[i].text);
      assert.deepEqual(h3s.map(textOf), baseH3, "H3s under the first H2 must equal the baseline H3s (and stay H3)");
      if (rel.includes("features/")) assert.ok(h3s.length >= 1, "feature page: first H2 must have >= 1 H3 (benefits)");
      else assert.equal(h3s.length, 0, "use-case page: first H2 (problem) must have no H3s");
      assert.ok(docIndex(card) < docIndex(second), `[data-notes-card] must come before the second H2 "${textOf(second)}"`);
    });
  }

  if (kind === "post") {
    test(`${label}: post rail`, () => {
      const doc = loadPage(site, rel);
      assert.ok(findAll(doc, has("data-post-rail")).length >= 1, "blog post must render [data-post-rail]");
    });
  }
}
