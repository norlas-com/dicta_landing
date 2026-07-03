import { ui, DEFAULT_LOCALE, LOCALES, type Locale } from "./ui";

// The functional app's home after the split (see migration plan). Marketing is
// static and never knows login state — every CTA is an unconditional link here.
export const APP_URL = "https://meet.dicta.uz";
export const DOWNLOADS_BASE = "https://downloads.dicta.uz/desktop";

/** Derive the active locale from an Astro URL pathname (/ru/... , /en/... , else uz). */
export function localeFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg ?? "")
    ? (seg as Locale)
    : DEFAULT_LOCALE;
}

/** The dictionary for a locale. */
export function t(locale: Locale) {
  return ui[locale];
}

/**
 * Build a locale-aware internal path. uz is unprefixed; ru/en get their prefix.
 *   localePath("/download", "ru") -> "/ru/download"
 *   localePath("/", "uz")         -> "/"
 */
export function localePath(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path.replace(/^\/+/, "/");
  if (locale === DEFAULT_LOCALE) return clean === "" ? "/" : clean;
  return clean === "" ? `/${locale}` : `/${locale}${clean}`;
}

/** Same page in another locale, given the current pathname (for the switcher + hreflang). */
export function switchLocalePath(currentPath: string, target: Locale): string {
  // Strip any existing locale prefix to get the bare route.
  const parts = currentPath.split("/").filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0] ?? "")) parts.shift();
  const bare = "/" + parts.join("/");
  return localePath(bare === "/" ? "/" : bare.replace(/\/$/, ""), target);
}

/** App link (sign-up / sign-in / download-app), always absolute to the app host. */
export function appUrl(path = "/"): string {
  return `${APP_URL}${path}`;
}
