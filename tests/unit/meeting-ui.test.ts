import { test } from "node:test";
import assert from "node:assert/strict";
import { meetingUi } from "../../src/i18n/pages/meeting-ui.ts";
import { ALL_LOCALES } from "../../src/i18n/locales.ts";

const STRING_KEYS = [
  "recording", "notesLive", "summary", "speakers", "decisions", "tasks",
  "whatYouGet", "nextStep", "you", "dicta", "taskStartFree", "taskRecordNext",
  "taskTryFeature", "stepLater", "visitLookedAt",
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
