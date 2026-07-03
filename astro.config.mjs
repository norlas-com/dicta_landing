// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Static marketing site for dicta.uz (Cloudflare Pages). The functional app
// lives separately at meet.dicta.uz. Tri-lingual: uz (default, unprefixed),
// ru, en. Design system ported from the Next.js app (Lora + Urbanist, indigo
// accent, violet→indigo→cyan brand gradient).
export default defineConfig({
  site: "https://dicta.uz",
  trailingSlash: "ignore",
  // Honor a harness-assigned port (preview tooling) while defaulting to 4321.
  server: { port: Number(process.env.PORT) || 4321, host: true },
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // applyBaseStyles:false — we own the base layer in src/styles/global.css
    // (theme tokens, resets) rather than Tailwind's Preflight-only defaults.
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "uz",
        locales: { uz: "uz-UZ", ru: "ru-RU", en: "en-US" },
      },
    }),
  ],
});
