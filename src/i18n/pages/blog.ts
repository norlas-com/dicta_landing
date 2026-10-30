import type { Locale } from "../locales";
import type { Topic } from "../../lib/blog-topics";

export interface BlogCopy {
  navLabel: string;
  indexTitle: string;
  indexDescription: string;
  h1: string;
  sub: string;
  empty: string;
  home: string;
  readMin: (n: number) => string;
  readMore: string;
  alsoIn: string;
  related: string;
  updated: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  langName: Record<Locale, string>;
  rssTitle: string;
  /** Chip that clears the topic filter. */
  allTopics: string;
  topicsLabel: string;
  topics: Record<Topic, string>;
  /** <title> and meta description of /blog/topic/<topic>. */
  topicTitle: (topic: string) => string;
  topicDescription: (topic: string) => string;
}

export const blogCopy: Record<Locale, BlogCopy> = {
  uz: {
    navLabel: "Blog",
    indexTitle: "Blog: majlis xulosasi, transkripsiya va AI yordamchi — Dicta",
    indexDescription:
      "Uchrashuvlarni yozib olish, ovozni matnga aylantirish va majlis xulosasini avtomatlashtirish bo'yicha amaliy qo'llanmalar.",
    h1: "Dicta blogi",
    sub: "Uchrashuvlarni yozib olish, ovozni matnga aylantirish va majlis xulosalarini avtomatlashtirish bo'yicha amaliy maqolalar.",
    empty: "Hozircha bu tilda maqolalar yo'q. Tez orada qo'shamiz.",
    home: "Bosh sahifa",
    readMin: (n) => `${n} daqiqa o'qish`,
    readMore: "O'qish",
    alsoIn: "Bu maqola boshqa tillarda",
    related: "O'xshash maqolalar",
    updated: "Yangilangan",
    ctaTitle: "Dicta'ni o'zingiz sinab ko'ring",
    ctaSub: "Yozib oling, transkripsiya va AI xulosani oling: kim nima dedi va kim nimani qilishi kerak. Ro'yxatdan o'tish bepul.",
    ctaPrimary: "Bepul boshlash",
    ctaSecondary: "Ilovani yuklab olish",
    langName: { uz: "O'zbekcha", ru: "Русский", en: "English", ar: "العربية" },
    rssTitle: "Dicta blogi",
    allTopics: "Barchasi",
    topicsLabel: "Mavzular",
    topics: { comparisons: "Taqqoslashlar", guides: "Qo'llanmalar", education: "Ta'lim" },
    topicTitle: (t) => `${t} — Dicta blogi`,
    topicDescription: (t) => `Dicta blogidagi «${t}» mavzusidagi maqolalar: uchrashuvlarni yozib olish, transkripsiya va AI xulosa.`,
  },
  ru: {
    navLabel: "Блог",
    indexTitle: "Блог: протокол совещания, расшифровка и ИИ-ассистент — Dicta",
    indexDescription:
      "Практические материалы о записи встреч, расшифровке аудио в текст и автоматическом протоколе совещания.",
    h1: "Блог Dicta",
    sub: "Практические статьи о записи встреч, расшифровке аудио и автоматических протоколах совещаний.",
    empty: "На этом языке статей пока нет. Скоро добавим.",
    home: "Главная",
    readMin: (n) => `${n} мин чтения`,
    readMore: "Читать",
    alsoIn: "Эта статья на других языках",
    related: "Похожие статьи",
    updated: "Обновлено",
    ctaTitle: "Попробуйте Dicta сами",
    ctaSub: "Запись, расшифровка и ИИ-резюме: кто что сказал и кто что должен сделать. Регистрация бесплатная.",
    ctaPrimary: "Начать бесплатно",
    ctaSecondary: "Скачать приложение",
    langName: { uz: "O'zbekcha", ru: "Русский", en: "English", ar: "العربية" },
    rssTitle: "Блог Dicta",
    allTopics: "Все",
    topicsLabel: "Темы",
    topics: { comparisons: "Сравнения", guides: "Руководства", education: "Обучение" },
    topicTitle: (t) => `${t} — блог Dicta`,
    topicDescription: (t) => `Статьи блога Dicta в разделе «${t}»: запись встреч, расшифровка и ИИ-резюме.`,
  },
  en: {
    navLabel: "Blog",
    indexTitle: "Blog: AI meeting notes, transcription and minutes — Dicta",
    indexDescription:
      "Practical guides on recording meetings, transcribing audio to text and automating meeting minutes, including in Uzbek.",
    h1: "The Dicta blog",
    sub: "Practical guides on recording meetings, transcribing audio and automating meeting minutes.",
    empty: "There are no articles in this language yet. Check back soon.",
    home: "Home",
    readMin: (n) => `${n} min read`,
    readMore: "Read",
    alsoIn: "This article in other languages",
    related: "Related articles",
    updated: "Updated",
    ctaTitle: "Try Dicta yourself",
    ctaSub: "Record, transcribe and get an AI summary: who said what and who owes what. Signing up is free.",
    ctaPrimary: "Start free",
    ctaSecondary: "Download the app",
    langName: { uz: "O'zbekcha", ru: "Русский", en: "English", ar: "العربية" },
    rssTitle: "The Dicta blog",
    allTopics: "All",
    topicsLabel: "Topics",
    topics: { comparisons: "Comparisons", guides: "Guides", education: "Education" },
    topicTitle: (t) => `${t} — the Dicta blog`,
    topicDescription: (t) => `${t} from the Dicta blog: recording meetings, transcription and AI meeting summaries.`,
  },
  ar: {
    navLabel: "المدونة",
    indexTitle: "المدونة: ملاحظات الاجتماعات بالذكاء الاصطناعي والتفريغ النصي — Dicta",
    indexDescription:
      "أدلة عملية حول تسجيل الاجتماعات وتحويل الصوت إلى نص وأتمتة محاضر الاجتماعات.",
    h1: "مدونة Dicta",
    sub: "أدلة عملية حول تسجيل الاجتماعات وتحويل الصوت إلى نص وأتمتة محاضر الاجتماعات.",
    empty: "لا توجد مقالات بهذه اللغة بعد. سنضيفها قريبًا.",
    home: "الرئيسية",
    readMin: (n) => `القراءة: ${n} د`,
    readMore: "اقرأ",
    alsoIn: "هذا المقال بلغات أخرى",
    related: "مقالات ذات صلة",
    updated: "تم التحديث",
    ctaTitle: "جرّب Dicta بنفسك",
    ctaSub: "سجّل واحصل على تفريغ نصي وملخص بالذكاء الاصطناعي: من قال ماذا ومن عليه ماذا. التسجيل مجاني.",
    ctaPrimary: "ابدأ مجانًا",
    ctaSecondary: "حمّل التطبيق",
    langName: { uz: "O'zbekcha", ru: "Русский", en: "English", ar: "العربية" },
    rssTitle: "مدونة Dicta",
    allTopics: "الكل",
    topicsLabel: "المواضيع",
    topics: { comparisons: "مقارنات", guides: "أدلة", education: "التعليم" },
    topicTitle: (t) => `${t} — مدونة Dicta`,
    topicDescription: (t) => `مقالات مدونة Dicta في قسم «${t}»: تسجيل الاجتماعات والتفريغ النصي وملخصات الذكاء الاصطناعي.`,
  },
};
