// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./site.config.mjs";

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
  ],
});
