import { test } from "node:test";
import assert from "node:assert/strict";
import { diffSnapshots } from "./diff.mjs";
import { extractPage, sitemapLocs } from "./extract.mjs";

const NO_ALLOW = { removedText: [], removedAlts: [], removedOutbound: [], removedAnalytics: [] };

const html = (body) =>
  `<!doctype html><html><head><title>T</title><link rel="canonical" href="https://dicta.uz/"></head><body>${body}</body></html>`;

const snap = (body, files = {}) => ({ pages: { "index.html": extractPage(html(body), "index.html") }, files });

const sitemap = (entries) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(([loc, lastmod]) => `<url>\n<loc>${loc}</loc>\n<lastmod>${lastmod}</lastmod>\n</url>`)
    .join("\n")}\n</urlset>\n`;

test("identical snapshots → []", () => {
  const body = `<h1>A</h1><h2>B</h2><p>Copy</p><a href="/pricing/">Pricing</a>`;
  assert.deepEqual(diffSnapshots(snap(body), snap(body), NO_ALLOW), []);
});

test("changed h2 text → one finding field headings", () => {
  const findings = diffSnapshots(snap(`<h1>A</h1><h2>B</h2>`), snap(`<h1>A</h1><h2>C</h2>`), NO_ALLOW);
  const headings = findings.filter((f) => f.field === "headings");
  assert.equal(headings.length, 1);
  assert.equal(headings[0].path, "index.html");
});

test("removed text listed in allow.removedText → []", () => {
  const allow = { ...NO_ALLOW, removedText: ["Premier"] };
  assert.deepEqual(diffSnapshots(snap(`<p>Keep</p><p>Premier</p>`), snap(`<p>Keep</p>`), allow), []);
});

test("removed text not listed → finding field text", () => {
  const findings = diffSnapshots(snap(`<p>Keep</p><p>Gone</p>`), snap(`<p>Keep</p>`), NO_ALLOW);
  assert.equal(findings.length, 1);
  assert.equal(findings[0].field, "text");
  assert.match(findings[0].detail, /Gone/);
});

test("added text → []", () => {
  assert.deepEqual(diffSnapshots(snap(`<p>Keep</p>`), snap(`<p>Keep</p><p>New</p>`), NO_ALLOW), []);
});

test("sitemap lastmod change ignored, loc change found", () => {
  const files = (entries) => ({ "sitemap.xml": sitemapLocs(sitemap(entries)) });
  const base = snap("", files([["https://dicta.uz/", "2026-11-01T00:00:00.000Z"], ["https://dicta.uz/pricing/", "2026-11-01T00:00:00.000Z"]]));
  const lastmodOnly = snap("", files([["https://dicta.uz/pricing/", "2026-11-27T10:00:00.000Z"], ["https://dicta.uz/", "2026-11-20T00:00:00.000Z"]]));
  assert.deepEqual(diffSnapshots(base, lastmodOnly, NO_ALLOW), []);

  const locChanged = snap("", files([["https://dicta.uz/", "2026-11-01T00:00:00.000Z"], ["https://dicta.uz/prices/", "2026-11-01T00:00:00.000Z"]]));
  const findings = diffSnapshots(base, locChanged, NO_ALLOW);
  assert.equal(findings.length, 2);
  assert.ok(findings.every((f) => f.path === "sitemap.xml" && f.field === "sitemap"));
  assert.ok(findings.some((f) => f.detail.includes("removed") && f.detail.includes("https://dicta.uz/pricing/")));
  assert.ok(findings.some((f) => f.detail.includes("added") && f.detail.includes("https://dicta.uz/prices/")));
});

test("page missing in next → finding field page", () => {
  const base = snap(`<p>x</p>`);
  const next = { pages: {}, files: {} };
  assert.deepEqual(diffSnapshots(base, next, NO_ALLOW), [
    { path: "index.html", field: "page", detail: "removed" },
  ]);
});

test("hiddenText: newly hidden copy is a finding, un-hidden copy is not", () => {
  // Hidden in base, visible in next: the string leaves hiddenText, still in text.
  assert.deepEqual(diffSnapshots(snap(`<div hidden><p>Menu</p></div>`), snap(`<div><p>Menu</p></div>`), NO_ALLOW), []);

  // Visible in base, hidden in next.
  const findings = diffSnapshots(snap(`<p>Copy</p>`), snap(`<p hidden>Copy</p>`), NO_ALLOW);
  assert.deepEqual(findings, [{ path: "index.html", field: "hiddenText", detail: "added Copy" }]);
});

test("alts: added alt is not a finding, removed alt needs allow.removedAlts", () => {
  assert.deepEqual(diffSnapshots(snap(`<img alt="Old">`), snap(`<img alt="Old"><img alt="Screenshot">`), NO_ALLOW), []);

  const removed = diffSnapshots(snap(`<img alt="Photo">`), snap(``), NO_ALLOW);
  assert.deepEqual(removed, [{ path: "index.html", field: "alts", detail: "removed Photo" }]);
  assert.deepEqual(diffSnapshots(snap(`<img alt="Photo">`), snap(``), { ...NO_ALLOW, removedAlts: ["Photo"] }), []);
});

test("internalRel, headLinks, htmlLang and htmlDir changes are findings", () => {
  const doc = (lang, dir, rss, rel) =>
    `<!doctype html><html lang="${lang}" dir="${dir}"><head><link rel="canonical" href="https://dicta.uz/">${rss}</head>` +
    `<body><a href="/blog/2/"${rel}>N</a></body></html>`;
  const s = (h) => ({ pages: { "index.html": extractPage(h, "index.html") }, files: {} });
  const rss = `<link rel="alternate" type="application/rss+xml" href="/blog/rss.xml">`;
  const base = s(doc("uz", "ltr", rss, ` rel="next"`));
  assert.deepEqual(diffSnapshots(base, s(doc("uz", "ltr", rss, ` rel="next"`)), NO_ALLOW), []);

  const fields = diffSnapshots(base, s(doc("ru", "rtl", "", "")), NO_ALLOW).map((f) => f.field).sort();
  assert.deepEqual(fields, ["headLinks", "htmlDir", "htmlLang", "internalRel"]);
});

test("diffSnapshots reports which allow entries were used", () => {
  const used = {};
  const allow = { ...NO_ALLOW, removedText: ["Gone", "Never there"] };
  assert.deepEqual(diffSnapshots(snap(`<p>Gone</p>`), snap(``), allow, used), []);
  assert.deepEqual([...used.removedText], ["Gone"]);
});
