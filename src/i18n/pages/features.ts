import type { Locale } from "../locales";
import { FEATURE_SLUGS, type FeatureSlug, type FeaturesLocale } from "./features-types";
import { uz } from "./features-uz";
import { ru } from "./features-ru";
import { en } from "./features-en";
import { ar } from "./features-ar";

export { FEATURE_SLUGS };
export type { FeatureSlug };

export const FEATURES: Record<Locale, FeaturesLocale> = { uz, ru, en, ar };

/** Which screenshot (name in src/assets/landing/shots) belongs to a feature; absent = none exists. */
export const FEATURE_SHOTS: Partial<Record<FeatureSlug, { name: string; mobile?: boolean }>> = {
  transcription: { name: "transcript" },
  "ai-summary": { name: "recap" },
  "notetaker-bot": { name: "meetings-list" },
  "offline-recording": { name: "mobile-recap", mobile: true },
  "tasks-integrations": { name: "tasks" },
};

/** Related features, in display order. */
export const FEATURE_RELATED: Record<FeatureSlug, FeatureSlug[]> = {
  transcription: ["ai-summary", "upload", "offline-recording"],
  "ai-summary": ["tasks-integrations", "transcription", "ai-chat"],
  "notetaker-bot": ["transcription", "ai-summary", "desktop-app"],
  "meeting-room": ["webinars", "transcription", "ai-summary"],
  "offline-recording": ["transcription", "upload", "ai-summary"],
  upload: ["transcription", "ai-summary", "offline-recording"],
  "desktop-app": ["notetaker-bot", "meeting-room", "transcription"],
  webinars: ["meeting-room", "transcription", "ai-summary"],
  "ai-chat": ["ai-summary", "transcription", "tasks-integrations"],
  "tasks-integrations": ["ai-summary", "ai-chat", "notetaker-bot"],
};
