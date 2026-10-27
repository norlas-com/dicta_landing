// Copy for the home page scenes (hero stage, offline, online, payoff,
// languages, audiences, closing). Kept out of ui.ts: the shared dictionary
// still owns the strings other pages reuse (startFree, the live transcript
// lines, stats, FAQ, pricing, contact).
import type { Locale } from "../locales";

export interface Step {
  label: string;
  body: string;
}

export interface HomeV2 {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    sub: string;
    download: string;
    platforms: string;
    recording: string;
  };
  proof: {
    lead: string;
  };
  offline: {
    kicker: string;
    title: string;
    titleAccent: string;
    body: string;
    roundTable: string;
    link: string;
    recording: string;
    speakers: [string, string, string];
    photoAlt: string;
  };
  online: {
    kicker: string;
    title: string;
    titleAccent: string;
    body: string;
    link: string;
    placeholder: string;
    send: string;
    joined: string;
    room: string;
    photoAlt: string;
  };
  payoff: {
    title: string;
    titleAccent: string;
    steps: [Step, Step, Step, Step];
    meetingTitle: string;
    summary: string;
    decisions: [string, string, string];
    tasks: { text: string; who: string }[];
    question: string;
    answer: string;
    ask: string;
    link: string;
  };
  languages: {
    title: string;
    titleAccent: string;
    body: string;
    samples: string[];
  };
  audiences: {
    title: string;
    titleAccent: string;
    body: string;
    items: { label: string; slug: string }[];
    photoAlt: string;
  };
  closing: {
    title: string;
    titleAccent: string;
    sub: string;
  };
}

// Shared across locales: one sentence per language, shown in the language
// scene as the thing Dicta hears and writes down.
const SAMPLES = [
  "Assalomu alaykum, boshladik.",
  "Давайте начнём с бюджета.",
  "Let's go over the numbers.",
  "لنبدأ بمراجعة الخطة.",
];

const uz: HomeV2 = {
  hero: {
    eyebrow: "Uchrashuvlar uchun AI kotib",
    title: "Siz gapiring.",
    titleAccent: "Dicta yozadi.",
    sub: "Majlis, qoʻngʻiroq yoki maʼruza: Dicta yozib oladi, kim nima deganini ajratadi va qarorlar bilan vazifalarni bir necha daqiqada tayyorlab beradi.",
    download: "Ilovani yuklab olish",
    platforms: "Veb, iOS, Android, macOS va Windows",
    recording: "Yozilmoqda",
  },
  proof: {
    lead: "Premier barcha onlayn va oflayn uchrashuvlarini Dicta bilan yozadi.",
  },
  offline: {
    kicker: "Oflayn uchrashuvlar",
    title: "Stol atrofidagi majlis.",
    titleAccent: "Telefon yozib oladi.",
    body: "Telefonni stol ustiga qoʻying. Beshta odam gapirsa ham Dicta har bir ovozni ajratadi va kim nima deganini biladi.",
    roundTable: "Katta yigʻilishda har kim oʻz telefonidan qoʻshiladi, Dumaloq stol rejimi barcha yozuvlarni bitta xulosaga birlashtiradi.",
    link: "Oflayn uchrashuvlar haqida",
    recording: "Yozilmoqda",
    speakers: ["Dilnoza", "Rustam", "Aziz"],
    photoAlt: "Uzun stol atrofida yigʻilish oʻtkazayotgan jamoa",
  },
  online: {
    kicker: "Onlayn uchrashuvlar",
    title: "Zoom, Meet yoki Teams.",
    titleAccent: "Bot oʻzi qoʻshiladi.",
    body: "Havolani joylang: Dicta Notetaker qoʻngʻiroqqa kiradi va oxirigacha yozib oladi. Yoki uchrashuvni Dicta xonasining oʻzida oʻtkazing, brauzerda yoki ilovada.",
    link: "Uchrashuv boti haqida",
    placeholder: "meet.google.com/abc-defg-hij",
    send: "Bot yuborish",
    joined: "Dicta Notetaker qoʻngʻiroqqa qoʻshildi",
    room: "Dicta xonasi",
    photoAlt: "Bitta noutbuk atrofida onlayn qoʻngʻiroqdagi jamoa",
  },
  payoff: {
    title: "Uchrashuv tugadi.",
    titleAccent: "Xulosa tayyor.",
    steps: [
      { label: "Xulosa", body: "Bir soatlik suhbat bir sahifada: asosiy mavzular va natija." },
      { label: "Qarorlar", body: "Nima kelishilgani, aniq roʻyxat koʻrinishida." },
      { label: "Vazifalar", body: "Kim nima qiladi va qachongacha. Trello va boshqa trekerlarga bir tugma bilan." },
      { label: "Savol bering", body: "Oʻtgan uchrashuvlardan soʻrang, Dicta javobni manbasi bilan koʻrsatadi." },
    ],
    meetingTitle: "Haftalik savdo yigʻilishi",
    summary: "Jamoa ombor ochilishini 15-sanaga koʻchirdi, Artel bilan shartnoma juma kuni imzolanadi. Oktyabr savdo rejasi 108 foiz bajarildi.",
    decisions: [
      "Ombor ochilishi 15-sanaga koʻchirildi",
      "Artel bilan shartnoma juma kuni imzolanadi",
      "Samarqand filiali uchun yangi menejer qidiriladi",
    ],
    tasks: [
      { text: "Shartnomani yuridik boʻlimga yuborish", who: "Rustam" },
      { text: "Mijozga yangi sanani maʼlum qilish", who: "Aziz" },
      { text: "Noyabr rejasini tayyorlash", who: "Dilnoza" },
    ],
    question: "Mijoz narx haqida nima degan edi?",
    answer: "Aziz aytishicha, mijoz 5 foiz chegirma soʻradi va yillik shartnomaga rozi.",
    ask: "Uchrashuvlardan soʻrang",
    link: "AI xulosa haqida",
  },
  languages: {
    title: "Oʻzbekcha, ruscha, inglizcha.",
    titleAccent: "Aralash boʻlsa ham.",
    body: "Suhbatdoshlar gap orasida tilni almashtirsa ham Dicta toʻgʻri yozadi. Xulosani esa oʻzingizga qulay tilda olasiz.",
    samples: SAMPLES,
  },
  audiences: {
    title: "Maʼruzadan",
    titleAccent: "majlisgacha.",
    body: "Kuni uchrashuvlarda oʻtadiganlar uchun.",
    items: [
      { label: "Sotuv qoʻngʻiroqlari", slug: "sales-calls" },
      { label: "HR suhbatlari", slug: "hr-interviews" },
      { label: "Talabalar va oʻqituvchilar", slug: "education" },
      { label: "Davlat tashkilotlari", slug: "government" },
      { label: "Dumaloq stol", slug: "round-table" },
    ],
    photoAlt: "Talabalarga toʻla maʼruza zali",
  },
  closing: {
    title: "Keyingi uchrashuvingiz",
    titleAccent: "oʻzi yoziladi.",
    sub: "Bepul tarif, karta shart emas. Bir daqiqada tayyor.",
  },
};

const ru: HomeV2 = {
  hero: {
    eyebrow: "ИИ-секретарь для встреч",
    title: "Вы говорите.",
    titleAccent: "Dicta пишет.",
    sub: "Совещание, созвон или лекция: Dicta записывает, различает, кто что сказал, и через несколько минут выдаёт решения и задачи.",
    download: "Скачать приложение",
    platforms: "Веб, iOS, Android, macOS и Windows",
    recording: "Идёт запись",
  },
  proof: {
    lead: "Premier записывает все свои онлайн- и офлайн-встречи в Dicta.",
  },
  offline: {
    kicker: "Офлайн-встречи",
    title: "Совещание за столом.",
    titleAccent: "Запишет телефон.",
    body: "Положите телефон на стол. Даже если говорят пятеро, Dicta различит каждый голос и поймёт, кто что сказал.",
    roundTable: "На большом совещании каждый подключается со своего телефона, а режим «Круглый стол» сводит все записи в один протокол.",
    link: "Подробнее об офлайн-встречах",
    recording: "Идёт запись",
    speakers: ["Дильноза", "Рустам", "Азиз"],
    photoAlt: "Команда проводит совещание за длинным столом",
  },
  online: {
    kicker: "Онлайн-встречи",
    title: "Zoom, Meet или Teams.",
    titleAccent: "Бот подключится сам.",
    body: "Вставьте ссылку: Dicta Notetaker войдёт в звонок и запишет его до конца. Или проведите встречу прямо в комнате Dicta, в браузере или в приложении.",
    link: "Подробнее о боте",
    placeholder: "meet.google.com/abc-defg-hij",
    send: "Отправить бота",
    joined: "Dicta Notetaker подключился к звонку",
    room: "Комната Dicta",
    photoAlt: "Команда на онлайн-звонке у одного ноутбука",
  },
  payoff: {
    title: "Встреча закончилась.",
    titleAccent: "Протокол готов.",
    steps: [
      { label: "Итоги", body: "Час разговора на одной странице: главные темы и результат." },
      { label: "Решения", body: "О чём договорились, коротким и точным списком." },
      { label: "Задачи", body: "Кто что делает и к какому сроку. В Trello и другие трекеры одной кнопкой." },
      { label: "Спросите", body: "Задайте вопрос по прошлым встречам, и Dicta ответит со ссылкой на источник." },
    ],
    meetingTitle: "Еженедельная планёрка продаж",
    summary: "Команда перенесла открытие склада на 15-е, договор с Artel подпишут в пятницу. План продаж на октябрь выполнен на 108%.",
    decisions: [
      "Открытие склада перенесено на 15-е",
      "Договор с Artel подписываем в пятницу",
      "Ищем нового менеджера для филиала в Самарканде",
    ],
    tasks: [
      { text: "Отправить договор юристам", who: "Рустам" },
      { text: "Сообщить клиенту новую дату", who: "Азиз" },
      { text: "Подготовить план на ноябрь", who: "Дильноза" },
    ],
    question: "Что клиент говорил о цене?",
    answer: "По словам Азиза, клиент попросил скидку 5% и согласен на годовой договор.",
    ask: "Спросите по встречам",
    link: "Подробнее об ИИ-итогах",
  },
  languages: {
    title: "Узбекский, русский, английский.",
    titleAccent: "Даже вперемешку.",
    body: "Dicta пишет правильно, даже когда собеседники переходят с языка на язык посреди фразы. А итоги вы получаете на удобном вам языке.",
    samples: SAMPLES,
  },
  audiences: {
    title: "От лекции",
    titleAccent: "до совещания.",
    body: "Для тех, кто проводит день на встречах.",
    items: [
      { label: "Звонки продаж", slug: "sales-calls" },
      { label: "HR-собеседования", slug: "hr-interviews" },
      { label: "Студенты и преподаватели", slug: "education" },
      { label: "Госорганизации", slug: "government" },
      { label: "Круглый стол", slug: "round-table" },
    ],
    photoAlt: "Лекционный зал, полный студентов",
  },
  closing: {
    title: "Следующая встреча",
    titleAccent: "запишется сама.",
    sub: "Бесплатный тариф, без карты. Готово меньше чем за минуту.",
  },
};

const en: HomeV2 = {
  hero: {
    eyebrow: "The AI secretary for meetings",
    title: "You talk.",
    titleAccent: "Dicta writes.",
    sub: "A board meeting, a call or a lecture: Dicta records it, tells the speakers apart and hands you the decisions and tasks within minutes.",
    download: "Get the app",
    platforms: "Web, iOS, Android, macOS and Windows",
    recording: "Recording",
  },
  proof: {
    lead: "Premier records every online and in-person meeting with Dicta.",
  },
  offline: {
    kicker: "In-person meetings",
    title: "A meeting around the table.",
    titleAccent: "Your phone takes the minutes.",
    body: "Put your phone on the table. Even with five people talking, Dicta tells every voice apart and knows who said what.",
    roundTable: "In a big meeting everyone joins from their own phone, and Round table merges every recording into one set of minutes.",
    link: "More on in-person meetings",
    recording: "Recording",
    speakers: ["Dilnoza", "Rustam", "Aziz"],
    photoAlt: "A team holding a meeting around a long table",
  },
  online: {
    kicker: "Online meetings",
    title: "Zoom, Meet or Teams.",
    titleAccent: "The bot joins for you.",
    body: "Paste the link and Dicta Notetaker joins the call and records it to the end. Or hold the meeting in a Dicta room itself, in the browser or the app.",
    link: "More on the meeting bot",
    placeholder: "meet.google.com/abc-defg-hij",
    send: "Send bot",
    joined: "Dicta Notetaker joined the call",
    room: "Dicta room",
    photoAlt: "A team on an online call around one laptop",
  },
  payoff: {
    title: "The meeting is over.",
    titleAccent: "The minutes are ready.",
    steps: [
      { label: "Summary", body: "An hour of talk on one page: the main topics and the outcome." },
      { label: "Decisions", body: "What was agreed, as a short, exact list." },
      { label: "Tasks", body: "Who does what, by when. Into Trello and other trackers in one click." },
      { label: "Ask", body: "Ask about past meetings and Dicta answers with the source." },
    ],
    meetingTitle: "Weekly sales meeting",
    summary: "The team moved the warehouse launch to the 15th and will sign the Artel contract on Friday. October's sales plan came in at 108%.",
    decisions: [
      "Warehouse launch moved to the 15th",
      "Artel contract to be signed on Friday",
      "Hiring a new manager for the Samarkand branch",
    ],
    tasks: [
      { text: "Send the contract to legal", who: "Rustam" },
      { text: "Tell the client the new date", who: "Aziz" },
      { text: "Draft the November plan", who: "Dilnoza" },
    ],
    question: "What did the client say about price?",
    answer: "According to Aziz, the client asked for a 5% discount and is open to a yearly contract.",
    ask: "Ask your meetings",
    link: "More on AI summaries",
  },
  languages: {
    title: "Uzbek, Russian, English.",
    titleAccent: "Even mixed together.",
    body: "Dicta gets it right even when people switch languages mid-sentence, and you read the summary in the language you prefer.",
    samples: SAMPLES,
  },
  audiences: {
    title: "From lecture hall",
    titleAccent: "to boardroom.",
    body: "For people who spend their day in meetings.",
    items: [
      { label: "Sales calls", slug: "sales-calls" },
      { label: "HR interviews", slug: "hr-interviews" },
      { label: "Students and teachers", slug: "education" },
      { label: "Government", slug: "government" },
      { label: "Round table", slug: "round-table" },
    ],
    photoAlt: "A lecture hall full of students",
  },
  closing: {
    title: "Your next meeting",
    titleAccent: "writes itself.",
    sub: "Free plan, no card. Ready in under a minute.",
  },
};

const ar: HomeV2 = {
  hero: {
    eyebrow: "سكرتير ذكي لاجتماعاتك",
    title: "أنت تتحدث.",
    titleAccent: "وDicta تكتب.",
    sub: "اجتماع أو مكالمة أو محاضرة: تسجّل Dicta كل شيء، وتميّز بين المتحدثين، وتسلّمك القرارات والمهام خلال دقائق.",
    download: "حمّل التطبيق",
    platforms: "الويب وiOS وAndroid وmacOS وWindows",
    recording: "جارٍ التسجيل",
  },
  proof: {
    lead: "تسجّل Premier جميع اجتماعاتها عبر الإنترنت والحضورية باستخدام Dicta.",
  },
  offline: {
    kicker: "الاجتماعات الحضورية",
    title: "اجتماع حول الطاولة.",
    titleAccent: "وهاتفك يدوّن المحضر.",
    body: "ضع هاتفك على الطاولة. حتى لو تحدّث خمسة أشخاص، تميّز Dicta كل صوت وتعرف من قال ماذا.",
    roundTable: "في الاجتماعات الكبيرة ينضم كل شخص من هاتفه، ويجمع وضع الطاولة المستديرة كل التسجيلات في محضر واحد.",
    link: "المزيد عن الاجتماعات الحضورية",
    recording: "جارٍ التسجيل",
    speakers: ["دلنوزا", "رستم", "عزيز"],
    photoAlt: "فريق يعقد اجتماعًا حول طاولة طويلة",
  },
  online: {
    kicker: "الاجتماعات عبر الإنترنت",
    title: "Zoom أو Meet أو Teams.",
    titleAccent: "والروبوت ينضم بدلًا منك.",
    body: "الصق الرابط وسينضم Dicta Notetaker إلى المكالمة ويسجّلها حتى النهاية. أو اعقد الاجتماع في غرفة Dicta نفسها، من المتصفح أو التطبيق.",
    link: "المزيد عن روبوت الاجتماعات",
    placeholder: "meet.google.com/abc-defg-hij",
    send: "إرسال الروبوت",
    joined: "انضم Dicta Notetaker إلى المكالمة",
    room: "غرفة Dicta",
    photoAlt: "فريق في مكالمة عبر الإنترنت حول حاسوب واحد",
  },
  payoff: {
    title: "انتهى الاجتماع.",
    titleAccent: "والمحضر جاهز.",
    steps: [
      { label: "الملخص", body: "ساعة من النقاش في صفحة واحدة: أهم المواضيع والنتيجة." },
      { label: "القرارات", body: "ما تم الاتفاق عليه، في قائمة قصيرة ودقيقة." },
      { label: "المهام", body: "من يفعل ماذا ومتى. إلى Trello وغيره بنقرة واحدة." },
      { label: "اسأل", body: "اسأل عن اجتماعاتك السابقة وستجيب Dicta مع ذكر المصدر." },
    ],
    meetingTitle: "اجتماع المبيعات الأسبوعي",
    summary: "قرر الفريق تأجيل افتتاح المستودع إلى يوم 15، وسيُوقَّع عقد Artel يوم الجمعة. تحققت خطة مبيعات أكتوبر بنسبة 108٪.",
    decisions: [
      "تأجيل افتتاح المستودع إلى يوم 15",
      "توقيع عقد Artel يوم الجمعة",
      "البحث عن مدير جديد لفرع سمرقند",
    ],
    tasks: [
      { text: "إرسال العقد إلى القسم القانوني", who: "رستم" },
      { text: "إبلاغ العميل بالموعد الجديد", who: "عزيز" },
      { text: "إعداد خطة نوفمبر", who: "دلنوزا" },
    ],
    question: "ماذا قال العميل عن السعر؟",
    answer: "بحسب عزيز، طلب العميل خصمًا بنسبة 5٪ وهو منفتح على عقد سنوي.",
    ask: "اسأل اجتماعاتك",
    link: "المزيد عن الملخصات الذكية",
  },
  languages: {
    title: "العربية والإنجليزية والروسية.",
    titleAccent: "حتى لو اختلطت.",
    body: "تكتب Dicta بدقة حتى عندما يبدّل المتحدثون اللغة في منتصف الجملة، وتقرأ الملخص باللغة التي تفضّلها.",
    samples: SAMPLES,
  },
  audiences: {
    title: "من قاعة المحاضرات",
    titleAccent: "إلى قاعة الاجتماعات.",
    body: "لمن يقضون يومهم في الاجتماعات.",
    items: [
      { label: "مكالمات المبيعات", slug: "sales-calls" },
      { label: "مقابلات التوظيف", slug: "hr-interviews" },
      { label: "الطلاب والمعلمون", slug: "education" },
      { label: "الجهات الحكومية", slug: "government" },
      { label: "الطاولة المستديرة", slug: "round-table" },
    ],
    photoAlt: "قاعة محاضرات مليئة بالطلاب",
  },
  closing: {
    title: "اجتماعك القادم",
    titleAccent: "يُدوَّن تلقائيًا.",
    sub: "باقة مجانية، بلا بطاقة. جاهز في أقل من دقيقة.",
  },
};

export const HOME_V2: Record<Locale, HomeV2> = { uz, ru, en, ar };
