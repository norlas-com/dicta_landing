import type { Locale } from "../locales";

/** Home page <title> and meta description, written around the three SEO
 *  pillars: offline meetings, online meetings, the meeting bot. */
export const HOME_META: Record<Locale, { title: string; description: string }> = {
  uz: {
    title: "Dicta: oflayn va onlayn uchrashuvlar, Zoom va Meet uchun bot",
    description:
      "Dicta uchrashuvni yozib oladi, o'zbek tilida matnga aylantiradi, xulosa tuzadi. Oflayn majlis, onlayn uchrashuv va Zoom, Meet uchun bot.",
  },
  ru: {
    title: "Dicta: протокол офлайн и онлайн встреч, бот для Zoom и Meet",
    description:
      "Dicta записывает встречи, расшифровывает речь и составляет протокол с задачами. Офлайн-совещания, онлайн-встречи и бот для Zoom, Meet и Teams.",
  },
  en: {
    title: "Dicta: AI notes for offline and online meetings, bot for Zoom and Meet",
    description:
      "Dicta records and transcribes meetings in Uzbek, Russian and English, then writes notes and tasks. Offline, online, and a bot for Zoom, Meet and Teams.",
  },
  ar: {
    title: "Dicta: ملاحظات ذكية للاجتماعات الحضورية وعبر الإنترنت وبوت لـ Zoom وMeet",
    description:
      "تسجّل Dicta اجتماعاتك وتفرّغها نصًّا وتكتب الملخص والمهام. اجتماعات حضورية وعبر الإنترنت وبوت لـ Zoom وMeet وTeams.",
  },
};
