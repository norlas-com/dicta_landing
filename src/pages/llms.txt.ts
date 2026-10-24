// /llms.txt — a plain-text map of the site for LLM crawlers (llmstxt.org).
//
// Generated per build so each domain lists its own absolute URLs and only the
// locales and pages that site actually ships; dicta.uz and dicta.live differ in
// both. English on purpose: it is the one language both sites carry.

import type { APIRoute } from "astro";
import { SITE } from "../../site.config.mjs";
import { LOCALES, type Locale } from "../i18n/locales";
import { t, localePath, APP_URL } from "../i18n/utils";
import { fetchCatalog } from "../lib/catalog";

const LANGUAGE_NAME: Record<Locale, string> = {
  uz: "Uzbek",
  ru: "Russian",
  en: "English",
  ar: "Arabic",
};

export const GET: APIRoute = async () => {
  const d = t("en");
  const catalog = await fetchCatalog();
  const abs = (path: string, locale: Locale) => new URL(localePath(path, locale), SITE.url).toString();
  const locales = LOCALES as readonly Locale[];

  const lines: string[] = [
    "# Dicta",
    "",
    `> ${d.landing.h1Pre} ${d.landing.h1Accent} ${d.landing.sub}`,
    "",
    "## Main pages",
    "",
    ...locales.map((l) => `- [Home (${LANGUAGE_NAME[l]})](${abs("/", l)})`),
    ...(catalog ? [`- [Pricing](${abs("/", "en")}#pricing): ${d.pricing.sub}`] : []),
    `- [Download](${abs("/download", "en")}): ${d.download.sub}`,
    "",
    "## Help",
    "",
    ...locales.map((l) => `- [FAQ (${LANGUAGE_NAME[l]})](${abs("/faq", l)}): ${d.faq.pageSub}`),
    "",
    "## Legal",
    "",
    `- [Privacy Policy](${abs("/privacy", "en")})`,
    `- [Terms of Service](${abs("/terms", "en")})`,
    ...(SITE.publicOffer ? [`- [Public Offer](${abs("/offer", "en")})`] : []),
    `- [Delete your account](${abs("/delete-account", "en")})`,
    "",
    "## Product",
    "",
    `- [Dicta app](${APP_URL}): sign in or create an account`,
    `- [Sign up](${APP_URL}/sign-up)`,
    `- [Sign in](${APP_URL}/sign-in)`,
  ];

  if (catalog) {
    lines.push("", "## Plans", "");
    for (const plan of catalog.plans) {
      lines.push(`- ${plan.name}: ${plan.minutes} minutes per month, ${plan.storage_gb} GB storage`);
    }
  }

  return new Response(lines.join("\n") + "\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
