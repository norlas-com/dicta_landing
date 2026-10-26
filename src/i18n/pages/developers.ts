// Copy for /developers. Describes only what exists in the product:
// task export (Trello, Jira, ClickUp, Asana, Hisobot), Telegram recaps, an MCP
// connection for AI assistants, and API access on request. No endpoints or
// internal details on purpose: this repository is public.
import type { Locale } from "../locales";

export interface DevelopersPageCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  h1: string;
  intro: string;
  integrations: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { name: string; body: string }[];
  };
  api: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
    note: string;
  };
  links: { pricing: string; faq: string; signup: string };
}

export const developersPage: Record<Locale, DevelopersPageCopy> = {
  en: {
    metaTitle: "Dicta integrations and API: Trello, Telegram and more | Dicta",
    metaDescription:
      "Send action items from your meetings to Trello, Jira, ClickUp, Asana or Hisobot, get recaps in Telegram, and ask us about API access for sending recordings and getting transcripts back.",
    breadcrumbHome: "Home",
    h1: "Dicta integrations and API access",
    intro:
      "Meeting notes are only useful when they reach the place where work happens. Dicta sends tasks to your task tracker and recaps to Telegram, and we can open API access for your own systems.",
    integrations: {
      eyebrow: "Integrations",
      title: "Where your meeting results can go",
      sub: "Connect a service once in Dicta, then export the action items of any meeting to it.",
      items: [
        {
          name: "Trello",
          body: "Turn the action items from a meeting into cards on your Trello board, with the owner taken from the meeting.",
        },
        {
          name: "Jira, ClickUp and Asana",
          body: "The same task export works with Jira, ClickUp and Asana, so tasks land in the tracker your team already uses.",
        },
        {
          name: "Hisobot",
          body: "Export meeting tasks to Hisobot, a task management platform.",
        },
        {
          name: "Telegram",
          body: "Link your Telegram account and Dicta sends you the recap of each meeting: key decisions, topics and action items.",
        },
        {
          name: "AI assistants (MCP)",
          body: "Dicta can be connected to AI assistants that support MCP, so you can work with your meetings from the assistant you already use.",
        },
      ],
    },
    api: {
      eyebrow: "API",
      title: "API access on request",
      body: "There is no self-serve public API yet. If you want to send recordings from your own system and receive the transcript, speakers and AI summary back, we set up API access for you on request.",
      points: [
        "Send an audio or video file and get a transcript with speakers and a summary",
        "Results by polling or by notification to your system",
        "Uzbek, Russian and English recordings",
      ],
      cta: "Request API access",
      note: "Tell us what you are building and how many hours of recordings you expect.",
    },
    links: { pricing: "See pricing", faq: "Read the FAQ", signup: "Start free" },
  },
  ru: {
    metaTitle: "Интеграции и API Dicta: Trello, Telegram и другое | Dicta",
    metaDescription:
      "Отправляйте задачи со встреч в Trello, Jira, ClickUp, Asana или Hisobot, получайте резюме в Telegram и запросите доступ к API, чтобы отправлять записи и получать расшифровки.",
    breadcrumbHome: "Главная",
    h1: "Интеграции и доступ к API Dicta",
    intro:
      "Итоги встреч полезны, когда попадают туда, где идёт работа. Dicta отправляет задачи в ваш трекер и резюме в Telegram, а для ваших систем мы можем открыть доступ к API.",
    integrations: {
      eyebrow: "Интеграции",
      title: "Куда можно отправить итоги встречи",
      sub: "Подключите сервис в Dicta один раз и экспортируйте в него задачи любой встречи.",
      items: [
        {
          name: "Trello",
          body: "Превращайте задачи со встречи в карточки на доске Trello, ответственного берём из самой встречи.",
        },
        {
          name: "Jira, ClickUp и Asana",
          body: "Тот же экспорт задач работает с Jira, ClickUp и Asana, поэтому задачи попадают в трекер, которым уже пользуется ваша команда.",
        },
        {
          name: "Hisobot",
          body: "Экспортируйте задачи встреч в Hisobot, платформу для управления задачами.",
        },
        {
          name: "Telegram",
          body: "Привяжите аккаунт Telegram, и Dicta будет присылать резюме каждой встречи: ключевые решения, темы и задачи.",
        },
        {
          name: "ИИ-ассистенты (MCP)",
          body: "Dicta можно подключить к ИИ-ассистентам с поддержкой MCP и работать со своими встречами из привычного ассистента.",
        },
      ],
    },
    api: {
      eyebrow: "API",
      title: "Доступ к API по запросу",
      body: "Публичного API с самостоятельным подключением пока нет. Если вы хотите отправлять записи из своей системы и получать расшифровку, говорящих и AI-резюме, мы настроим доступ к API по запросу.",
      points: [
        "Отправьте аудио- или видеофайл и получите расшифровку с говорящими и резюме",
        "Результат по запросу статуса или уведомлением в вашу систему",
        "Записи на узбекском, русском и английском",
      ],
      cta: "Запросить доступ к API",
      note: "Расскажите, что вы создаёте и сколько часов записей ожидаете.",
    },
    links: { pricing: "Посмотреть цены", faq: "Прочитать FAQ", signup: "Начать бесплатно" },
  },
  uz: {
    metaTitle: "Dicta integratsiyalari va API: Trello, Telegram va boshqalar | Dicta",
    metaDescription:
      "Uchrashuvlardagi vazifalarni Trello, Jira, ClickUp, Asana yoki Hisobotga yuboring, xulosalarni Telegramda oling va yozuv yuborib, transkripsiya olish uchun API ruxsatini soʻrang.",
    breadcrumbHome: "Bosh sahifa",
    h1: "Dicta integratsiyalari va API ruxsati",
    intro:
      "Uchrashuv natijalari ish ketayotgan joyga yetib borsagina foydali. Dicta vazifalarni vazifalar trekeringizga, xulosalarni Telegramga yuboradi, oʻz tizimlaringiz uchun esa API ruxsatini ochib bera olamiz.",
    integrations: {
      eyebrow: "Integratsiyalar",
      title: "Uchrashuv natijalari qayerga yuborilishi mumkin",
      sub: "Xizmatni Dictaga bir marta ulang, soʻng istalgan uchrashuvning vazifalarini unga eksport qiling.",
      items: [
        {
          name: "Trello",
          body: "Uchrashuvdagi vazifalarni Trello doskangizdagi kartochkalarga aylantiring, masʼul shaxs uchrashuvning oʻzidan olinadi.",
        },
        {
          name: "Jira, ClickUp va Asana",
          body: "Vazifalarni eksport qilish Jira, ClickUp va Asana bilan ham ishlaydi, shu bois vazifalar jamoangiz allaqachon foydalanayotgan trekerga tushadi.",
        },
        {
          name: "Hisobot",
          body: "Uchrashuv vazifalarini Hisobot vazifalarni boshqarish platformasiga eksport qiling.",
        },
        {
          name: "Telegram",
          body: "Telegram akkauntingizni bogʻlang — Dicta har bir uchrashuv xulosasini yuboradi: asosiy qarorlar, mavzular va vazifalar.",
        },
        {
          name: "AI yordamchilar (MCP)",
          body: "Dictani MCP qoʻllab-quvvatlaydigan AI yordamchilarga ulash mumkin, shunda uchrashuvlaringiz bilan oʻzingiz odatlangan yordamchidan ishlaysiz.",
        },
      ],
    },
    api: {
      eyebrow: "API",
      title: "API ruxsati soʻrov boʻyicha",
      body: "Hozircha mustaqil ulanadigan ochiq API yoʻq. Oʻz tizimingizdan yozuv yuborib, transkripsiya, gapiruvchilar va AI xulosasini qaytarib olmoqchi boʻlsangiz, API ruxsatini soʻrov boʻyicha sozlab beramiz.",
      points: [
        "Audio yoki video fayl yuboring va gapiruvchilar koʻrsatilgan transkripsiya hamda xulosa oling",
        "Natija holatni soʻrash yoki tizimingizga bildirishnoma orqali keladi",
        "Oʻzbek, rus va ingliz tilidagi yozuvlar",
      ],
      cta: "API ruxsatini soʻrash",
      note: "Nima yaratayotganingizni va qancha soatlik yozuv kutayotganingizni yozing.",
    },
    links: { pricing: "Narxlarni koʻrish", faq: "Savol-javoblarni oʻqish", signup: "Bepul boshlash" },
  },
  ar: {
    metaTitle: "تكاملات Dicta وواجهة API: Trello وTelegram وغيرها | Dicta",
    metaDescription:
      "أرسل مهام اجتماعاتك إلى Trello أو Jira أو ClickUp أو Asana أو Hisobot، واستلم الملخصات في Telegram، واطلب الوصول إلى واجهة API لإرسال التسجيلات واستلام النصوص.",
    breadcrumbHome: "الرئيسية",
    h1: "تكاملات Dicta والوصول إلى واجهة API",
    intro:
      "لا تفيد نتائج الاجتماعات إلا حين تصل إلى المكان الذي يجري فيه العمل. يرسل Dicta المهام إلى أداة إدارة المهام والملخصات إلى Telegram، ويمكننا فتح الوصول إلى واجهة API لأنظمتك.",
    integrations: {
      eyebrow: "التكاملات",
      title: "إلى أين يمكن إرسال نتائج الاجتماع",
      sub: "اربط الخدمة بـ Dicta مرة واحدة، ثم صدّر إليها مهام أي اجتماع.",
      items: [
        {
          name: "‏Trello",
          body: "حوّل مهام الاجتماع إلى بطاقات على لوحة Trello، ويؤخذ المسؤول من الاجتماع نفسه.",
        },
        {
          name: "‏Jira وClickUp وAsana",
          body: "يعمل تصدير المهام نفسه مع Jira وClickUp وAsana، فتصل المهام إلى الأداة التي يستخدمها فريقك أصلًا.",
        },
        {
          name: "‏Hisobot",
          body: "صدّر مهام الاجتماعات إلى Hisobot، وهي منصة لإدارة المهام.",
        },
        {
          name: "‏Telegram",
          body: "اربط حساب Telegram وسيرسل لك Dicta ملخص كل اجتماع: القرارات الرئيسية والمواضيع والمهام.",
        },
        {
          name: "مساعدو الذكاء الاصطناعي (MCP)",
          body: "يمكن ربط Dicta بمساعدي الذكاء الاصطناعي الذين يدعمون MCP، لتعمل على اجتماعاتك من المساعد الذي تستخدمه بالفعل.",
        },
      ],
    },
    api: {
      eyebrow: "API",
      title: "الوصول إلى API عند الطلب",
      body: "لا توجد حاليًا واجهة API عامة للاشتراك الذاتي. إذا أردت إرسال التسجيلات من نظامك واستلام النص والمتحدثين وملخص الذكاء الاصطناعي، فسنهيّئ لك الوصول إلى API عند الطلب.",
      points: [
        "أرسل ملف صوت أو فيديو واحصل على نص بالمتحدثين وملخص",
        "تصلك النتيجة بالاستعلام عن الحالة أو بإشعار إلى نظامك",
        "تسجيلات بالأوزبكية والروسية والإنجليزية",
      ],
      cta: "اطلب الوصول إلى API",
      note: "أخبرنا بما تبنيه وعدد ساعات التسجيل التي تتوقعها.",
    },
    links: { pricing: "عرض الأسعار", faq: "اقرأ الأسئلة الشائعة", signup: "ابدأ مجانًا" },
  },
};
