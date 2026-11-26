// Small UI strings for the "your visit is a meeting" redesign: labels, the
// visit recap and the blog-post header rows. Real page copy stays in ui.ts;
// everything here is chrome and is rendered inside data-ui-label elements.
import type { Locale } from "../locales.ts";

export type VisitTopic =
  | "home"
  | "features"
  | "useCases"
  | "pricing"
  | "blog"
  | "download"
  | "developers"
  | "faq";

export interface MeetingUi {
  recording: string;
  notesLive: string;
  speakers: string;
  nextStep: string;
  you: string;
  dicta: string;
  taskStartFree: string;
  taskTryFeature: string;
  /** "+ minutes" */
  stepLater: string;
  visitPages: (n: number) => string;
  visitLookedAt: string;
  topics: Record<VisitTopic, string>;
  post: { topic: string; writtenBy: string; duration: string; date: string; inThisPost: string };
}

// Plural form picked by Intl.PluralRules, so ru/ar stay correct for any n.
function plural(locale: string, forms: Partial<Record<Intl.LDMLPluralRule, string>>, other: string) {
  const rules = new Intl.PluralRules(locale);
  return (n: number) => (forms[rules.select(n)] ?? other).replace("{n}", String(n));
}

const en: MeetingUi = {
  recording: "Recording",
  notesLive: "notes, live",
  speakers: "Speakers",
  nextStep: "Next step",
  you: "You",
  dicta: "Dicta",
  taskStartFree: "start for free",
  taskTryFeature: "try it on your next meeting",
  stepLater: "+ minutes",
  visitPages: plural("en", { one: "{n} page" }, "{n} pages"),
  visitLookedAt: "Looked at",
  topics: {
    home: "Home",
    features: "Features",
    useCases: "Use cases",
    pricing: "Pricing",
    blog: "Blog",
    download: "Download",
    developers: "Developers",
    faq: "FAQ",
  },
  post: { topic: "Topic", writtenBy: "Written by", duration: "Duration", date: "Date", inThisPost: "In this post" },
};

// NATIVE READ PENDING
const uz: MeetingUi = {
  recording: "Yozilmoqda",
  notesLive: "qaydlar, jonli",
  speakers: "Soʻzlovchilar",
  nextStep: "Keyingi qadam",
  you: "Siz",
  dicta: "Dicta",
  taskStartFree: "bepul boshlang",
  taskTryFeature: "keyingi uchrashuvingizda sinab koʻring",
  stepLater: "+ daqiqa",
  visitPages: plural("uz", {}, "{n} sahifa"),
  visitLookedAt: "Koʻrib chiqildi",
  topics: {
    home: "Bosh sahifa",
    features: "Imkoniyatlar",
    useCases: "Qoʻllanilishi",
    pricing: "Narxlar",
    blog: "Blog",
    download: "Yuklab olish",
    developers: "Dasturchilar uchun",
    faq: "FAQ",
  },
  post: { topic: "Mavzu", writtenBy: "Muallif", duration: "Davomiyligi", date: "Sana", inThisPost: "Maqolada" },
};

const ru: MeetingUi = {
  recording: "Идёт запись",
  notesLive: "заметки, вживую",
  speakers: "Спикеры",
  nextStep: "Следующий шаг",
  you: "Вы",
  dicta: "Dicta",
  taskStartFree: "начните бесплатно",
  taskTryFeature: "попробуйте на следующей встрече",
  stepLater: "+ минуты",
  visitPages: plural("ru", { one: "{n} страница", few: "{n} страницы", many: "{n} страниц" }, "{n} страницы"),
  visitLookedAt: "Просмотрено",
  topics: {
    home: "Главная",
    features: "Возможности",
    useCases: "Сценарии",
    pricing: "Цены",
    blog: "Блог",
    download: "Скачать",
    developers: "Разработчикам",
    faq: "FAQ",
  },
  post: { topic: "Тема", writtenBy: "Автор", duration: "Время чтения", date: "Дата", inThisPost: "В статье" },
};

const ar: MeetingUi = {
  recording: "جارٍ التسجيل",
  notesLive: "الملاحظات مباشرةً",
  speakers: "المتحدثون",
  nextStep: "الخطوة التالية",
  you: "أنت",
  dicta: "Dicta",
  taskStartFree: "ابدأ مجانًا",
  taskTryFeature: "جرّبها في اجتماعك القادم",
  stepLater: "+ دقائق",
  visitPages: plural(
    "ar",
    { zero: "{n} صفحة", one: "صفحة واحدة", two: "صفحتان", few: "{n} صفحات", many: "{n} صفحة" },
    "{n} صفحة",
  ),
  visitLookedAt: "تصفّحت",
  topics: {
    home: "الرئيسية",
    features: "الميزات",
    useCases: "حالات الاستخدام",
    pricing: "الأسعار",
    blog: "المدونة",
    download: "تنزيل",
    developers: "للمطورين",
    faq: "الأسئلة الشائعة",
  },
  post: { topic: "الموضوع", writtenBy: "بقلم", duration: "المدة", date: "التاريخ", inThisPost: "في هذا المقال" },
};

export const MEETING_UI: Record<Locale, MeetingUi> = { uz, ru, en, ar };

export const meetingUi = (locale: Locale): MeetingUi => MEETING_UI[locale];
