// Structure checks for the template pages. Build first:
//   npm run build:uz && npm run build:global

import { test } from "node:test";
import assert from "node:assert/strict";
import { loadPage, findAll, attr, textOf, docIndex } from "../lib/dom.mjs";

const PAGES = [
  { site: "uz", rel: "features/offline-recording/index.html", kind: "meeting" },
  { site: "uz", rel: "use-cases/round-table/index.html", kind: "meeting" },
  { site: "uz", rel: "pricing/index.html", kind: "plain" },
  { site: "uz", rel: "blog/vebinar-nima/index.html", kind: "post" },
  { site: "global", rel: "ar/features/offline-recording/index.html", kind: "meeting" },
];

const has = (name) => (e) => attr(e, name) !== undefined;

for (const { site, rel, kind } of PAGES) {
  const label = `${site}/${rel}`;

  test(`${label}: rec pill only in header`, () => {
    // R13: header renders 2-3 RecPill instances depending on breakpoint/locale.
    const doc = loadPage(site, rel);
    const pills = findAll(doc, has("data-rec-pill"));
    assert.ok(pills.length >= 1, "expected at least one [data-rec-pill]");
    const [header] = findAll(doc, (e) => e.tagName === "header");
    const inHeader = new Set(findAll(header, has("data-rec-pill")));
    assert.equal(pills.filter((p) => !inHeader.has(p)).length, 0, "every [data-rec-pill] must be inside <header>");
  });

  if (kind === "meeting") {
    test(`${label}: notes card holds the benefit/steps H2 and all its H3s`, () => {
      // The card wraps the H2 that precedes the first H3 (FeaturePage: h2#benefits-title,
      // UseCasePage: the "how it works" H2) and every H3 up to the next H2.
      const doc = loadPage(site, rel);
      const cards = findAll(doc, has("data-notes-card"));
      assert.equal(cards.length, 1, "expected exactly one [data-notes-card]");
      const card = cards[0];
      const main = findAll(doc, (e) => e.tagName === "main")[0];
      const heads = findAll(main, (e) => /^h[23]$/.test(e.tagName));
      const firstH3 = heads.findIndex((h) => h.tagName === "h3");
      assert.ok(firstH3 > 0, "page has no H3");
      let p = firstH3 - 1;
      while (heads[p].tagName !== "h2") p--;
      const h2 = heads[p];
      const h3s = [];
      for (let i = p + 1; i < heads.length && heads[i].tagName === "h3"; i++) h3s.push(heads[i]);
      const inCard = new Set(findAll(card, (e) => /^h[23]$/.test(e.tagName)));
      assert.ok(inCard.has(h2), `[data-notes-card] must contain H2 "${textOf(h2)}"`);
      for (const h of h3s) assert.ok(inCard.has(h), `[data-notes-card] must contain H3 "${textOf(h)}"`);
    });
  }

  if (kind === "post") {
    test(`${label}: post rail`, () => {
      const doc = loadPage(site, rel);
      assert.ok(findAll(doc, has("data-post-rail")).length >= 1, "blog post must render [data-post-rail]");
    });
  }
}
