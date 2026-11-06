// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { execFileSync } from "node:child_process";
import { access, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { SITE } from "./site.config.mjs";

/**
 * When the site's non-blog content last changed: the newest commit touching
 * anything but blog posts. Every deploy rebuilds the whole site, so build time
 * would tell search engines every page changed on every deploy, and they learn
 * to ignore lastmod. Falls back to build time when git history is unavailable.
 */
function siteContentDate() {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", "src", "public", ":(exclude)src/content/blog"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (iso) return new Date(iso).toISOString();
  } catch {}
  return new Date().toISOString();
}

/**
 * The page's own date, read from the built HTML: a post's dateModified, or for
 * a blog listing the newest post it shows (<time datetime>). Null for pages
 * that carry no dates.
 * @param {string} html
 */
function pageContentDate(html) {
  const dates = [
    ...[...html.matchAll(/"dateModified":"([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/<time[^>]*\sdatetime="([^"]+)"/g)].map((m) => m[1]),
  ]
    .map((d) => new Date(d))
    .filter((d) => !Number.isNaN(d.getTime()));
  if (!dates.length) return null;
  return new Date(Math.max(...dates.map((d) => d.getTime()))).toISOString();
}

/**
 * @astrojs/sitemap only writes sitemap-index.xml + sitemap-0.xml, but
 * /sitemap.xml is where people, SEO tools and Yandex look first. Publish a
 * plain, readable urlset there: <loc> + <lastmod> per page, nothing else.
 * hreflang alternates already live in every page's <head>.
 *
 * Both sitemaps get the same treatment, decided from the built page itself:
 * a page marked noindex is dropped (a sitemap must list only pages we want
 * indexed), and lastmod is the page's real content date, not build time.
 * @type {import("astro").AstroIntegration}
 */
const flatSitemap = {
  name: "flat-sitemap",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const out = fileURLToPath(dir);
      // A second chunk means sitemap-0 is no longer the whole site.
      const split = await access(out + "sitemap-1.xml").then(() => true, () => false);
      if (split) throw new Error("sitemap split into chunks; /sitemap.xml would be partial");
      const chunk = await readFile(out + "sitemap-0.xml", "utf8");
      const entries = [...chunk.matchAll(/<url><loc>([^<]+)<\/loc>.*?<\/url>/gs)];
      if (!entries.length) throw new Error("no URLs found in sitemap-0.xml");
      const siteDate = siteContentDate();

      /** @type {{ loc: string, lastmod: string }[]} */
      const kept = [];
      let rewritten = chunk;
      for (const [entry, loc] of entries) {
        const path = new URL(loc).pathname;
        const rel = path.replace(/^\//, "");
        const file =
          out + (/\.[a-z0-9]+$/i.test(rel) ? rel : `${rel}${rel && !rel.endsWith("/") ? "/" : ""}index.html`);
        const html = await readFile(file, "utf8").catch(() => {
          throw new Error(`sitemap lists ${loc} but ${file} was not built`);
        });
        if (/<meta name="robots" content="[^"]*noindex/i.test(html)) {
          rewritten = rewritten.replace(entry, "");
          continue;
        }
        const lastmod = pageContentDate(html) ?? siteDate;
        kept.push({ loc, lastmod });
        rewritten = rewritten.replace(entry, entry.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${lastmod}</lastmod>`));
      }
      await writeFile(out + "sitemap-0.xml", rewritten);

      const urls = kept
        .map(({ loc, lastmod }) => `<url>\n<loc>${loc}</loc>\n<lastmod>${lastmod}</lastmod>\n</url>`)
        .join("\n");
      await writeFile(
        out + "sitemap.xml",
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  },
};

/**
 * Cloudflare Pages 308s `/pricing` to `/pricing/`; internal links name the
 * slashed URL so readers and crawlers skip the hop. Mirrors withSlash() in
 * src/i18n/utils.ts: files and `?`/`#` suffixes keep their shape.
 * @param {string} href
 */
function slashed(href) {
  const m = /** @type {RegExpMatchArray} */ (href.match(/^([^?#]*)(.*)$/));
  if (m[1] === "" || m[1].endsWith("/") || /\.[a-z0-9]+$/i.test(m[1])) return href;
  return `${m[1]}/${m[2]}`;
}

/**
 * Blog posts are written once and built for both sites, so their links name
 * the dicta.uz layout: `/en/...` for English, `meet.dicta.uz` for the app.
 * On a site whose default locale is English (dicta.live), `/en/...` does not
 * exist, and the app lives on that site's own host. Rewrite both at build.
 * Internal links also get the trailing slash (see slashed()).
 */
function rehypeSiteLinks() {
  const prefix = `/${SITE.defaultLocale}/`;
  /** @param {any} node */
  const walk = (node) => {
    const href = node.type === "element" && node.tagName === "a" ? node.properties?.href : undefined;
    if (typeof href === "string") {
      if (href.startsWith(prefix)) node.properties.href = slashed(href.slice(prefix.length - 1));
      else if (href.startsWith("/")) node.properties.href = slashed(href);
      else node.properties.href = href.replace("https://meet.dicta.uz", `https://${SITE.appHost}`);
    }
    node.children?.forEach(walk);
  };
  return walk;
}

// Region-neutral `ar`: the global site targets the whole Arabic-speaking
// market, and an ar-SA here would tell search engines otherwise.
/** @type {Record<string, string>} */
const HREFLANG = { uz: "uz-UZ", ru: "ru-RU", en: "en-US", ar: "ar" };

// Static marketing site (Cloudflare Pages). The functional app lives separately
// at meet.dicta.*. Built once per domain — see site.config.mjs — so canonical
// URLs, hreflang and the sitemap match the host they are served from. The
// default locale is unprefixed; the rest are path-prefixed. Design system
// ported from the Next.js app (Lora + Urbanist, indigo accent).
export default defineConfig({
  // Baked into canonical URLs, hreflang alternates and the sitemap, so it must
  // match the domain this build is served from. See site.config.mjs.
  site: SITE.url,
  trailingSlash: "ignore",
  markdown: { rehypePlugins: [rehypeSiteLinks] },
  // Home-page photography (src/lib/photos.ts) is fetched and re-encoded at
  // build time, then served from this site.
  image: { domains: ["images.unsplash.com"] },
  // Honor a harness-assigned port (preview tooling) while defaulting to 4321.
  server: { port: Number(process.env.PORT) || 4321, host: true },
  i18n: {
    defaultLocale: SITE.defaultLocale,
    locales: [...SITE.locales],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // applyBaseStyles:false — we own the base layer in src/styles/global.css
    // (theme tokens, resets) rather than Tailwind's Preflight-only defaults.
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Placeholder: flatSitemap replaces it with each page's content date.
      lastmod: new Date(),
      // A redirect stub is not a page. Without this the global sitemap would
      // still advertise /offer, which is exactly what the redirect exists to
      // prevent. The 404 page is not a page either (and is noindex).
      filter: (page) =>
        !/\/404\/?$/.test(page) && (SITE.publicOffer || !page.includes("/offer")),
      i18n: {
        defaultLocale: SITE.defaultLocale,
        locales: Object.fromEntries(
          SITE.locales.map((/** @type {string} */ l) => [l, HREFLANG[l]]),
        ),
      },
    }),
    // After sitemap(), so sitemap-0.xml exists when this runs.
    flatSitemap,
  ],
});
