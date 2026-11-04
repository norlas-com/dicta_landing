// FAQ content shared by the home page block, the /faq page and their
// FAQPage JSON-LD. The wording lives in the dictionary (ui.ts); this decides
// the order, which answers link onward, and fills the plan numbers from the
// billing catalog so they can never disagree with the pricing section.

import type { Locale } from "../i18n/ui";
import { t, localePath } from "../i18n/utils";
import type { BillingCatalog } from "./catalog";

export type FaqKey =
  | "what"
  | "meetingsFree"
  | "rooms"
  | "bot"
  | "desktop"
  | "languages"
  | "speakers"
  | "summary"
  | "limits"
  | "pay"
  | "privacy"
  | "apps"
  | "sales";

/** Full /faq order. */
export const FAQ_KEYS: readonly FaqKey[] = [
  "what",
  "meetingsFree",
  "rooms",
  "bot",
  "desktop",
  "languages",
  "speakers",
  "summary",
  "limits",
  "pay",
  "privacy",
  "apps",
  "sales",
];

/** What a first-time visitor needs, for the home page block. "Are meetings
 *  free?" sits right after "what": people read "60 min/month" as a call-time
 *  cap, and it is not one. */
export const FAQ_HOME_KEYS: readonly FaqKey[] = ["what", "meetingsFree", "rooms", "bot", "limits", "privacy"];

export interface FaqItem {
  key: FaqKey;
  q: string;
  /** Plain text: it is also what goes into the JSON-LD. */
  a: string;
  /** Optional onward link shown under the answer. */
  more?: { href: string; label: string };
}

export function faqItems(
  locale: Locale,
  catalog: BillingCatalog | null,
  keys: readonly FaqKey[] = FAQ_KEYS,
): FaqItem[] {
  const d = t(locale);
  const f = d.faq;
  const home = localePath("/", locale);
  const homeBase = home === "/" ? "" : home;

  const more: Partial<Record<FaqKey, { href: string; label: string }>> = {
    rooms: { href: localePath("/download", locale), label: f.moreLabels.download },
    desktop: { href: localePath("/download", locale), label: f.moreLabels.download },
    apps: { href: localePath("/download", locale), label: f.moreLabels.download },
    privacy: { href: localePath("/privacy", locale), label: f.moreLabels.privacy },
    sales: { href: `${homeBase}/#contact`, label: f.moreLabels.contact },
  };

  // Without a catalog the Pricing section is not rendered, so there is nothing
  // for the "see pricing" link to land on.
  let limits = f.q.limitsNoCatalog;
  let meetingsFree = f.q.meetingsFreeNoCatalog;
  if (catalog) {
    const free = catalog.plans.find((p) => p.id === "free");
    const paid = catalog.plans.filter((p) => p.id !== "free");
    if (free) meetingsFree = f.q.meetingsFree.a.replace("{free}", String(free.minutes));
    if (free && paid.length > 0) {
      limits = f.q.limits.a
        .replace("{free}", String(free.minutes))
        .replace(
          "{paid}",
          paid.map((p) => `${p.name} ${d.pricing.minutes.replace("{min}", String(p.minutes))}`).join(", "),
        );
      more.limits = { href: `${homeBase}/#pricing`, label: f.moreLabels.pricing };
      more.pay = more.limits;
    }
  }

  // Answers filled from the catalog; the rest are used as written.
  const filled: Partial<Record<FaqKey, string>> = { limits, meetingsFree };

  return keys.map((key) => {
    const entry = f.q[key] as { q: string; a: string };
    return { key, q: entry.q, a: filled[key] ?? entry.a, more: more[key] };
  });
}

/** schema.org FAQPage for a set of items. */
export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
