// Types for site.config.mjs, which is plain JS so astro.config.mjs can import it.
export interface LandingSite {
  id: "uz" | "global";
  url: string;
  appHost: string;
  defaultLocale: "uz" | "ru" | "en" | "ar";
  locales: readonly ("uz" | "ru" | "en" | "ar")[];
  publicOffer: boolean;
  gaLinkerDomains: readonly string[];
}
export const SITES: Record<"uz" | "global", LandingSite>;
export function resolveSite(id: string | undefined): LandingSite;
export const SITE: LandingSite;
