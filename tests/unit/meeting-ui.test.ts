import { test } from "node:test";
import assert from "node:assert/strict";
import { meetingUi } from "../../src/i18n/pages/meeting-ui.ts";
import { ALL_LOCALES } from "../../src/i18n/locales.ts";
import { navExtra } from "../../src/i18n/nav-extra.ts";

const STRING_KEYS = [
  "recording", "notesLive", "speakers", "nextStep", "you", "dicta",
  "taskStartFree", "taskTryFeature", "stepLater", "visitLookedAt",
] as const;
const TOPICS = ["home", "features", "useCases", "pricing", "blog", "download", "developers", "faq"] as const;
const POST_KEYS = ["topic", "writtenBy", "duration", "date", "inThisPost"] as const;

for (const locale of ALL_LOCALES) {
  test(`${locale}: every key is non-empty`, () => {
    const ui = meetingUi(locale);
    for (const k of STRING_KEYS) assert.ok(ui[k].trim().length > 0, `${locale}.${k}`);
    for (const t of TOPICS) assert.ok(ui.topics[t].trim().length > 0, `${locale}.topics.${t}`);
    for (const k of POST_KEYS) assert.ok(ui.post[k].trim().length > 0, `${locale}.post.${k}`);
    // Arabic spells out one/two ("صفحة واحدة", "صفحتان") instead of using a digit.
    for (const n of [1, 2, 3, 5, 11, 21]) {
      const s = ui.visitPages(n);
      assert.ok(s.trim().length > 0, `${locale}.visitPages(${n})`);
      if (locale !== "ar" || n > 2) assert.ok(s.includes(String(n)), `${locale}.visitPages(${n}) = ${s}`);
    }
  });
}

test("ru plural forms differ", () => {
  const ui = meetingUi("ru");
  assert.equal(new Set([ui.visitPages(1), ui.visitPages(2), ui.visitPages(5)].map((s) => s.replace(/\d+/, ""))).size, 3);
});

test("en plurals", () => {
  const ui = meetingUi("en");
  assert.equal(ui.visitPages(1), "1 page");
  assert.equal(ui.visitPages(4), "4 pages");
});

// ui.ts cannot be imported here (extensionless value import of ./locales), so
// these are copied from its `nav.download` / `nav.faq` entries per locale
// (src/i18n/ui.ts nav blocks at ~lines 36-38, 770-772, 1495-1497, 2225-2227).
const UI_NAV: Record<string, { download: string; faq: string }> = {
  en: { download: "Download", faq: "FAQ" },
  ru: { download: "Скачать", faq: "FAQ" },
  uz: { download: "Yuklab olish", faq: "FAQ" },
  ar: { download: "تنزيل", faq: "الأسئلة الشائعة" },
};
// nav-extra.ts writes uz apostrophes as ASCII '; meeting copy uses U+02BB.
const norm = (s: string) => s.replace(/['’ʼ]/g, "ʻ");

for (const locale of ALL_LOCALES) {
  test(`${locale}: topics match the nav labels`, () => {
    const t = meetingUi(locale).topics;
    const n = navExtra[locale];
    assert.equal(norm(t.features), norm(n.features));
    assert.equal(norm(t.useCases), norm(n.useCases));
    assert.equal(norm(t.pricing), norm(n.pricing));
    assert.equal(norm(t.blog), norm(n.blog));
    assert.equal(norm(t.developers), norm(n.developers));
    assert.equal(norm(t.download), norm(UI_NAV[locale].download));
    assert.equal(norm(t.faq), norm(UI_NAV[locale].faq));
  });
}
