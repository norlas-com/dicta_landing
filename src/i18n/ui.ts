// Tri-lingual copy for the Dicta marketing site. Ported verbatim from the app
// (web/lib/i18n/dictionaries/{uz,ru,en}.ts), landing surface only. uz is the
// default (unprefixed); ru + en are path-prefixed (/ru, /en).

export const LOCALES = ["uz", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";
export const LOCALE_COOKIE = "dicta_locale";

export const LOCALE_LABEL: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

const en = {
  common: { login: "Login" },
  nav: {
    privacy: "Privacy",
    terms: "Terms",
    download: "Download for Mac",
    downloadWin: "Download for Windows",
  },
  desktopTip: {
    title: "Get the desktop app",
    point1: "Runs quietly in the background",
    point2: "No bot joins your call",
    point3: "Captured locally on your Mac",
  },
  landing: {
    h1Pre: "Premium meetings.",
    h1Accent: "Free for everyone.",
    sub: "Video meetings with AI transcription and summaries, built for Uzbek, Russian, and English. No guest accounts, no installs, no time limits.",
    signupCta: "Sign up, it's free",
    feat1Title: "High-quality video",
    feat1Body: "Adaptive bitrate, screen sharing, and grid layouts that scale to your team.",
    feat2Title: "Live transcription",
    feat2Body: "Real-time multilingual transcripts in Uzbek, Russian, and English. Toggle on per meeting.",
    feat3Title: "AI summaries",
    feat3Body: "Action items, decisions, and topics extracted automatically when the meeting ends.",
    downloadCta: "Download the desktop app",
    footerRights: "All rights reserved.",
  },
  pricing: {
    navLabel: "Pricing",
    eyebrow: "Pricing",
    headingPre: "Start free.",
    headingAccent: "Upgrade only if you need to.",
    sub: "Every team runs on a generous free tier. Move to a paid plan when you want more minutes, storage, and history.",
    currencyLabel: "Currency",
    currencyUzs: "UZS",
    currencyUsd: "USD",
    uzsUnit: "so'm",
    freeWord: "Free",
    minutes: "{min} min/mo",
    bulletStorage: "{gb} GB storage",
    bulletRetentionForever: "Keep history forever",
    bulletRetentionDays: "{days}-day history",
    support: {
      community: "Community support",
      standard: "Standard support",
      priority: "Priority support",
    },
    popular: "Most popular",
    cta: "Get started free",
    packsLine: "Need more? One-time minute packs from {price} — they never expire.",
    reassurance: "Every plan starts free. No card required.",
  },
  notetaker: { steps: { recording: "Recording" } },
  download: {
    title: "Dicta for desktop",
    sub: "Runs in the background, auto-detects your meetings, and captures them locally — no bot joins the call.",
    mac: "Download for macOS",
    windows: "Download for Windows",
    intel: "Intel Mac",
    appleSilicon: "Apple Silicon Mac",
    macHint: "Apple Silicon · macOS 13+",
    intelHint: "Intel · macOS 13+",
    windowsHint: "Windows 10/11 · 64-bit",
    osMac: "macOS",
    osWindows: "Windows",
    note: "Free — works with your Dicta account.",
    smartscreen: 'Windows may show a SmartScreen warning — choose "More info" then "Run anyway".',
    back: "Back to home",
  },
  language: "Language",
  legal: {
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: May 1, 2026",
    termsTitle: "Terms of Service",
    termsUpdated: "Last updated: May 1, 2026",
    privacy: {
      intro:
        'Dicta ("we", "our") operates the meeting service at dicta.uz. This page explains what we collect and why.',
      dataCollect: {
        title: "Data we collect",
        accountInfo: {
          label: "Account info.",
          text: "Email address, full name, and (when you sign in with Google) the Google profile picture URL.",
        },
        meetings: {
          label: "Meetings.",
          text: "Meeting titles, participants, timestamps, and short codes you generate.",
        },
        transcripts: {
          label: "Transcripts.",
          text: "When the host enables transcription, audio is processed by our servers and Google Gemini to produce text transcripts. Audio buffers are not stored long-term — only the resulting text is kept.",
        },
        recordings: {
          label: "Recordings.",
          text: "When the host starts recording, video and audio are uploaded to our private object store and accessible only to the host. We do not share recordings.",
        },
        logs: {
          label: "Operational logs.",
          text: "IP, user agent, and request timing for debugging and abuse prevention.",
        },
      },
      howWeUse: {
        title: "How we use it",
        body: "To run the service, generate AI summaries, support hosts after a meeting, and prevent abuse. We do not sell your data, and we do not show advertising.",
      },
      thirdParties: {
        title: "Third parties",
        googleSignIn: "Google Sign-In (authentication).",
        gemini: "Google Gemini API (transcription + summaries).",
        r2: "Cloudflare R2 (encrypted recording storage).",
        livekit: "LiveKit (real-time media).",
      },
      yourRights: {
        title: "Your rights",
        bodyBefore: "You can delete your account at any time by emailing ",
        bodyAfter: ". We will remove your account, transcripts, and recordings within 30 days.",
      },
      contact: {
        title: "Contact",
        bodyBefore: "Questions or requests: ",
        bodyAfter: ".",
      },
    },
    terms: {
      intro:
        "By using Dicta you agree to these terms. If you do not agree, do not use the service.",
      acceptableUse: {
        title: "Acceptable use",
        item1: "Do not use Dicta for harassment, spam, or illegal activities.",
        item2: "Do not attempt to disrupt the service, scrape mass data, or reverse engineer the system.",
        item3: "Recording requires consent of all participants in jurisdictions where that is the legal standard. You are responsible for obtaining it.",
      },
      availability: {
        title: "Service availability",
        body: "We work to keep Dicta available but do not guarantee uninterrupted service. We may take the service offline for maintenance, security fixes, or capacity reasons without notice.",
      },
      yourContent: {
        title: "Your content",
        body: "You retain ownership of meetings, transcripts, and recordings you create. You grant us a limited license to process and store this content as necessary to provide the service.",
      },
      termination: {
        title: "Termination",
        bodyBefore: "We may suspend accounts that violate these terms. You may close your account at any time by emailing ",
        bodyAfter: ".",
      },
      liability: {
        title: "Limitation of liability",
        body: 'The service is provided "as is". To the fullest extent permitted by law, Dicta is not liable for indirect, incidental, or consequential damages arising from your use of the service.',
      },
      contact: { title: "Contact", legalLabel: "Legal: " },
    },
  },
} as const;

const ru: typeof en = {
  common: { login: "Войти" },
  nav: {
    privacy: "Конфиденциальность",
    terms: "Условия",
    download: "Скачать для Mac",
    downloadWin: "Скачать для Windows",
  },
  desktopTip: {
    title: "Установите приложение для компьютера",
    point1: "Тихо работает в фоне",
    point2: "Бот не подключается к звонку",
    point3: "Запись локально на вашем Mac",
  },
  landing: {
    h1Pre: "Премиум-встречи.",
    h1Accent: "Бесплатно для всех.",
    sub: "Видеовстречи с AI-транскрипцией и резюме на узбекском, русском и английском. Без аккаунтов для гостей, без установки, без ограничений по времени.",
    signupCta: "Зарегистрироваться, бесплатно",
    feat1Title: "Качественное видео",
    feat1Body: "Адаптивный битрейт, демонстрация экрана и сетка, масштабируемая под вашу команду.",
    feat2Title: "Живая транскрипция",
    feat2Body: "Многоязычная транскрипция в реальном времени на узбекском, русском, английском. Включается на каждой встрече.",
    feat3Title: "AI-резюме",
    feat3Body: "По окончании встречи автоматически извлекаются задачи, решения и темы.",
    downloadCta: "Скачать настольное приложение",
    footerRights: "Все права защищены.",
  },
  pricing: {
    navLabel: "Цены",
    eyebrow: "Цены",
    headingPre: "Начните бесплатно.",
    headingAccent: "Переходите на платный по мере роста.",
    sub: "Каждая команда работает на щедром бесплатном тарифе. Переходите на платный, когда нужно больше минут, места и истории.",
    currencyLabel: "Валюта",
    currencyUzs: "UZS",
    currencyUsd: "USD",
    uzsUnit: "сум",
    freeWord: "Бесплатно",
    minutes: "{min} мин/мес",
    bulletStorage: "{gb} ГБ хранилища",
    bulletRetentionForever: "История хранится вечно",
    bulletRetentionDays: "История за {days} дней",
    support: {
      community: "Поддержка сообщества",
      standard: "Стандартная поддержка",
      priority: "Приоритетная поддержка",
    },
    popular: "Самый популярный",
    cta: "Начать бесплатно",
    packsLine: "Нужно больше? Разовые пакеты минут от {price} — они не сгорают.",
    reassurance: "Любой тариф начинается бесплатно. Карта не нужна.",
  },
  notetaker: { steps: { recording: "Recording" } },
  download: {
    title: "Dicta для компьютера",
    sub: "В фоновом режиме автоматически определяет ваши встречи и записывает их — бот не подключается к звонку.",
    mac: "Скачать для macOS",
    windows: "Скачать для Windows",
    intel: "Intel Mac",
    appleSilicon: "Apple Silicon Mac",
    macHint: "Apple Silicon · macOS 13+",
    intelHint: "Intel · macOS 13+",
    windowsHint: "Windows 10/11 · 64-бит",
    osMac: "macOS",
    osWindows: "Windows",
    note: "Бесплатно — работает с вашим аккаунтом Dicta.",
    smartscreen: "Windows может показать предупреждение SmartScreen — нажмите «Подробнее» → «Выполнить в любом случае».",
    back: "Вернуться на главную",
  },
  language: "Язык",
  legal: {
    privacyTitle: "Политика конфиденциальности",
    privacyUpdated: "Последнее обновление: 1 мая 2026 г.",
    termsTitle: "Условия использования",
    termsUpdated: "Последнее обновление: 1 мая 2026 г.",
    privacy: {
      intro:
        "Dicta («мы», «наш») управляет сервисом видеовстреч на dicta.uz. На этой странице описано, какие данные мы собираем и для чего.",
      dataCollect: {
        title: "Какие данные мы собираем",
        accountInfo: {
          label: "Данные аккаунта.",
          text: "Адрес электронной почты, полное имя и (при входе через Google) URL фотографии профиля Google.",
        },
        meetings: {
          label: "Встречи.",
          text: "Названия встреч, участники, временные метки и короткие коды, которые вы создаёте.",
        },
        transcripts: {
          label: "Транскрипты.",
          text: "Когда организатор включает транскрипцию, аудио обрабатывается нашими серверами и Google Gemini для получения текстовой расшифровки. Аудиобуферы не хранятся долговременно — сохраняется только итоговый текст.",
        },
        recordings: {
          label: "Записи.",
          text: "Когда организатор начинает запись, видео и аудио загружаются в наше приватное объектное хранилище и доступны только организатору. Мы не передаём записи третьим лицам.",
        },
        logs: {
          label: "Служебные логи.",
          text: "IP-адрес, user agent и время запросов — для отладки и предотвращения злоупотреблений.",
        },
      },
      howWeUse: {
        title: "Как мы используем эти данные",
        body: "Для работы сервиса, генерации AI-кратких изложений, поддержки организаторов после встречи и предотвращения злоупотреблений. Мы не продаём ваши данные и не показываем рекламу.",
      },
      thirdParties: {
        title: "Сторонние сервисы",
        googleSignIn: "Google Sign-In (аутентификация).",
        gemini: "Google Gemini API (транскрипция и краткие изложения).",
        r2: "Cloudflare R2 (шифрованное хранилище записей).",
        livekit: "LiveKit (передача медиа в реальном времени).",
      },
      yourRights: {
        title: "Ваши права",
        bodyBefore: "Вы можете удалить свой аккаунт в любое время, написав на ",
        bodyAfter: ". Мы удалим ваш аккаунт, транскрипты и записи в течение 30 дней.",
      },
      contact: {
        title: "Контакты",
        bodyBefore: "Вопросы и обращения: ",
        bodyAfter: ".",
      },
    },
    terms: {
      intro:
        "Используя Dicta, вы соглашаетесь с настоящими условиями. Если вы не согласны — не пользуйтесь сервисом.",
      acceptableUse: {
        title: "Допустимое использование",
        item1: "Не используйте Dicta для преследования, спама или противоправной деятельности.",
        item2: "Не пытайтесь нарушить работу сервиса, массово собирать данные или применять обратную разработку системы.",
        item3: "Запись требует согласия всех участников в юрисдикциях, где это требование закона. Ответственность за получение согласия лежит на вас.",
      },
      availability: {
        title: "Доступность сервиса",
        body: "Мы стремимся обеспечить доступность Dicta, но не гарантируем бесперебойную работу. Сервис может быть временно отключён для технического обслуживания, обновлений безопасности или по причинам нагрузки без предварительного уведомления.",
      },
      yourContent: {
        title: "Ваш контент",
        body: "Вы сохраняете права на создаваемые вами встречи, транскрипты и записи. Вы предоставляете нам ограниченную лицензию на обработку и хранение этого контента в объёме, необходимом для оказания услуги.",
      },
      termination: {
        title: "Прекращение использования",
        bodyBefore: "Мы можем приостановить аккаунты, нарушающие настоящие условия. Вы можете закрыть свой аккаунт в любой момент, написав на ",
        bodyAfter: ".",
      },
      liability: {
        title: "Ограничение ответственности",
        body: "Сервис предоставляется «как есть». В максимальной степени, разрешённой законом, Dicta не несёт ответственности за косвенные, случайные или сопутствующие убытки, возникающие в связи с использованием сервиса.",
      },
      contact: { title: "Контакты", legalLabel: "Юридические вопросы: " },
    },
  },
};

const uz: typeof en = {
  common: { login: "Kirish" },
  nav: {
    privacy: "Maxfiylik",
    terms: "Foydalanish shartlari",
    download: "Mac uchun yuklab olish",
    downloadWin: "Windows uchun yuklab olish",
  },
  desktopTip: {
    title: "Desktop ilovasini oʻrnating",
    point1: "Fon rejimida sokin ishlaydi",
    point2: "Qoʻngʻiroqqa bot qoʻshilmaydi",
    point3: "Mac'ingizda lokal yoziladi",
  },
  landing: {
    h1Pre: "Premium uchrashuvlar.",
    h1Accent: "Hamma uchun bepul.",
    sub: "Oʻzbek, rus va ingliz tillarida AI transkripsiya va xulosa bilan video uchrashuvlar. Mehmonlar uchun akkaunt kerak emas, oʻrnatish shart emas, vaqt cheklovi yoʻq.",
    signupCta: "Roʻyxatdan oʻtish, bepul",
    feat1Title: "Yuqori sifatli video",
    feat1Body: "Adaptiv bitrate, ekranni ulashish va jamoangiz uchun kengaytiriladigan grid koʻrinish.",
    feat2Title: "Jonli transkripsiya",
    feat2Body: "Real vaqt rejimida oʻzbek, rus, ingliz tillarida koʻp tilli transkripsiya. Har bir uchrashuvda yoqing.",
    feat3Title: "AI xulosalari",
    feat3Body: "Uchrashuv yakunida vazifalar, qarorlar va mavzular avtomatik tarzda chiqariladi.",
    downloadCta: "Kompyuter ilovasini yuklab olish",
    footerRights: "Barcha huquqlar himoyalangan.",
  },
  pricing: {
    navLabel: "Narxlar",
    eyebrow: "Narxlar",
    headingPre: "Bepuldan boshlang.",
    headingAccent: "Kerak boʻlsa kengaytiring.",
    sub: "Har bir jamoa saxiy bepul rejadan foydalanadi. Koʻproq daqiqa, joy va tarix kerak boʻlganda toʻlovli rejaga oʻting.",
    currencyLabel: "Valyuta",
    currencyUzs: "UZS",
    currencyUsd: "USD",
    uzsUnit: "soʻm",
    freeWord: "Bepul",
    minutes: "Oyiga {min} daqiqa",
    bulletStorage: "{gb} GB xotira",
    bulletRetentionForever: "Tarix abadiy saqlanadi",
    bulletRetentionDays: "{days} kunlik tarix",
    support: {
      community: "Hamjamiyat qoʻllab-quvvatlashi",
      standard: "Standart qoʻllab-quvvatlash",
      priority: "Ustuvor qoʻllab-quvvatlash",
    },
    popular: "Eng mashhur",
    cta: "Bepul boshlash",
    packsLine: "Koʻproq kerakmi? Bir martalik daqiqa paketlari {price} dan — ular hech qachon eskirmaydi.",
    reassurance: "Har bir reja bepul boshlanadi. Karta talab qilinmaydi.",
  },
  notetaker: { steps: { recording: "Recording" } },
  download: {
    title: "Dicta kompyuter uchun",
    sub: "Fon rejimida uchrashuvlaringizni avtomatik aniqlaydi va yozib oladi — qoʻngʻiroqqa hech qanday bot qoʻshilmaydi.",
    mac: "macOS uchun yuklab olish",
    windows: "Windows uchun yuklab olish",
    intel: "Intel Mac",
    appleSilicon: "Apple Silicon Mac",
    macHint: "Apple Silicon · macOS 13+",
    intelHint: "Intel · macOS 13+",
    windowsHint: "Windows 10/11 · 64-bit",
    osMac: "macOS",
    osWindows: "Windows",
    note: "Bepul — Dicta hisobingiz bilan ishlaydi.",
    smartscreen: "Windows SmartScreen ogohlantirishi chiqishi mumkin — “Batafsil” → “Baribir ishga tushirish”ni tanlang.",
    back: "Bosh sahifaga qaytish",
  },
  language: "Til",
  legal: {
    privacyTitle: "Maxfiylik siyosati",
    privacyUpdated: "Oxirgi yangilangan: 2026-yil 1-may",
    termsTitle: "Foydalanish shartlari",
    termsUpdated: "Oxirgi yangilangan: 2026-yil 1-may",
    privacy: {
      intro:
        "«Dicta» («biz», «bizning») dicta.uz manzilidagi videouchrashuvlar xizmatini boshqaradi. Ushbu sahifada qanday maʼlumotlarni va nima uchun toʻplashimiz tushuntirilgan.",
      dataCollect: {
        title: "Toʻplaydigan maʼlumotlar",
        accountInfo: {
          label: "Akkaunt maʼlumotlari.",
          text: "Elektron pochta manzili, toʻliq ism va (Google orqali kirganda) Google profil rasmining URL manzili.",
        },
        meetings: {
          label: "Uchrashuvlar.",
          text: "Uchrashuv nomlari, ishtirokchilar, vaqt belgilari va siz yaratgan qisqa kodlar.",
        },
        transcripts: {
          label: "Transkriptlar.",
          text: "Mezbon transkripsiyani yoqqanida audio bizning serverlarimiz va Google Gemini tomonidan matn transkriptiga aylantiriladi. Audio buferlar uzoq muddatga saqlanmaydi — faqat yakuniy matn saqlanadi.",
        },
        recordings: {
          label: "Yozuvlar.",
          text: "Mezbon yozuvni boshlaganida video va audio bizning shaxsiy obyekt xotiramizga yuklanadi va faqat mezbonga ochiq boʻladi. Biz yozuvlarni hech kim bilan ulashmaymiz.",
        },
        logs: {
          label: "Texnik jurnallar.",
          text: "Nosozliklarni bartaraf etish va suiisteʼmolning oldini olish uchun IP manzil, foydalanuvchi agenti va soʻrov vaqti.",
        },
      },
      howWeUse: {
        title: "Maʼlumotlardan qanday foydalanamiz",
        body: "Xizmatni ishlatish, AI yordamida qisqa xulosalar tayyorlash, uchrashuvdan keyin mezbonlarni qoʻllab-quvvatlash va suiisteʼmolning oldini olish uchun. Biz maʼlumotlaringizni sotmaymiz va reklama koʻrsatmaymiz.",
      },
      thirdParties: {
        title: "Uchinchi tomon xizmatlari",
        googleSignIn: "Google Sign-In (autentifikatsiya).",
        gemini: "Google Gemini API (transkripsiya va qisqa xulosalar).",
        r2: "Cloudflare R2 (shifrlangan yozuvlar saqlovi).",
        livekit: "LiveKit (real vaqtdagi media).",
      },
      yourRights: {
        title: "Sizning huquqlaringiz",
        bodyBefore: "Hisobingizni istalgan paytda quyidagi manzilga xat yozib oʻchirishingiz mumkin: ",
        bodyAfter: ". Biz hisobingizni, transkriptlaringizni va yozuvlaringizni 30 kun ichida oʻchirib tashlaymiz.",
      },
      contact: {
        title: "Aloqa",
        bodyBefore: "Savollar va murojaatlar: ",
        bodyAfter: ".",
      },
    },
    terms: {
      intro:
        "Dicta-dan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Agar rozi boʻlmasangiz, xizmatdan foydalanmang.",
      acceptableUse: {
        title: "Maqbul foydalanish",
        item1: "Dicta-dan tahqirlash, spam yoki noqonuniy faoliyat uchun foydalanmang.",
        item2: "Xizmat ishini buzishga, ommaviy maʼlumot yigʻishga yoki tizimni teskari muhandislik qilishga urinmang.",
        item3: "Yozib olish — qonun shuni talab qiladigan yurisdiktsiyalarda — barcha ishtirokchilarning roziligini talab qiladi. Roziliklarni olish javobgarligi sizning zimmangizda.",
      },
      availability: {
        title: "Xizmatning mavjudligi",
        body: "Biz Dicta xizmatini doimo ishlab turishiga harakat qilamiz, lekin uzluksiz ishlashni kafolatlamaymiz. Texnik xizmat, xavfsizlik yangilanishlari yoki yuklama sabablari boʻyicha xizmatni oldindan ogohlantirmasdan vaqtincha oʻchirishimiz mumkin.",
      },
      yourContent: {
        title: "Sizning kontentingiz",
        body: "Siz yaratgan uchrashuvlar, transkriptlar va yozuvlar sizga tegishli boʻlib qoladi. Siz bizga ushbu kontentni xizmatni taʼminlash uchun zarur boʻlgan darajada qayta ishlash va saqlash uchun cheklangan litsenziya berasiz.",
      },
      termination: {
        title: "Foydalanishni tugatish",
        bodyBefore: "Ushbu shartlarni buzgan akkauntlarni toʻxtatib qoʻyishimiz mumkin. Siz hisobingizni istalgan paytda quyidagi manzilga xat yozib yopishingiz mumkin: ",
        bodyAfter: ".",
      },
      liability: {
        title: "Javobgarlikning cheklanishi",
        body: "Xizmat «boricha» taqdim etiladi. Qonun ruxsat bergan maksimal darajada Dicta xizmatdan foydalanish bilan bogʻliq bilvosita, tasodifiy yoki ergashuvchi zararlar uchun javobgar emas.",
      },
      contact: { title: "Aloqa", legalLabel: "Yuridik masalalar: " },
    },
  },
};

export const ui: Record<Locale, typeof en> = { uz, ru, en };
export type Dict = typeof en;
