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

test("internalRel records internal links that carry a rel", () => {
  const s = extractPage(
    `<!doctype html><html><head><link rel="canonical" href="https://dicta.uz/"></head><body>
      <a href="/pricing/">P</a><a href="/blog/2/" rel="next">N</a><a href="https://dicta.uz/x/" rel="nofollow">X</a>
      <a href="/blog/2/" rel="next">N again</a><a href="https://example.com/" rel="noopener">E</a></body></html>`,
    "index.html",
  );
  assert.deepEqual(s.internalRel, [
    { href: "/blog/2/", rel: "next" },
    { href: "https://dicta.uz/x/", rel: "nofollow" },
  ]);
});

test("headLinks keeps head <link>s not covered elsewhere, as rel|type|href", () => {
  const s = extractPage(
    `<!doctype html><html><head>
      <link rel="stylesheet" href="/a.css"><link rel="preload" as="font" href="/f.woff2"><link rel="modulepreload" href="/m.js">
      <link rel="icon" href="/favicon.ico"><link rel="shortcut icon" href="/f2.ico"><link rel="apple-touch-icon" href="/t.png"><link rel="manifest" href="/site.webmanifest">
      <link rel="canonical" href="https://dicta.uz/"><link rel="alternate" hreflang="en-US" href="https://dicta.uz/en/">
      <link rel="alternate" type="application/rss+xml" title="Blog" href="/blog/rss.xml">
      <link rel="preconnect" href="https://fonts.example">
    </head><body></body></html>`,
    "index.html",
  );
  assert.deepEqual(s.headLinks, ["alternate|application/rss+xml|/blog/rss.xml", "preconnect||https://fonts.example"]);
});

test("htmlLang and htmlDir", () => {
  const s = extractPage(`<!doctype html><html lang="ar" dir="rtl"><head></head><body></body></html>`, "ar/index.html");
  assert.equal(s.htmlLang, "ar");
  assert.equal(s.htmlDir, "rtl");
  const none = extractPage(`<!doctype html><html><head></head><body></body></html>`, "index.html");
  assert.equal(none.htmlLang, null);
  assert.equal(none.htmlDir, null);
});
