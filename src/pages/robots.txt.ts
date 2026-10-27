// /robots.txt, generated per site so the Sitemap line points at the host the
// build is served from (a static file would say dicta.uz on dicta.live too).
import type { APIRoute } from "astro";
import { SITE } from "../../site.config.mjs";

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
