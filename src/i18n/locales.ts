// The locale set, in a module with NO other imports and no large object graph.
//
// This is deliberately separate from ui.ts. Astro evaluates `getStaticPaths` in
// its own isolated scope, and importing a helper from ui.ts — a ~2,500-line
// module holding four full dictionaries — resolved to undefined there, so every
// `[lang]` route generated zero paths and the build died with "Cannot
// destructure property 'lang' of 'Astro.params'". Importing from here works
// because there is nothing else to evaluate.
//
// ui.ts re-exports these, so there is still one source of truth.

import { SITE } from "../../site.config.mjs";

/** Every locale the dictionary carries copy for, across both sites. */
export const ALL_LOCALES = ["uz", "ru", "en", "ar"] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/**
 * The locales THIS build ships, from site.config.mjs — dicta.uz publishes
 * uz/ru/en and dicta.live publishes en/ar/ru. Routes, hreflang and the language
 * switcher all derive from this, so a build never emits a page in a language
 * that site does not offer.
 */
export const LOCALES = SITE.locales as readonly Locale[];

export const DEFAULT_LOCALE = SITE.defaultLocale as Locale;

/** Locales that get a URL prefix — everything except the unprefixed default. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/**
 * `getStaticPaths` for the `[lang]` routes.
 *
 * Each of the six pages used to hardcode `[{ ru }, { en }]`. Adding a language
 * meant remembering all six, and missing one 404s that page in the new language
 * while the rest work — a partial rollout the build cannot detect.
 */
export const localeStaticPaths = () =>
  PREFIXED_LOCALES.map((lang) => ({ params: { lang } }));

/** Locales written right-to-left. Drives `<html dir>` in Layout.astro. */
export const RTL_LOCALES: readonly Locale[] = ["ar"] as const;

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function dirFor(locale: Locale): "rtl" | "ltr" {
  return isRTL(locale) ? "rtl" : "ltr";
}
