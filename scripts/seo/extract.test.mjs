import { test } from "node:test";
import assert from "node:assert/strict";
import { extractPage } from "./extract.mjs";

const page = (head, body) => `<!doctype html><html><head>${head}</head><body>${body}</body></html>`;

test("extracts head fields", () => {
  const html = page(
    `<title>Dicta — notes</title>
     <meta name="description" content="Meeting notes">
     <link rel="canonical" href="https://dicta.uz/pricing/">
     <link rel="alternate" hreflang="uz-UZ" href="https://dicta.uz/pricing/">
     <link rel="alternate" hreflang="en-US" href="https://dicta.uz/en/pricing/">
     <meta property="og:title" content="Dicta OG">`,
    `<p>Body</p>`,
  );
  const s = extractPage(html, "pricing/index.html");
  assert.equal(s.path, "pricing/index.html");
  assert.equal(s.title, "Dicta — notes");
  assert.equal(s.description, "Meeting notes");
  assert.equal(s.canonical, "https://dicta.uz/pricing/");
  assert.deepEqual(s.hreflang, [
    { lang: "en-US", href: "https://dicta.uz/en/pricing/" },
    { lang: "uz-UZ", href: "https://dicta.uz/pricing/" },
  ]);
  assert.equal(s.meta["og:title"], "Dicta OG");
});

test("headings keep order and level", () => {
  const s = extractPage(page("", "<h2>B</h2><h1>A</h1><h3>C</h3>"), "index.html");
  assert.deepEqual(s.headings, [
    { level: 2, text: "B" },
    { level: 1, text: "A" },
    { level: 3, text: "C" },
  ]);
});

test("text excludes aria-hidden and data-ui-label subtrees", () => {
  const s = extractPage(
    page("", `<p>Real</p><div aria-hidden="true">Deco</div><span data-ui-label>Recording</span>`),
    "index.html",
  );
  assert.deepEqual(s.text, ["Real"]);
});

test("analytics multiset", () => {
  const a = `<a href="/x/" data-analytics-event="cta_clicked" data-analytics-location="hero">Go</a>`;
  const s = extractPage(page("", a + a), "index.html");
  assert.deepEqual(s.analytics, ["cta_clicked|hero|", "cta_clicked|hero|"]);
});

test("hiddenText", () => {
  const s = extractPage(page("", `<div hidden><p>X</p></div><dialog><p>Menu</p></dialog>`), "index.html");
  assert.deepEqual(s.hiddenText, ["X"]);
});

test("jsonLd key order irrelevant", () => {
  const a = extractPage(page(`<script type="application/ld+json">{"b":1,"a":2}</script>`, ""), "index.html");
  const b = extractPage(page(`<script type="application/ld+json">{"a":2,"b":1}</script>`, ""), "index.html");
  assert.equal(a.jsonLd.length, 1);
  assert.deepEqual(a.jsonLd, b.jsonLd);
});
