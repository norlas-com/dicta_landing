export const FEATURE_SLUGS = [
  "transcription",
  "ai-summary",
  "notetaker-bot",
  "meeting-room",
  "offline-recording",
  "upload",
  "desktop-app",
  "webinars",
  "ai-chat",
  "tasks-integrations",
] as const;
export type FeatureSlug = (typeof FEATURE_SLUGS)[number];

export interface FeatureCopy {
  /** Short name used in nav cards, related lists and breadcrumbs. */
  name: string;
  /** <title> without the brand suffix. */
  metaTitle: string;
  metaDesc: string;
  h1: string;
  sub: string;
  /** One line shown on the /features index card. */
  card: string;
  benefits: { t: string; d: string }[];
  steps: { t: string; d: string }[];
  faq: { q: string; a: string }[];
}

export interface FeaturesUi {
  indexTitle: string;
  indexMetaTitle: string;
  indexMetaDesc: string;
  indexSub: string;
  breadcrumbRoot: string;
  benefitsTitle: string;
  howTitle: string;
  faqTitle: string;
  relatedTitle: string;
  moreTitle: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  useCases: string;
  pricing: string;
  allFeatures: string;
  learnMore: string;
  desktopLink: string;
}

export interface FeaturesLocale {
  ui: FeaturesUi;
  features: Record<FeatureSlug, FeatureCopy>;
}
