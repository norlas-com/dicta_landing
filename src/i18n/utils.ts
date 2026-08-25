import { ui, DEFAULT_LOCALE, LOCALES, type Locale } from "./ui";
import { SITE_COPY, type CopyOverride } from "./site-copy";
import { SITE } from "../../site.config.mjs";

// The functional app's home after the split (see migration plan). Marketing is
// static and never knows login state — every CTA is an unconditional link here.
//
// Per site: dicta.uz points at meet.dicta.uz, dicta.live at meet.dicta.live.
// It was pinned to meet.dicta.uz, which would have sent every dicta.live
// visitor to the Uzbek app — where their session does not exist.
export const APP_URL = `https://${SITE.appHost}`;
export const DOWNLOADS_BASE = "https://downloads.dicta.uz/desktop";

/** Derive the active locale from an Astro URL pathname (/ru/... , /en/... , else uz). */
export function localeFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg ?? "")
    ? (seg as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Deep-merge a partial override onto the base dictionary. Strings and arrays
 * replace wholesale; plain objects merge key by key. Build-time only.
 */
function merge<T>(base: T, over: unknown): T {
  if (over === undefined) return base;
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof over !== "object" ||
    over === null ||
    Array.isArray(over)
  ) {
    return over as T;
  }
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
    out[k] = merge((base as Record<string, unknown>)[k], v);
  }
  return out as T;
}

// Merged once per locale at module load rather than per call: this runs inside
// every component render during the build.
const DICTS = Object.fromEntries(
  (LOCALES as readonly Locale[]).map((l) => [
    l,
    merge(ui[l], (SITE_COPY[SITE.id] as Record<string, CopyOverride> | undefined)?.[l]),
  ]),
) as Record<Locale, (typeof ui)[Locale]>;

/** The dictionary for a locale, with this site's copy overrides applied. */
export function t(locale: Locale) {
  return DICTS[locale];
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
