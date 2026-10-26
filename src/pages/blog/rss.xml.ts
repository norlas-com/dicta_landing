// /blog/rss.xml: RSS 2.0 feed of the default locale's posts, hand-built so the
// site needs no extra dependency.
import type { APIRoute } from "astro";
import { SITE } from "../../../site.config.mjs";
import { DEFAULT_LOCALE } from "../../i18n/locales";
import { blogCopy } from "../../i18n/pages/blog";
import { postsFor, postPath } from "../../lib/blog";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async () => {
  const c = blogCopy[DEFAULT_LOCALE];
  const posts = await postsFor(DEFAULT_LOCALE);
  const items = posts
    .map((p) => {
      const link = new URL(postPath(p), SITE.url).toString();
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.description)}</description>
    </item>`;
    })
    .join("\n");
  const self = new URL("/blog/rss.xml", SITE.url).toString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(c.rssTitle)}</title>
    <link>${new URL("/blog", SITE.url).toString()}</link>
    <description>${esc(c.indexDescription)}</description>
    <language>${DEFAULT_LOCALE}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
