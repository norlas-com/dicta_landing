// Which marketing site this build produces: dicta.uz or dicta.live.
//
// The landing site is STATIC, so the canonical host, the hreflang alternates
// and the sitemap are all baked at build time. One bundle therefore cannot
// serve two domains correctly: whichever host it is served from, every
// canonical would point at the other one, and the second domain would be
// invisible to search — which defeats the point of having it.
//
// So this is one source, two builds. Cloudflare Pages runs the same repo twice
// with PUBLIC_SITE_ID set differently. (The web APP at meet.dicta.* is a single
// deployment that reads the Host header at request time; it can do that because
// it renders per request. See web/lib/site.ts.)
//
// Imported by astro.config.mjs and by src/i18n/locales.ts so the two cannot
// disagree about which locales exist.

export const SITES = {
  uz: {
    id: "uz",
    url: "https://dicta.uz",
    appHost: "meet.dicta.uz",
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    // Uzbek public offer (a UZ legal instrument: UZ courts, UZS, IT Park VAT
    // exemption). Not shown on the global site, where it would misrepresent
    // which terms a buyer is agreeing to.
    publicOffer: true,
    gaLinkerDomains: ["dicta.uz", "meet.dicta.uz"],
  },
  global: {
    id: "global",
    url: "https://dicta.live",
    appHost: "meet.dicta.live",
    defaultLocale: "en",
    locales: ["en", "ar", "ru"],
    publicOffer: false,
    gaLinkerDomains: ["dicta.live", "meet.dicta.live"],
  },
};

/** Unknown/unset falls back to the Uzbek site — the live product. */
export function resolveSite(id) {
  return SITES[id] ?? SITES.uz;
}

export const SITE = resolveSite(process.env.PUBLIC_SITE_ID);
