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
    `> ${d.home.hero.titlePre} ${d.home.hero.titleAccent} ${d.home.hero.sub}`,
    "",
    "Dicta is an AI meeting assistant built in Uzbekistan. Every path ends in a recording, a transcript with speakers, and an AI summary (topics, key decisions, action items with owners).",
    "",
    "## What Dicta does",
    "",
    "- Online meetings: Dicta's own meeting room in the browser and the apps. Instant or scheduled meetings, join by meeting code.",
    "- Meeting bot (notetaker): send a bot into Zoom, Google Meet or Microsoft Teams to record and transcribe.",
    "- Offline meetings: record an in-person meeting on a phone; speaker diarization tells the voices apart.",
    "- Round table: one room, many phones. Each person records on their own phone and Dicta merges the tracks.",
    "- Upload recordings: upload an audio or video file to get a transcript and summary.",
    "- Desktop app (macOS and Windows): records meetings on the computer automatically.",
    "- Webinars: up to about 600 participants.",
    "- AI chat: ask questions across your past meetings.",
    "- Tasks and follow-ups: action items extracted from meetings, exported to Trello and other task trackers; recaps can be delivered through Telegram.",
    "- Languages: Uzbek, Russian, English and Arabic.",
    "- Apps: web, iOS, Android and desktop.",
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

  lines.push("", "## Site", "", `- [Sitemap](${SITE.url}/sitemap-index.xml)`);

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
