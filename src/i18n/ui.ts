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
  landing: {
    h1Pre: "All-in-one",
    h1Accent: "meeting platform.",
    sub: "Host the call and Dicta records it, transcribes it, and writes the summary in Uzbek, Russian, or English. No guest accounts, no installs, no time limits.",
    signupCta: "Sign up, it's free",
    heroPoint1: "No credit card required",
    heroPoint2: "Set up in under a minute",
    heroPhotoAlt: "A team video call with a grid of smiling participants",
    downloadCta: "Download the desktop app",
    footerRights: "All rights reserved.",
    features: {
      problemLabel: "The problem",
      solutionLabel: "Our solution",
      dotsLabel: "Sections",
      f6cta: "Download the desktop app",
      f1: {
        title: "Uzbekistan's own meeting platform",
        problem:
          "Zoom, Google Meet and Teams keep your conversations on servers far away. For many teams here, that's a risk they can't accept.",
        solution:
          "Dicta Meet works better than Zoom, Google Meet and Teams — and your data never leaves Uzbekistan.",
        alt: "A video call participant giving a thumbs up on screen",
      },
      f2: {
        title: "Transcription in any language",
        problem:
          "Taking notes during a meeting means you either listen or write — never both well.",
        solution:
          "Dicta transcribes meetings in any language with high accuracy. Every person's words are captured and attributed to the right speaker.",
        alt: "Handwritten meeting notes in a paper notebook",
      },
      f3: {
        title: "A 1-hour meeting, read in 2 minutes",
        problem:
          "Hours of meetings every week — and from half of them you only needed the conclusions.",
        solution:
          "Dicta prepares a full AI summary of every meeting: decisions, tasks and topics. Read it in 2 minutes — and search the recording by text to jump to the exact video moment.",
        alt: "A calm one-on-one video call on a laptop",
      },
      f4: {
        title: "Tasks create themselves",
        problem:
          "After the meeting, someone still has to write down every task and assign it by hand. It's slow, and things get lost.",
        solution:
          "Dicta creates tasks from the meeting automatically and assigns them to the right person. Works with Jira, Trello, Asana, ClickUp — or your own task platform.",
        alt: "A kanban board with task cards on a screen",
      },
      f5: {
        title: "Send a bot instead of yourself",
        problem: "Two meetings at the same time? No time to attend at all?",
        solution:
          "Send a Dicta bot on your behalf. It joins Zoom, Google Meet and Teams meetings — and you still get the full transcription and AI summary.",
        alt: "A large video call grid with many participants",
      },
      f6: {
        title: "Dicta Desktop — no bots in the call",
        problem: "Don't want a visible bot sitting in your meetings?",
        solution:
          "The Dicta desktop app detects when you join a call and records it for you. At the end you get the recording and the AI summary — and no one knows the meeting was recorded.",
        alt: "A laptop on a desk showing a dark dashboard",
      },
      f7: {
        title: "A mobile app for face-to-face meetings",
        problem:
          "Great ideas are born in face-to-face meetings — and get lost there too.",
        solution:
          "Tap one button and Dicta records your in-person meeting. The app automatically detects different speakers and can identify who is talking by their voice.",
        alt: "Colleagues talking around a flipchart in a meeting room",
      },
      closer: {
        titlePre: "All of this —",
        titleAccent: "at the lowest price on the market",
        sub: "Compare us with any competitor: accuracy, speed and privacy at the lowest price in the AI era. Try it — it's free, no card required.",
        cta: "See pricing",
      },
    },
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
};

const ru: typeof en = {
  common: { login: "Войти" },
  nav: {
    privacy: "Конфиденциальность",
    terms: "Условия",
    download: "Скачать для Mac",
    downloadWin: "Скачать для Windows",
  },
  landing: {
    h1Pre: "Универсальная платформа",
    h1Accent: "для встреч.",
    sub: "Проведите встречу, а Dicta запишет её, расшифрует и напишет резюме на узбекском, русском или английском. Без гостевых аккаунтов, установки и лимитов по времени.",
    signupCta: "Зарегистрироваться, бесплатно",
    heroPoint1: "Карта не требуется",
    heroPoint2: "Настройка меньше чем за минуту",
    heroPhotoAlt: "Командный видеозвонок с сеткой улыбающихся участников",
    downloadCta: "Скачать настольное приложение",
    footerRights: "Все права защищены.",
    features: {
      problemLabel: "Проблема",
      solutionLabel: "Наше решение",
      dotsLabel: "Разделы",
      f6cta: "Скачать приложение для компьютера",
      f1: {
        title: "Собственная платформа встреч Узбекистана",
        problem:
          "Zoom, Google Meet и Teams хранят ваши разговоры на далёких серверах. Для многих команд это неприемлемый риск.",
        solution:
          "Dicta Meet работает лучше Zoom, Google Meet и Teams — а ваши данные никогда не покидают Узбекистан.",
        alt: "Участник видеозвонка показывает большой палец вверх",
      },
      f2: {
        title: "Транскрипция на любом языке",
        problem:
          "Вести заметки на встрече — значит либо слушать, либо писать. Хорошо делать и то и другое не получится.",
        solution:
          "Dicta расшифровывает встречи на любом языке с высокой точностью. Слова каждого участника фиксируются и привязываются к нужному спикеру.",
        alt: "Рукописные заметки со встречи в бумажном блокноте",
      },
      f3: {
        title: "Часовая встреча — за 2 минуты",
        problem:
          "Часы встреч каждую неделю — а от половины вам нужны были только выводы.",
        solution:
          "Dicta готовит полное AI-резюме каждой встречи: решения, задачи и темы. Прочитайте его за 2 минуты — и ищите по тексту записи, чтобы перейти к нужному моменту видео.",
        alt: "Спокойный видеозвонок один на один на ноутбуке",
      },
      f4: {
        title: "Задачи создаются сами",
        problem:
          "После встречи кто-то всё равно должен записать каждую задачу и назначить её вручную. Это медленно, и что-то обязательно теряется.",
        solution:
          "Dicta автоматически создаёт задачи по итогам встречи и назначает их нужному человеку. Работает с Jira, Trello, Asana, ClickUp — или вашей собственной платформой.",
        alt: "Канбан-доска с карточками задач на экране",
      },
      f5: {
        title: "Отправьте бота вместо себя",
        problem: "Две встречи одновременно? Совсем нет времени участвовать?",
        solution:
          "Отправьте бота Dicta от своего имени. Он подключается к встречам в Zoom, Google Meet и Teams — а вы получаете полную расшифровку и AI-резюме.",
        alt: "Большая сетка видеозвонка со множеством участников",
      },
      f6: {
        title: "Dicta Desktop — никаких ботов в звонке",
        problem: "Не хотите, чтобы во встрече сидел заметный бот?",
        solution:
          "Приложение Dicta для компьютера само определяет, что вы в звонке, и записывает его для вас. В конце у вас запись и AI-резюме — и никто не знает, что встреча записывалась.",
        alt: "Ноутбук на столе с тёмной информационной панелью",
      },
      f7: {
        title: "Мобильное приложение для живых встреч",
        problem:
          "Отличные идеи рождаются на живых встречах — и там же теряются.",
        solution:
          "Нажмите одну кнопку — и Dicta запишет вашу очную встречу. Приложение автоматически различает говорящих и может определить по голосу, кто говорит.",
        alt: "Коллеги обсуждают идеи у флипчарта в переговорной",
      },
      closer: {
        titlePre: "Всё это —",
        titleAccent: "по самой низкой цене на рынке",
        sub: "Сравните нас с любым конкурентом: точность, скорость и приватность по самой низкой цене в эпоху AI. Попробуйте — это бесплатно, карта не нужна.",
        cta: "Посмотреть цены",
      },
    },
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
  landing: {
    h1Pre: "Uchrashuvlar uchun",
    h1Accent: "yagona platforma.",
    sub: "Uchrashuvni oʻtkazing, Dicta esa uni yozib oladi, transkripsiya qiladi va oʻzbek, rus yoki ingliz tilida xulosa yozadi. Mehmon akkauntlarisiz, oʻrnatishsiz, vaqt cheklovisiz.",
    signupCta: "Roʻyxatdan oʻtish, bepul",
    heroPoint1: "Karta talab qilinmaydi",
    heroPoint2: "Bir daqiqada sozlanadi",
    heroPhotoAlt: "Katakli koʻrinishdagi tabassumli ishtirokchilar bilan jamoaviy videoqoʻngʻiroq",
    downloadCta: "Kompyuter ilovasini yuklab olish",
    footerRights: "Barcha huquqlar himoyalangan.",
    features: {
      problemLabel: "Muammo",
      solutionLabel: "Bizning yechim",
      dotsLabel: "Boʻlimlar",
      f6cta: "Kompyuter ilovasini yuklab olish",
      f1: {
        title: "Oʻzbekistonning oʻz uchrashuv platformasi",
        problem:
          "Zoom, Google Meet va Teams suhbatlaringizni uzoqdagi serverlarda saqlaydi. Koʻp jamoalar uchun bu qabul qilib boʻlmas xavf.",
        solution:
          "Dicta Meet Zoom, Google Meet va Teams'dan yaxshiroq ishlaydi — maʼlumotlaringiz esa hech qachon Oʻzbekistondan chiqmaydi.",
        alt: "Videoqoʻngʻiroq ishtirokchisi ekranda bosh barmogʻini koʻrsatmoqda",
      },
      f2: {
        title: "Istalgan tilda transkripsiya",
        problem:
          "Uchrashuv paytida yozib borish — yo tinglaysiz, yo yozasiz. Ikkalasini birga qilib boʻlmaydi.",
        solution:
          "Dicta uchrashuvlarni istalgan tilda yuqori aniqlikda transkripsiya qiladi. Har bir ishtirokchining soʻzlari aniq yozib olinadi va toʻgʻri kishiga biriktiriladi.",
        alt: "Qogʻoz daftarga qoʻlda yozilgan uchrashuv qaydlari",
      },
      f3: {
        title: "1 soatlik uchrashuv — 2 daqiqada",
        problem:
          "Har hafta soatlab uchrashuvlar — yarmidan sizga faqat xulosalar kerak edi, xolos.",
        solution:
          "Dicta har bir uchrashuvning toʻliq AI xulosasini tayyorlaydi: qarorlar, vazifalar va mavzular. Uni 2 daqiqada oʻqing — matn orqali yozuvdan qidirib, videoning kerakli lahzasiga oʻting.",
        alt: "Noutbukda xotirjam yakkama-yakka videoqoʻngʻiroq",
      },
      f4: {
        title: "Vazifalar oʻzi yaratiladi",
        problem:
          "Uchrashuvdan keyin kimdir baribir har bir vazifani yozib, qoʻlda biriktirib chiqishi kerak. Bu sekin, va nimadir albatta yoʻqoladi.",
        solution:
          "Dicta uchrashuvdagi vazifalarni avtomatik yaratadi va toʻgʻri kishiga biriktiradi. Jira, Trello, Asana, ClickUp — yoki oʻzingizning platformangiz bilan ishlaydi.",
        alt: "Ekrandagi vazifa kartochkalari joylashgan kanban doskasi",
      },
      f5: {
        title: "Oʻzingiz oʻrniga bot yuboring",
        problem: "Bir vaqtda ikkita uchrashuvmi? Umuman borishga vaqt yoʻqmi?",
        solution:
          "Oʻzingiz oʻrniga Dicta botini yuboring. U Zoom, Google Meet va Teams uchrashuvlariga qoʻshiladi — siz esa toʻliq transkripsiya va AI xulosani olasiz.",
        alt: "Koʻp ishtirokchili katta katakli videoqoʻngʻiroq",
      },
      f6: {
        title: "Dicta Desktop — qoʻngʻiroqda hech qanday bot yoʻq",
        problem: "Uchrashuvlaringizda koʻrinib turadigan bot boʻlishini istamaysizmi?",
        solution:
          "Dicta kompyuter ilovasi qoʻngʻiroqqa qoʻshilganingizni oʻzi aniqlab, siz uchun yozib boradi. Yakunida yozuv va AI xulosa sizda — uchrashuv yozilganini esa hech kim bilmaydi.",
        alt: "Stol ustidagi noutbukda qora fondagi boshqaruv paneli",
      },
      f7: {
        title: "Jonli uchrashuvlar uchun mobil ilova",
        problem:
          "Zoʻr gʻoyalar jonli uchrashuvlarda tugʻiladi — va oʻsha yerda yoʻqoladi ham.",
        solution:
          "Bitta tugmani bosing — Dicta jonli uchrashuvingizni yozib oladi. Ilova soʻzlovchilarni avtomatik ajratadi va ovozidan kim gapirayotganini aniqlay oladi.",
        alt: "Majlis xonasida flipchart atrofida suhbatlashayotgan hamkasblar",
      },
      closer: {
        titlePre: "Bularning barchasi —",
        titleAccent: "bozordagi eng arzon narxda",
        sub: "Bizni istalgan raqobatchi bilan solishtiring: AI davrida aniqlik, tezlik va maxfiylik — eng arzon narxda. Sinab koʻring — bepul, karta shart emas.",
        cta: "Narxlarni koʻrish",
      },
    },
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
