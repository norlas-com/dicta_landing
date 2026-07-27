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
    deleteAccount: "Delete account",
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
    scrollCue: "Scroll",
    footerRights: "All rights reserved.",
    developedBy: "Developed by",
    features: {
      problemLabel: "The problem",
      solutionLabel: "Our solution",
      dotsLabel: "Sections",
      prevLabel: "Previous section",
      nextLabel: "Next section",
      f6cta: "Download the desktop app",
      f1: {
        title: "Uzbekistan's own meeting platform",
        problem:
          "Zoom, Google Meet and Teams keep your conversations on servers far away. For many teams here, that's a risk they can't accept.",
        solution:
          "Dicta Meet works better than Zoom, Google Meet and Teams. Our meeting servers live in the TAS-IX network — your data never leaves Uzbekistan.",
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
        cta: "Try it out",
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
    deleteAccountTitle: "How to delete your Dicta account",
    deleteAccountUpdated: "Last updated: July 27, 2026",
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
        selfServeBefore:
          "You can also do it yourself, from inside the app, without contacting us — see ",
        selfServeLink: "how to delete your Dicta account",
        selfServeAfter: ".",
      },
      contact: {
        title: "Contact",
        bodyBefore: "Questions or requests: ",
        bodyAfter: ".",
      },
    },
    deleteAccount: {
      intro:
        "You can delete your Dicta account yourself, from inside the app — you don't need to email us or ask permission. This page explains where the button is, what happens after you press it, and exactly what gets deleted.",
      where: {
        title: "Where to find the button",
        ios: {
          label: "iPhone and iPad.",
          text: "Open the Dicta app, go to Settings, and scroll to the bottom — “Delete account”.",
        },
        android: {
          label: "Android.",
          text: "Open the Dicta app, go to Settings, and scroll to the bottom — “Delete account”.",
        },
        web: {
          label: "Web.",
          text: "Sign in at meet.dicta.uz, open Settings, and scroll to the bottom — “Delete account”.",
        },
      },
      confirm: {
        title: "What you'll be asked to confirm",
        typeDelete:
          "Type the word DELETE, in capitals, to confirm you meant to press the button.",
        reauth:
          "Prove it's you. If your account has a password, you'll enter it. If you only ever signed in with Google or Apple, we email you a one-time code instead.",
        blockers:
          "If you own a workspace that still has other members in it, you'll be asked to hand ownership to someone else first, so their meetings don't disappear along with your account. The app walks you through it.",
      },
      immediate: {
        title: "What happens right away",
        body: "Your account is locked the moment you confirm. You're signed out on every device and Dicta stops working for you — no meetings, no recordings, no transcripts. Nothing is erased yet.",
      },
      grace: {
        title: "The 30-day grace period",
        body: "We wait 30 days before erasing anything. That delay is deliberate: it protects you from a mis-tap, a decision made in frustration, or someone else getting into your account.",
        restore:
          "To cancel the deletion, just sign in again during those 30 days and press Restore. Everything comes back exactly as it was. After 30 days the deletion is final and cannot be reversed.",
      },
      deleted: {
        title: "What is permanently deleted after 30 days",
        meetings:
          "Every meeting you hosted, along with its participant list, chat and notes.",
        recordings:
          "Every video and audio recording of those meetings, erased from our storage.",
        transcripts: "Every transcript produced from those meetings.",
        summaries:
          "Every AI summary, decision list and action item generated from them.",
        voices:
          "Your voice profiles — the voiceprints used to recognize you as a speaker, including voice samples stored inside other people's meetings.",
        workspaces:
          "Any workspace you own, together with its settings and its content.",
        account:
          "The account itself: your email address, name and profile photo. We do not keep a hidden copy.",
      },
      anonymized: {
        title: "What is anonymized instead of deleted",
        body: "Meetings hosted by other people are their records, not yours — we can't delete someone else's meeting because you left. So instead of deleting those, we take you out of them: your name, email and photo are replaced with “Deleted user” everywhere you appear — in participant lists, in chat messages, in invitations.",
        note: "One honest caveat: an AI summary is written prose, and it may mention your name in a sentence. Rewriting it would corrupt the host's record of their own meeting, so we leave those texts alone.",
      },
      payments: {
        title: "Payment records",
        body: "If you ever paid for Dicta, accounting and tax law require us to keep a record of the transaction. We keep only the amount, date, currency and plan, detached from your identity — your name, email and card details are not part of it. The record can no longer be traced back to you.",
      },
      contact: {
        title: "Need help?",
        bodyBefore:
          "If you can't reach the button, or something goes wrong, write to ",
        bodyAfter: " and we'll delete the account for you.",
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
    deleteAccount: "Удаление аккаунта",
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
    scrollCue: "Листайте",
    footerRights: "Все права защищены.",
    developedBy: "Разработано",
    features: {
      problemLabel: "Проблема",
      solutionLabel: "Наше решение",
      dotsLabel: "Разделы",
      prevLabel: "Предыдущий раздел",
      nextLabel: "Следующий раздел",
      f6cta: "Скачать приложение для компьютера",
      f1: {
        title: "Собственная платформа встреч Узбекистана",
        problem:
          "Zoom, Google Meet и Teams хранят ваши разговоры на далёких серверах. Для многих команд это неприемлемый риск.",
        solution:
          "Dicta Meet работает лучше Zoom, Google Meet и Teams. Наши серверы встреч находятся в сети TAS-IX — ваши данные никогда не покидают Узбекистан.",
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
        cta: "Попробовать",
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
    deleteAccountTitle: "Как удалить аккаунт Dicta",
    deleteAccountUpdated: "Последнее обновление: 27 июля 2026 г.",
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
        selfServeBefore:
          "Это также можно сделать самостоятельно, прямо в приложении, не обращаясь к нам — см. ",
        selfServeLink: "как удалить аккаунт Dicta",
        selfServeAfter: ".",
      },
      contact: {
        title: "Контакты",
        bodyBefore: "Вопросы и обращения: ",
        bodyAfter: ".",
      },
    },
    deleteAccount: {
      intro:
        "Вы можете удалить аккаунт Dicta самостоятельно, прямо в приложении — писать нам или спрашивать разрешения не нужно. На этой странице описано, где находится кнопка, что произойдёт после нажатия и что именно будет удалено.",
      where: {
        title: "Где находится кнопка",
        ios: {
          label: "iPhone и iPad.",
          text: "Откройте приложение Dicta, перейдите в «Настройки» и пролистайте вниз — «Удалить аккаунт».",
        },
        android: {
          label: "Android.",
          text: "Откройте приложение Dicta, перейдите в «Настройки» и пролистайте вниз — «Удалить аккаунт».",
        },
        web: {
          label: "Веб-версия.",
          text: "Войдите на meet.dicta.uz, откройте «Настройки» и пролистайте вниз — «Удалить аккаунт».",
        },
      },
      confirm: {
        title: "Что нужно будет подтвердить",
        typeDelete:
          "Введите слово DELETE заглавными буквами — чтобы подтвердить, что кнопка нажата не случайно.",
        reauth:
          "Подтвердите, что это вы. Если у аккаунта есть пароль, введите его. Если вы входили только через Google или Apple, мы отправим одноразовый код на вашу почту.",
        blockers:
          "Если вы владеете рабочим пространством, в котором остались другие участники, сначала потребуется передать владение другому человеку, чтобы его встречи не исчезли вместе с вашим аккаунтом. Приложение проведёт вас по этим шагам.",
      },
      immediate: {
        title: "Что произойдёт сразу",
        body: "Аккаунт блокируется в момент подтверждения. Вы выходите из системы на всех устройствах, и Dicta перестаёт для вас работать — ни встреч, ни записей, ни расшифровок. Но пока ничего не удалено.",
      },
      grace: {
        title: "30 дней на отмену",
        body: "Прежде чем что-либо удалить, мы ждём 30 дней. Эта задержка сделана намеренно: она защищает вас от случайного нажатия, решения на эмоциях или чужого доступа к вашему аккаунту.",
        restore:
          "Чтобы отменить удаление, просто войдите снова в течение этих 30 дней и нажмите «Восстановить». Всё вернётся ровно в том виде, в каком было. По истечении 30 дней удаление становится окончательным и необратимым.",
      },
      deleted: {
        title: "Что удаляется навсегда через 30 дней",
        meetings:
          "Все встречи, которые вы проводили, вместе со списком участников, чатом и заметками.",
        recordings:
          "Все видео- и аудиозаписи этих встреч — они стираются из нашего хранилища.",
        transcripts: "Все расшифровки этих встреч.",
        summaries:
          "Все AI-резюме, списки решений и задачи, созданные на их основе.",
        voices:
          "Ваши голосовые профили — слепки голоса, по которым вас узнавали как говорящего, включая образцы голоса, сохранённые во встречах других людей.",
        workspaces:
          "Любое рабочее пространство, которым вы владеете, вместе с его настройками и содержимым.",
        account:
          "Сам аккаунт: адрес электронной почты, имя и фотография профиля. Скрытой копии мы не храним.",
      },
      anonymized: {
        title: "Что обезличивается вместо удаления",
        body: "Встречи, которые проводили другие люди, принадлежат им, а не вам — мы не можем удалить чужую встречу из-за того, что вы уходите. Поэтому такие встречи мы не удаляем, а убираем из них вас: имя, почта и фотография заменяются на «Deleted user» везде, где вы упоминались — в списках участников, в сообщениях чата, в приглашениях.",
        note: "Одна честная оговорка: AI-резюме — это связный текст, и в нём может встретиться ваше имя. Переписать его означало бы испортить запись чужой встречи, поэтому такие тексты мы не трогаем.",
      },
      payments: {
        title: "Платёжные записи",
        body: "Если вы когда-либо оплачивали Dicta, законодательство о бухгалтерском и налоговом учёте обязывает нас хранить запись о платеже. Мы оставляем только сумму, дату, валюту и тариф, отделённые от вашей личности — без имени, почты и данных карты. Связать такую запись с вами уже невозможно.",
      },
      contact: {
        title: "Нужна помощь?",
        bodyBefore:
          "Если кнопка недоступна или что-то пошло не так, напишите на ",
        bodyAfter: " — мы удалим аккаунт за вас.",
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
    deleteAccount: "Hisobni oʻchirish",
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
    scrollCue: "Pastga suring",
    footerRights: "Barcha huquqlar himoyalangan.",
    developedBy: "Ishlab chiquvchi",
    features: {
      problemLabel: "Muammo",
      solutionLabel: "Bizning yechim",
      dotsLabel: "Boʻlimlar",
      prevLabel: "Oldingi boʻlim",
      nextLabel: "Keyingi boʻlim",
      f6cta: "Kompyuter ilovasini yuklab olish",
      f1: {
        title: "Oʻzbekistonning oʻz uchrashuv platformasi",
        problem:
          "Zoom, Google Meet va Teams suhbatlaringizni uzoqdagi serverlarda saqlaydi. Koʻp jamoalar uchun bu qabul qilib boʻlmas xavf.",
        solution:
          "Dicta Meet Zoom, Google Meet va Teams'dan yaxshiroq ishlaydi. Uchrashuv serverlarimiz TAS-IX tarmogʻida joylashgan — maʼlumotlaringiz hech qachon Oʻzbekistondan chiqmaydi.",
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
        cta: "Sinab koʻring",
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
    deleteAccountTitle: "Dicta hisobini qanday oʻchirish mumkin",
    deleteAccountUpdated: "Oxirgi yangilangan: 2026-yil 27-iyul",
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
        selfServeBefore:
          "Buni bizga murojaat qilmasdan, ilovaning oʻzida mustaqil ham bajarishingiz mumkin — qarang: ",
        selfServeLink: "Dicta hisobini qanday oʻchirish mumkin",
        selfServeAfter: ".",
      },
      contact: {
        title: "Aloqa",
        bodyBefore: "Savollar va murojaatlar: ",
        bodyAfter: ".",
      },
    },
    deleteAccount: {
      intro:
        "Dicta hisobingizni ilovaning oʻzida mustaqil oʻchirishingiz mumkin — bizga xat yozish yoki ruxsat soʻrash shart emas. Ushbu sahifada tugma qayerdaligi, uni bosgandan keyin nima boʻlishi va aynan nimalar oʻchirilishi tushuntirilgan.",
      where: {
        title: "Tugma qayerda",
        ios: {
          label: "iPhone va iPad.",
          text: "Dicta ilovasini oching, «Sozlamalar»ga oʻting va pastga suring — «Hisobni oʻchirish».",
        },
        android: {
          label: "Android.",
          text: "Dicta ilovasini oching, «Sozlamalar»ga oʻting va pastga suring — «Hisobni oʻchirish».",
        },
        web: {
          label: "Veb-versiya.",
          text: "meet.dicta.uz saytiga kiring, «Sozlamalar»ni oching va pastga suring — «Hisobni oʻchirish».",
        },
      },
      confirm: {
        title: "Nimani tasdiqlashingiz kerak",
        typeDelete:
          "Tasdiqlash uchun DELETE soʻzini katta harflarda yozing — tugma tasodifan bosilmaganiga ishonch hosil qilamiz.",
        reauth:
          "Bu haqiqatan siz ekaningizni tasdiqlang. Hisobingizda parol boʻlsa, uni kiritasiz. Agar faqat Google yoki Apple orqali kirgan boʻlsangiz, pochtangizga bir martalik kod yuboramiz.",
        blockers:
          "Agar siz egasi boʻlgan ish maydonida boshqa aʼzolar qolgan boʻlsa, avval egalikni boshqa odamga topshirishingiz soʻraladi — shunda ularning uchrashuvlari sizning hisobingiz bilan birga yoʻqolmaydi. Ilova bu bosqichlarni koʻrsatib boradi.",
      },
      immediate: {
        title: "Darhol nima boʻladi",
        body: "Tasdiqlagan zahotingiz hisobingiz qulflanadi. Barcha qurilmalardan tizimdan chiqarilasiz va Dicta siz uchun ishlashdan toʻxtaydi — uchrashuvlar ham, yozuvlar ham, transkriptlar ham. Ammo hali hech narsa oʻchirilmaydi.",
      },
      grace: {
        title: "Bekor qilish uchun 30 kun",
        body: "Biror narsani oʻchirishdan oldin 30 kun kutamiz. Bu kechikish ataylab qoʻyilgan: u sizni tasodifiy bosishdan, jahl ustida qabul qilingan qarordan yoki hisobingizga begona kirishidan himoya qiladi.",
        restore:
          "Oʻchirishni bekor qilish uchun shu 30 kun ichida qaytadan tizimga kiring va «Tiklash» tugmasini bosing. Hammasi qanday boʻlsa, shundayligicha qaytadi. 30 kun oʻtgach, oʻchirish yakuniy boʻladi va uni ortga qaytarib boʻlmaydi.",
      },
      deleted: {
        title: "30 kundan keyin butunlay oʻchiriladigan maʼlumotlar",
        meetings:
          "Siz oʻtkazgan barcha uchrashuvlar — ishtirokchilar roʻyxati, chat va eslatmalari bilan birga.",
        recordings:
          "Oʻsha uchrashuvlarning barcha video va audio yozuvlari — xotiramizdan butunlay oʻchiriladi.",
        transcripts: "Oʻsha uchrashuvlardan olingan barcha transkriptlar.",
        summaries:
          "Ular asosida yaratilgan barcha AI xulosalar, qarorlar roʻyxati va vazifalar.",
        voices:
          "Ovoz profillaringiz — sizni soʻzlovchi sifatida tanish uchun ishlatilgan ovoz izlari, jumladan boshqa odamlarning uchrashuvlarida saqlangan ovoz namunalari ham.",
        workspaces:
          "Siz egasi boʻlgan har qanday ish maydoni — sozlamalari va tarkibi bilan birga.",
        account:
          "Hisobingizning oʻzi: elektron pochta manzili, ism va profil rasmi. Yashirin nusxa saqlamaymiz.",
      },
      anonymized: {
        title: "Oʻchirilmasdan anonimlashtiriladigan maʼlumotlar",
        body: "Boshqa odamlar oʻtkazgan uchrashuvlar — bu ularning yozuvlari, sizniki emas. Siz ketganingiz uchun birovning uchrashuvini oʻchira olmaymiz. Shuning uchun ularni oʻchirmaymiz, balki ulardan sizni olib tashlaymiz: ismingiz, pochtangiz va rasmingiz siz uchragan hamma joyda — ishtirokchilar roʻyxatida, chat xabarlarida, taklifnomalarda — «Deleted user» bilan almashtiriladi.",
        note: "Bitta halol izoh: AI xulosa — bu bogʻlangan matn va unda ismingiz uchrab qolishi mumkin. Uni qayta yozish birovning oʻz uchrashuvi haqidagi yozuvini buzgan boʻlardi, shuning uchun bunday matnlarga tegmaymiz.",
      },
      payments: {
        title: "Toʻlov yozuvlari",
        body: "Agar Dicta uchun toʻlov qilgan boʻlsangiz, buxgalteriya va soliq qonunchiligi bizdan toʻlov haqidagi yozuvni saqlashni talab qiladi. Biz faqat summa, sana, valyuta va tarifni qoldiramiz — shaxsingizdan ajratilgan holda, ismingiz, pochtangiz va karta maʼlumotlaringizsiz. Bunday yozuvni endi siz bilan bogʻlab boʻlmaydi.",
      },
      contact: {
        title: "Yordam kerakmi?",
        bodyBefore:
          "Agar tugmaga yeta olmasangiz yoki biror narsa notoʻgʻri ketsa, quyidagi manzilga yozing: ",
        bodyAfter: " — hisobni siz uchun oʻchirib beramiz.",
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
