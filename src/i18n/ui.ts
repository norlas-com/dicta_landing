// Tri-lingual copy for the Dicta marketing site. Ported verbatim from the app
// (web/lib/i18n/dictionaries/{uz,ru,en}.ts), landing surface only. uz is the
// default (unprefixed); ru + en are path-prefixed (/ru, /en).

// The locale set lives in ./locales.ts, which has no other imports — Astro's
// `getStaticPaths` cannot resolve a helper imported from this module. See the
// note there.
export {
  LOCALES,
  DEFAULT_LOCALE,
  PREFIXED_LOCALES,
  RTL_LOCALES,
  localeStaticPaths,
  isRTL,
  dirFor,
  type Locale,
} from "./locales";
import { LOCALES, type Locale } from "./locales";

export const LOCALE_COOKIE = "dicta_locale";

export const LOCALE_LABEL: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
  ar: "العربية",
};

const en = {
  common: { login: "Login" },
  nav: {
    privacy: "Privacy",
    terms: "Terms",
    offer: "Offer",
    deleteAccount: "Delete account",
    download: "Download",
    downloadWin: "Download for Windows",
    faq: "FAQ",
    contact: "Contact",
  },
  landing: {
    footerRights: "All rights reserved.",
    developedBy: "Developed by",
  },
  home: {
    startFree: "Start free",
    hero: {
      eyebrow: "Records, transcribes, summarizes",
      titlePre: "Meetings that write",
      titleAccent: "their own notes.",
      sub: "Dicta records your calls and in-person meetings, transcribes them in Uzbek, Russian and English, and hands you the decisions and tasks minutes after you hang up.",
      ctaSecondary: "Talk to sales",
      note: "Free plan, no card. Ready in under a minute.",
      shotAlt: "A Dicta meeting summary with key decisions and action items",
      liveLabel: "Live transcript",
      live: [
        {
          who: "Dilnoza",
          text: "Let's move the warehouse launch to the 15th.",
        },
        {
          who: "Rustam",
          text: "Then I'll have the contracts signed by Friday.",
        },
        {
          who: "Dilnoza",
          text: "Agreed. Aziz, can you let the client know?",
        },
      ],
    },
    customers: {
      eyebrow: "Who records with Dicta",
      businessTag: "Business",
      premierLead: "Premier records all of its online and offline meetings with Dicta.",
      premierLink: "Visit premier.uz",
      peopleTag: "Individuals",
      peopleLeadPre: "And people who spend their day in meetings: ",
      roles: ["managers", "founders", "HR teams", "teachers", "freelancers", "sales people"],
      and: "and",
      peopleLeadPost: ".",
      usesLabel: "What people record with Dicta",
      uses: ["Team meetings", "Client calls", "Interviews", "Lectures", "Personal notes", "In-person meetings"],
    },
    stats: {
      eyebrow: "So far",
      pre: "Dicta has turned ",
      hours: "one:hour|other:hours",
      sep1: " of conversation into notes, across ",
      meetings: "one:meeting|other:meetings",
      sep2: ", for ",
      users: "one:person|other:people",
      post: ".",
      updated: "As of {date}",
      footnote: "Counted from Dicta's own database, not estimated.",
    },
    features: {
      titlePre: "From the first word",
      titleAccent: "to the last task.",
      sub: "Every meeting goes through the same three steps, and none of them needs you.",
      capture: {
        kicker: "Record",
        title: "Wherever the meeting happens",
        body: "Host the call in Dicta, send a bot into Zoom, Google Meet or Teams, record a room on your phone, or upload a file.",
        points: ["Guests join by link, with no account or install", "A bot joins the calls you can't attend", "The desktop app records without a bot in the call"],
        alt: "The Dicta meetings list with recorded calls from Dicta, Zoom and Google Meet",
      },
      transcript: {
        kicker: "Transcribe",
        title: "Every word, and who said it",
        body: "Accurate transcripts in Uzbek, Russian and English, even when people switch languages mid-sentence. Search any word and jump to that moment of the recording.",
        points: ["Speakers labeled automatically", "Searchable, timestamped text", "Recording and transcript side by side"],
        alt: "A Dicta transcript in Uzbek with speaker names and timestamps",
      },
      summary: {
        kicker: "Act",
        title: "Decisions and tasks, minutes after the call",
        body: "An AI summary you read in two minutes: what was decided and who does what. Tasks land in one list and work with the tools you already use.",
        points: ["Key decisions and topics", "Action items with an owner", "Works with Jira, Trello, Asana and ClickUp"],
        alt: "Dicta tasks created from meetings, each with an owner",
      },
      apps: {
        kicker: "Everywhere you work",
        title: "In the browser, on your desktop, in your pocket",
        body: "Web, macOS and Windows, iOS and Android. Record on one, read the notes on another.",
        desktop: "Download for desktop",
        alt: "The Dicta mobile app showing a meeting summary",
      },
    },
    finalCta: {
      titlePre: "Your next meeting",
      titleAccent: "can take its own notes.",
      sub: "Start on the free plan today. No card, no install, no time limit on calls.",
      secondary: "Download the apps",
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
    vatNote: "Prices are VAT-exempt — the seller is an IT Park resident.",
  },
  // FAQ. The answers restate claims made elsewhere on the site (feature story,
  // pricing, Terms, Privacy Policy) — do not add a claim here that those pages
  // do not already make. `limits` carries {free} and {paid}, filled from the
  // billing catalog at build time; `limitsNoCatalog` is the fallback.
  faq: {
    eyebrow: "FAQ",
    headingPre: "Questions,",
    headingAccent: "answered.",
    sub: "What teams and executives ask before they put Dicta in front of their meetings.",
    allLabel: "See all questions",
    pageTitle: "Frequently asked questions",
    pageSub: "How Dicta works for online and in-person meetings, what it costs, and how your data is handled.",
    moreLabels: {
      pricing: "See pricing",
      privacy: "Read the Privacy Policy",
      download: "Get the apps",
      contact: "Contact us",
    },
    q: {
      what: {
        q: "What is Dicta?",
        a: "Dicta is an all-in-one meeting platform. You host the call and Dicta records it, transcribes it, and writes the summary: decisions, tasks and topics. Guests join by link, with no guest accounts and nothing to install.",
      },
      rooms: {
        q: "Does Dicta work for both online and in-person meetings?",
        a: "Yes. Online calls can be held in Dicta itself or recorded in Zoom, Google Meet and Microsoft Teams. For face-to-face meetings, tap one button in the mobile app and Dicta records the room, detecting the different speakers automatically.",
      },
      bot: {
        q: "Can Dicta join Zoom, Google Meet or Teams calls?",
        a: "Yes. Send a Dicta bot on your behalf. It joins Zoom, Google Meet and Microsoft Teams meetings, and you still get the full transcription and AI summary, even when you cannot attend.",
      },
      desktop: {
        q: "Can we record without a visible bot in the call?",
        a: "Yes. The Dicta desktop app detects when you join a call and records it for you, with no bot in the meeting. At the end you get the recording and the AI summary. Recording requires the consent of all participants where the law demands it, and you are responsible for obtaining it.",
      },
      languages: {
        q: "Which languages does Dicta support?",
        a: "Dicta transcribes meetings in any language with high accuracy, including Uzbek, Russian and English, and attributes every person's words to the right speaker.",
      },
      speakers: {
        q: "Can Dicta tell who said what?",
        a: "Yes. Every person's words are attributed to the right speaker. In the mobile app, Dicta detects the different speakers of an in-person meeting and can identify who is talking by their voice. Voice recognition is optional: it is asked for separately and your voiceprint can be deleted at any time.",
      },
      summary: {
        q: "What do we get after a meeting?",
        a: "A full AI summary of decisions, tasks and topics that takes about 2 minutes to read, and a transcript you can search to jump to the exact moment of the recording. Tasks are created automatically and assigned to the right person, and they work with Jira, Trello, Asana, ClickUp or your own task platform.",
      },
      limits: {
        q: "How do free minutes and limits work?",
        a: "Every team starts on the Free plan: {free} minutes per month, no card required. Paid plans raise the limit: {paid}. Plans also set storage and how long history is kept. Need more minutes? One-time minute packs never expire.",
      },
      limitsNoCatalog:
        "Every plan starts free, with no card required. Paid plans raise the monthly minutes, storage and history. Need more minutes? One-time minute packs never expire.",
      pay: {
        q: "How do we pay, and does it renew automatically?",
        a: "Paid plans are paid online in Uzbek sum (UZS), by bank card or from an Uzbek e-wallet (Payme, Click, Uzum, Alif, Anorbank, Xazna) through the Multicard gateway. Dicta never sees or stores your card details, and a fiscal receipt is issued for every payment. Renewal is manual, with no auto-renewal: when the paid period ends the account returns to the free plan, and we email a reminder first. If your company needs a separate contract, request it at legal@dicta.uz.",
      },
      privacy: {
        q: "How is our data handled?",
        a: "We do not sell your data, show advertising, or use your meetings to train AI models. Recordings sit in a private object store and are accessible only to the host. Producing a transcript and summary needs AI processing providers, so we ask for your permission before any of it happens; without consent, recording, transcription and AI features stay off. You can delete your data and account yourself, and we remove your account, transcripts and recordings within 30 days.",
      },
      apps: {
        q: "Which apps are available?",
        a: "Dicta works in the browser, as a desktop app for macOS and Windows, and as mobile apps for iOS and Android.",
      },
      sales: {
        q: "How do I contact sales?",
        a: "Use the contact form on this site: leave a phone number or an email and our team will contact you. You can also write to support@dicta.uz.",
      },
    },
  },
  // Sales contact form -> /api/contact -> Telegram (functions/api/contact.js).
  contact: {
    eyebrow: "Contact",
    headingPre: "Talk to us,",
    headingAccent: "a real person replies.",
    sub: "Tell us how to reach you and our team will get back to you shortly.",
    name: "Name",
    phone: "Phone",
    reachHint: "A phone number or an email is enough, whichever you prefer. Everything else is optional.",
    email: "Email",
    company: "Company",
    message: "Message",
    optional: "optional",
    messagePlaceholder: "What would you like to use Dicta for?",
    submit: "Send",
    sending: "Sending…",
    successTitle: "Thank you, request received.",
    successBody: "Our team will contact you soon.",
    errorInvalid: "Please leave a valid phone number or email so we can reach you.",
    errorGeneric: "Something went wrong. Please try again or write to support@dicta.uz.",
    note: "We will use these details to contact you about your request.",
  },
  // 404 page. One static file serves every locale, so the page carries all of
  // them and a script reveals the one matching the URL prefix.
  notFound: {
    title: "Page not found",
    sub: "This page does not exist or has moved.",
    home: "Back to home",
    download: "Download",
  },
  notetaker: { steps: { recording: "Recording" } },
  // Badge labels. `*Super` is the short line printed INSIDE the badge SVG and
  // must stay under ~22 characters or it clips; the unsuffixed key is the full
  // phrase used as the link's aria-label.
  appBadges: {
    appStore: "Download on the App Store",
    googlePlay: "Get it on Google Play",
    appStoreSuper: "Download on the",
    googlePlaySuper: "GET IT ON",
  },
  download: {
    title: "Get Dicta",
    sub: "Dicta runs everywhere your meetings do — on your phone, on your computer, and in the browser.",
    desktopHeading: "For your computer",
    desktopSub:
      "Runs in the background, auto-detects your meetings, and captures them locally — no bot joins the call.",
    mobileHeading: "For your phone",
    mobileSub:
      "Record in-person meetings, read summaries on the move, and run roundtable meetings — where everyone's phone records at once. Roundtable works in the app only.",
    mobileScan: "Scan to install on your phone",
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
    privacyUpdated: "Last updated: October 26, 2026",
    termsTitle: "Terms of Service",
    termsUpdated: "Last updated: July 28, 2026",
    offerTitle: "Public Offer",
    offerUpdated: "Last updated: July 28, 2026",
    deleteAccountTitle: "How to delete your Dicta account",
    deleteAccountUpdated: "Last updated: July 27, 2026",
    privacy: {
      intro:
        'Dicta ("we", "our") operates the meeting service at dicta.uz. This page explains what we collect, how we collect it, what we use it for, and every third party we share it with.',
      dataCollect: {
        title: "Data we collect",
        accountInfo: {
          label: "Account info.",
          text: "Email address, full name, and (when you sign in with Google) the Google profile picture URL. Collected when you create an account.",
        },
        meetings: {
          label: "Meetings.",
          text: "Meeting titles, participants, timestamps, and short codes you generate. Collected as you use the service.",
        },
        transcripts: {
          label: "Audio and transcripts.",
          text: "When transcription is enabled, your meeting audio is captured by the app and sent to the AI providers listed below to produce a transcript, a summary, decisions and action items. The audio itself is not retained by us after processing unless recording is also on — only the resulting text is kept.",
        },
        recordings: {
          label: "Recordings.",
          text: "When the host starts recording, video and audio are uploaded to our private object store and accessible only to the host. We do not sell or publish recordings.",
        },
        voiceprints: {
          label: "Voiceprints (optional).",
          text: "If you opt in to voice enrollment, we derive a mathematical signature of your voice from a short sample and store it on our own servers so we can label you automatically in transcripts. This is optional, is asked for separately, and can be deleted at any time.",
        },
        location: {
          label: "Location (optional).",
          text: "If you allow it, an offline recording is tagged once, at the moment it starts, with the place you made it. Declining leaves recordings unlabelled and changes nothing else.",
        },
        logs: {
          label: "Operational logs and diagnostics.",
          text: "IP address, user agent, request timing and crash reports, for debugging and abuse prevention.",
        },
      },
      howCollected: {
        title: "How we collect it",
        body: "Directly from you when you create an account or type into the app; automatically from your device when you record or join a meeting (microphone and, if you turn it on, camera and location); and from our servers as you use the service (logs and diagnostics). We do not buy personal data and we do not track you across other companies' apps or websites.",
      },
      howWeUse: {
        title: "How we use it",
        body: "To run the service, produce transcripts and AI summaries, support hosts after a meeting, process payments, and prevent abuse. We do not sell your data, we do not show advertising, and we do not use your meetings to train AI models.",
      },
      ai: {
        title: "AI processing",
        body: "Turning a meeting into a transcript and a summary requires sending your data to third-party AI processing providers outside Dicta. Your meeting audio is sent to convert speech into text and to determine who spoke when; the resulting transcript, meeting title and participant names are sent to generate summaries, decisions and action items and to answer your questions in AI chat.",
        consent:
          "This processing happens only when you record, upload or transcribe a meeting. Without these features you can still sign in, create and join meetings and hold audio/video calls, with no AI processing at all.",
      },
      thirdParties: {
        title: "Third parties we share data with",
        intro:
          "We share personal data only with the providers below, only for the purpose named, and only to deliver the service. Each is bound by a contract that requires them to protect your data to a standard equivalent to this policy, to process it solely on our instructions, and not to use it to train their own models or for their own purposes.",
        items: [
          {
            name: "AI processing providers",
            purpose:
              "Speech-to-text transcription, speaker separation, voiceprint processing, summaries, decisions, action items, AI chat answers and search indexing. Receive meeting audio, transcript text, meeting titles, participant display names and, if you enroll your voice, the voice-enrollment clip.",
          },
          {
            name: "Recall.ai",
            purpose:
              "Only if you send the Dicta notetaker into an external Zoom, Google Meet or Microsoft Teams call. Receives that meeting's link, and returns its audio, video and attendee names. Processed in the European Union.",
          },
          {
            name: "Google (Sign-In) and Apple (Sign in with Apple)",
            purpose: "Authentication, if you choose those sign-in methods.",
          },
          {
            name: "LiveKit",
            purpose:
              "Real-time audio and video during a call. Runs on our own servers in Uzbekistan.",
          },
          {
            name: "Cloudflare",
            purpose:
              "Encrypted storage of recordings, content delivery, and sending transactional email.",
          },
          {
            name: "Sentry",
            purpose:
              "Crash and error diagnostics, which may include your account identifier and request details.",
          },
          {
            name: "Firebase and Google Analytics",
            purpose:
              "Product usage analytics. You can switch this off in Settings; it is never used for advertising.",
          },
          {
            name: "Apple Push Notification service and Firebase Cloud Messaging",
            purpose: "Delivering push notifications, which may contain meeting titles.",
          },
          {
            name: "OpenStreetMap (Nominatim)",
            purpose:
              "Turning the coordinates of an offline recording into a place name, if you enabled location.",
          },
          {
            name: "Telegram",
            purpose:
              "Sending you meeting summaries, if you link your Telegram account.",
          },
          {
            name: "Multicard and RevenueCat",
            purpose: "Processing payments and subscriptions.",
          },
          {
            name: "Trello, Jira, ClickUp, Asana and Hisobot",
            purpose:
              "Only if you connect them. Receives the meeting title, action items, decisions, a summary excerpt and a recap link. Anyone holding that link can open the recap, so connect these only to boards your participants would accept.",
          },
        ],
      },
      retention: {
        title: "How long we keep it",
        body: "Account data is kept while your account exists. Transcripts, summaries and recordings are kept until you delete them or delete your account. Voiceprints are kept until you remove them or turn voice enrollment off. Operational logs and diagnostics are kept for up to 90 days. After you delete your account we remove your account, transcripts and recordings within 30 days.",
      },
      transfers: {
        title: "Where your data is processed",
        body: "Our meeting servers are in Uzbekistan, on the TAS-IX network, and live call traffic stays on them. The AI processing providers listed above process data outside Uzbekistan in their own regions, and Recall.ai in the European Union. Where data leaves Uzbekistan we rely on contractual protections equivalent to this policy.",
      },
      security: {
        title: "Security",
        body: "Traffic is encrypted in transit. Recordings are stored in a private object store that is not publicly listable, and are reachable only through short-lived signed links. Access to production systems is limited to staff who need it. No system is perfectly secure, so we also give you the tools to delete your data yourself.",
      },
      children: {
        title: "Children",
        body: "Dicta is not directed at children under 13, and we do not knowingly collect their personal data. If you believe a child has given us data, write to us and we will delete it.",
      },
      yourRights: {
        title: "Your rights",
        bodyBefore: "You can access, correct, export or delete your data, and withdraw consent to AI processing at any time. You can delete your account by emailing ",
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
      payment: {
        title: "Payment and subscription",
        body: "Dicta has a free plan and paid plans. Paid plans are sold in Uzbek sum (UZS) and paid online — by bank card or from an Uzbek e-wallet (Payme, Click, Uzum, Alif, Anorbank, Xazna) through the Multicard gateway. We never see or store your card details. A paid plan is activated as soon as the payment is confirmed and runs for the period you paid for; the limits of that plan — minutes, storage and history — apply for that period.",
      },
      renewal: {
        title: "Renewal",
        body: "Renewal is manual. We do not store your card and we never charge you automatically — there is no auto-renewal. When the paid period ends, the plan simply stops and your account returns to the free plan. There is nothing to cancel. To continue, you pay for the next period yourself. We send a reminder to your email before the period runs out.",
      },
      refunds: {
        title: "Refunds",
        bodyBefore:
          "We do not refund payments for a service that has already been provided, including the unused part of a period if you stop using Dicta early. The free plan lets you evaluate the service in full before you pay. A refund is made only for a duplicate or erroneous charge, or where a plan was paid for but never activated. The procedure for requesting one is set out in the ",
        linkLabel: "Public Offer",
        bodyAfter: ".",
      },
      taxes: {
        title: "Taxes and receipts",
        body: 'Prices are shown without value added tax: "NORLAS IT SOLUTIONS" LLC is a resident of IT Park of the Republic of Uzbekistan and is exempt from VAT, so no VAT is added at checkout. A fiscal receipt is issued for every payment through a fiscal data operator: it is sent to your email address and a link to it is kept in your payment history in the app.',
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
    offer: {
      intro:
        'This document is a public offer by "NORLAS IT SOLUTIONS" LLC (the "Seller") addressed to any individual or legal entity (the "Customer") to conclude an agreement for paid access to the Dicta service on the terms set out below. Please read it in full before you pay: payment means acceptance of every clause of this offer.',
      subject: {
        title: "1. Subject of the offer",
        body: "The Seller grants the Customer paid access to Dicta — an online service for holding meetings and for recording them, transcribing speech into text and preparing summaries automatically — within the limits of the chosen plan and for the period paid for. Dicta is provided as a service over the internet; no copy of the software is handed over to the Customer and no exclusive rights to it are transferred.",
        scope:
          "Access is granted to the Customer's account. Where the Customer is a legal entity, access extends to the users the Customer adds to its workspace, within the limits of the chosen plan.",
      },
      acceptance: {
        title: "2. Acceptance of the offer",
        body: "This offer is accepted by payment. Choosing a plan and paying for it in full is the Customer's complete and unconditional acceptance of the terms of this offer, and constitutes an acceptance within the meaning of the Civil Code of the Republic of Uzbekistan.",
        effectBefore:
          "From the moment the payment is received, the agreement is treated as concluded in writing on the terms of this offer and has the force of a document signed by both parties. A separate paper contract is not required; if the Customer needs one, it can be requested at ",
        effectAfter: ".",
        version:
          "A payment is governed by the version of the offer published on this page at the moment that payment is made.",
      },
      seller: {
        title: "3. Details of the Seller",
        nameLabel: "Full name:",
        nameValue: '"NORLAS IT SOLUTIONS" Limited Liability Company',
        stirLabel: "Taxpayer ID (STIR):",
        stirValue: "312444263",
        addressLabel: "Legal address:",
        addressValue: "Yangidarxon MFY, Navro'z street, 13, apt. 96, Republic of Uzbekistan",
        directorLabel: "Director:",
        directorValue: "Behruz Mahmudov",
        siteLabel: "Website:",
        siteValue: "dicta.uz",
        supportLabel: "Support:",
        legalLabel: "Legal matters:",
      },
      service: {
        title: "4. What the service includes",
        body: "Dicta is software provided as a service: in a browser at meet.dicta.uz and in the Dicta applications for macOS, Windows, iOS and Android. Within the limits of the plan paid for, the service provides:",
        item1: "video meetings by link, with nothing for guests to install;",
        item2: "recording of meetings and storage of the recordings;",
        item3: "automatic transcription of speech in Uzbek, Russian and English;",
        item4: "summaries, decision lists and action items generated by AI from the transcript;",
        item5: "search across past meetings, sharing of the results, and export to connected services.",
        limits:
          "The specific limits — minutes per month, storage volume, how long history is kept and the number of workspace members — are set by the plan the Customer has paid for.",
      },
      plans: {
        title: "5. Plans and prices",
        bodyBefore: "The current plans, their limits and their prices are published on the ",
        linkLabel: "pricing page",
        bodyAfter:
          " and form an integral part of this offer. Prices are stated per plan and per billing period (a month or a year).",
        free: "Dicta also has a permanently free plan. The Customer can evaluate the service in full before paying: no card is required to register, and none is required to keep using the free plan.",
      },
      vat: {
        title: "6. Value added tax",
        body: "The Seller is a resident of the Technological Park of Software Products and Information Technologies (IT Park) of the Republic of Uzbekistan and is exempt from value added tax. All prices are shown without VAT, and no VAT is added to them at checkout.",
        certificate: "IT Park resident certificate: No. 6513, entered in the Unified Register of Technopark residents on 17 July 2026 (decision No. 14/24 of 17 July 2026).",
      },
      payment: {
        title: "7. Payment methods and currency",
        body: "All settlements are made in the national currency of the Republic of Uzbekistan — the Uzbek sum (UZS).",
        methods:
          "Payment is made online through the Multicard payment gateway: by bank card, or from the Payme, Click, Uzum, Alif, Anorbank and Xazna e-wallets.",
        noCard:
          "The Seller does not receive, process or store the full card number, its expiry date or its CVV — that data is entered on the side of the payment gateway and the bank.",
        moment:
          "The payment obligation is treated as performed at the moment the funds are credited to the Seller's account and the payment gateway confirms a successful payment.",
      },
      activation: {
        title: "8. When access is opened",
        body: "The plan paid for is activated automatically once the payment gateway confirms the payment — as a rule, within a few minutes. The paid period runs from the moment of activation.",
        failureBefore:
          "If the money has been debited but the plan has not appeared in the account, the Customer should write to ",
        failureAfter:
          ", stating the date, the amount and the receipt of the payment. We will either open the access or return the payment.",
      },
      term: {
        title: "9. Term of the subscription and renewal",
        body: "A plan that has been paid for is valid for the period paid for — a month or a year, according to the plan chosen — starting from the moment of activation.",
        manual:
          "Renewal is manual. Dicta does not store the Customer's card and never charges it automatically. There is no auto-renewal.",
        expiry:
          "When the paid period ends, the plan simply stops and the account returns to the free plan. Nothing has to be cancelled and no notice of cancellation has to be given. To continue on a paid plan, the Customer pays for the next period themselves, whenever they choose to.",
        reminder:
          "Before the paid period ends we send a reminder to the email address on the account, so that the expiry does not come as a surprise.",
      },
      refunds: {
        title: "10. Refunds",
        body: "Money paid for a service that has actually been rendered is not refunded. Access is granted for the whole paid period from the moment of payment, and the free plan makes it possible to evaluate the service in full before paying anything.",
        earlyStop:
          "If the Customer stops using Dicta before the paid period ends, or deletes the account, the unused part of the period is not refunded and is not carried over.",
        exceptionsIntro: "A refund is made in two cases only:",
        exception1:
          "a duplicate or erroneous charge — the same payment was taken twice, or an amount was debited that does not correspond to the price of the chosen plan;",
        exception2:
          "the service was paid for but not provided — the plan paid for was not activated and it proved impossible to activate it.",
        howBefore: "A refund request is sent to ",
        howAfter:
          " stating the date, the amount and the receipt of the payment. Where the request is justified, the money is returned through the same payment gateway to the card or wallet the payment was made from; how soon it appears depends on the issuing bank.",
        consumer:
          "This section does not limit the rights granted to individuals by the legislation of the Republic of Uzbekistan on the protection of consumer rights.",
      },
      receipt: {
        title: "11. Fiscal receipt",
        body: "A fiscal receipt is generated for every payment through a fiscal data operator (OFD), as required by the legislation of the Republic of Uzbekistan.",
        delivery:
          "The receipt is sent to the email address on the Customer's account, and a link to it is kept in the payment history inside the app. The receipt is the document confirming payment.",
        missingBefore: "If the receipt has not arrived, check the spam folder and then write to ",
        missingAfter: " — we will send it again.",
      },
      customerObligations: {
        title: "12. The Customer's obligations",
        intro: "The Customer undertakes to:",
        item1: "provide accurate registration details and a working email address and keep them up to date — the receipt, the reminders and service notices are sent there;",
        item2: "keep the sign-in credentials secret and not pass access to third parties;",
        item3: "use Dicta in accordance with the Terms of Service and the legislation of the Republic of Uzbekistan;",
        item4: "obtain the consent of all meeting participants to recording and transcription where the law requires it;",
        item5: "not resell, sublicense or otherwise give access to the paid plan to persons outside the Customer's own workspace;",
        item6: "pay for the chosen plan in the amount and by the method set out in this offer.",
      },
      sellerObligations: {
        title: "13. The Seller's obligations",
        intro: "The Seller undertakes to:",
        item1: "provide access to the plan paid for throughout the whole paid period;",
        item2: "keep the service running and take reasonable technical measures for its availability and security;",
        item3: "generate and deliver a fiscal receipt for every payment;",
        item4: "process personal data in accordance with the Privacy Policy;",
        item5: "provide support on the matters covered by the chosen plan, at the contacts given in section 3.",
        availability:
          "The Seller does not guarantee uninterrupted, error-free operation of the service. Access may be suspended temporarily for maintenance, security work, updates or capacity reasons, as well as for reasons beyond the Seller's control — failures of communication channels, of the Customer's equipment or of third-party services. Short interruptions of this kind do not count as a failure to provide the service and are not grounds for a refund.",
      },
      liability: {
        title: "14. Limitation of liability",
        body: 'The service is provided "as is". To the fullest extent permitted by law, the Seller is not liable for indirect, incidental or consequential losses, for lost profit or for loss of data arising from the use of, or the inability to use, the service.',
        ai: "Transcripts, summaries, decision lists and action items are generated automatically by machine-learning models and may contain inaccuracies. They are an aid, not a legally significant document. The Customer must check them before relying on them in decisions, in accounting or in dealings with third parties.",
        cap: "In any event the Seller's aggregate liability is limited to the amount actually paid by the Customer for the paid period in which the event giving rise to the liability occurred.",
        force:
          "Neither party is liable for a failure to perform caused by circumstances of force majeure, including acts of state bodies, natural disasters, hostilities, or mass failures of communications or electricity supply.",
      },
      personalData: {
        title: "15. Personal data",
        bodyBefore:
          "Personal data is processed in accordance with the legislation of the Republic of Uzbekistan on personal data and with the ",
        linkLabel: "Privacy Policy",
        bodyAfter:
          ", which explains what data is collected, why, how long it is kept, and how the Customer can delete their account and their data. Acceptance of this offer also constitutes consent to the processing of personal data on those terms.",
      },
      termination: {
        title: "16. Term of the agreement and its termination",
        body: "The agreement enters into force at the moment the offer is accepted (payment) and is valid until the end of the paid period, or until the parties have performed their obligations in full.",
        customer:
          "The Customer may stop using Dicta at any time and delete the account directly in the app. Deletion of the account terminates the agreement; the unused part of the paid period is not refunded.",
        seller:
          "The Seller may suspend or terminate access in the event of a breach of the Terms of Service or of the legislation of the Republic of Uzbekistan, including use of the service for unlawful purposes or actions that disrupt its operation.",
      },
      amendments: {
        title: "17. Amendments to the offer",
        body: "The Seller may amend this offer and the prices unilaterally. A new version enters into force from the moment it is published on this page with the date updated.",
        priceLock:
          "A change of price does not apply to a period already paid for: the plan paid for continues on the terms and at the price in force at the moment of payment. Continuing to use the service after the changes are published, as well as any subsequent payment, constitutes acceptance of the new version.",
      },
      law: {
        title: "18. Governing law and settlement of disputes",
        body: "This offer, and the relations arising out of it, are governed by the law of the Republic of Uzbekistan.",
        claimsBefore:
          "The parties will seek to settle disputes through negotiation. A written claim is sent to ",
        claimsAfter: " and is considered within the period established by law.",
        court:
          "If agreement is not reached, the dispute is referred to the competent economic court at the Seller's registered address and settled in accordance with the legislation of the Republic of Uzbekistan.",
        languages:
          "This offer is published in Uzbek, Russian and English. In the event of a discrepancy between the texts, the Uzbek text prevails.",
      },
    },
  },
};

const ru: typeof en = {
  common: { login: "Войти" },
  nav: {
    privacy: "Конфиденциальность",
    terms: "Условия",
    offer: "Оферта",
    deleteAccount: "Удаление аккаунта",
    download: "Скачать",
    downloadWin: "Скачать для Windows",
    faq: "FAQ",
    contact: "Контакты",
  },
  landing: {
    footerRights: "Все права защищены.",
    developedBy: "Разработано",
  },
  home: {
    startFree: "Начать бесплатно",
    hero: {
      eyebrow: "Записывает, расшифровывает, подводит итоги",
      titlePre: "Встречи, которые",
      titleAccent: "сами ведут протокол.",
      sub: "Dicta записывает созвоны и живые встречи, расшифровывает их на узбекском, русском и английском и через несколько минут после звонка выдаёт решения и задачи.",
      ctaSecondary: "Связаться с продажами",
      note: "Бесплатный тариф, без карты. Готово меньше чем за минуту.",
      shotAlt: "Итоги встречи в Dicta: ключевые решения и задачи",
      liveLabel: "Расшифровка в эфире",
      live: [
        {
          who: "Дильноза",
          text: "Давайте перенесём запуск склада на 15-е.",
        },
        {
          who: "Рустам",
          text: "Тогда договоры подпишу к пятнице.",
        },
        {
          who: "Дильноза",
          text: "Договорились. Азиз, предупредишь клиента?",
        },
      ],
    },
    customers: {
      eyebrow: "Кто записывает встречи в Dicta",
      businessTag: "Бизнес",
      premierLead: "Premier записывает все свои онлайн- и офлайн-встречи в Dicta.",
      premierLink: "Перейти на premier.uz",
      peopleTag: "Частные пользователи",
      peopleLeadPre: "И люди, у которых весь день во встречах: ",
      roles: ["руководители", "основатели", "HR-команды", "преподаватели", "фрилансеры", "продавцы"],
      and: "и",
      peopleLeadPost: ".",
      usesLabel: "Что записывают в Dicta",
      uses: ["Командные встречи", "Звонки с клиентами", "Собеседования", "Лекции", "Личные заметки", "Офлайн-встречи"],
    },
    stats: {
      eyebrow: "На сегодня",
      pre: "Dicta превратила в заметки ",
      hours: "one:час|few:часа|many:часов|other:часа",
      sep1: " разговоров: это ",
      meetings: "one:встреча|few:встречи|many:встреч|other:встречи",
      sep2: " для ",
      users: "one:человека|few:человек|many:человек|other:человека",
      post: ".",
      updated: "Данные на {date}",
      footnote: "Посчитано по базе данных Dicta, а не оценка.",
    },
    features: {
      titlePre: "От первого слова",
      titleAccent: "до последней задачи.",
      sub: "Каждая встреча проходит три одинаковых шага, и ни один из них не требует вашего участия.",
      capture: {
        kicker: "Запись",
        title: "Где бы ни проходила встреча",
        body: "Проведите звонок в Dicta, отправьте бота в Zoom, Google Meet или Teams, запишите переговорную на телефон или загрузите файл.",
        points: ["Гости заходят по ссылке, без аккаунта и установки", "Бот подключится к звонку, на который вы не успеваете", "Десктоп-приложение пишет без бота в звонке"],
        alt: "Список встреч в Dicta: записи из Dicta, Zoom и Google Meet",
      },
      transcript: {
        kicker: "Расшифровка",
        title: "Каждое слово и кто его сказал",
        body: "Точная расшифровка на узбекском, русском и английском, даже если собеседники переходят с языка на язык посреди фразы. Найдите любое слово и перейдите к этому моменту записи.",
        points: ["Спикеры размечаются автоматически", "Текст с таймкодами и поиском", "Запись и расшифровка рядом"],
        alt: "Расшифровка встречи на узбекском в Dicta с именами спикеров и таймкодами",
      },
      summary: {
        kicker: "Итоги",
        title: "Решения и задачи через несколько минут после звонка",
        body: "ИИ-резюме, которое читается за две минуты: что решили и кто что делает. Задачи собираются в один список и работают с вашими инструментами.",
        points: ["Ключевые решения и темы", "Задачи с ответственными", "Работает с Jira, Trello, Asana и ClickUp"],
        alt: "Задачи из встреч в Dicta, у каждой есть ответственный",
      },
      apps: {
        kicker: "Везде, где вы работаете",
        title: "В браузере, на компьютере и в кармане",
        body: "Веб, macOS и Windows, iOS и Android. Записывайте на одном устройстве, читайте итоги на другом.",
        desktop: "Скачать для компьютера",
        alt: "Мобильное приложение Dicta с итогами встречи",
      },
    },
    finalCta: {
      titlePre: "Ваша следующая встреча",
      titleAccent: "запишет себя сама.",
      sub: "Начните с бесплатного тарифа сегодня. Без карты, без установки, без ограничения по времени звонка.",
      secondary: "Скачать приложения",
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
    vatNote: "Цены не облагаются НДС — продавец является резидентом IT Park.",
  },
  faq: {
    eyebrow: "FAQ",
    headingPre: "Вопросы",
    headingAccent: "и ответы.",
    sub: "О чём спрашивают команды и руководители, прежде чем подключить Dicta к своим встречам.",
    allLabel: "Все вопросы",
    pageTitle: "Часто задаваемые вопросы",
    pageSub: "Как Dicta работает на онлайн- и офлайн-встречах, сколько это стоит и как обрабатываются ваши данные.",
    moreLabels: {
      pricing: "Посмотреть цены",
      privacy: "Прочитать политику конфиденциальности",
      download: "Скачать приложения",
      contact: "Связаться с нами",
    },
    q: {
      what: {
        q: "Что такое Dicta?",
        a: "Dicta — универсальная платформа для встреч. Вы проводите звонок, а Dicta записывает его, расшифровывает и пишет резюме: решения, задачи и темы. Гости заходят по ссылке — без гостевых аккаунтов и установки.",
      },
      rooms: {
        q: "Работает ли Dicta и для онлайн-, и для офлайн-встреч?",
        a: "Да. Онлайн-звонки можно проводить в самой Dicta или записывать в Zoom, Google Meet и Microsoft Teams. Для встреч лицом к лицу нажмите одну кнопку в мобильном приложении — Dicta запишет встречу и сама определит разных говорящих.",
      },
      bot: {
        q: "Может ли Dicta заходить в звонки Zoom, Google Meet и Teams?",
        a: "Да. Отправьте бота Dicta вместо себя. Он заходит на встречи в Zoom, Google Meet и Microsoft Teams, а вы всё равно получаете полную расшифровку и AI-резюме, даже если не смогли присутствовать.",
      },
      desktop: {
        q: "Можно ли записывать без видимого бота в звонке?",
        a: "Да. Приложение Dicta для компьютера определяет, что вы зашли в звонок, и записывает его за вас — без бота во встрече. В конце вы получаете запись и AI-резюме. Где этого требует закон, для записи нужно согласие всех участников, и получить его должны вы.",
      },
      languages: {
        q: "Какие языки поддерживает Dicta?",
        a: "Dicta расшифровывает встречи на любом языке с высокой точностью, включая узбекский, русский и английский, и относит слова каждого человека к нужному говорящему.",
      },
      speakers: {
        q: "Определяет ли Dicta, кто что сказал?",
        a: "Да. Слова каждого человека относятся к нужному говорящему. В мобильном приложении Dicta различает говорящих на очной встрече и может определить по голосу, кто говорит. Распознавание по голосу необязательно: согласие запрашивается отдельно, а голосовой отпечаток можно удалить в любой момент.",
      },
      summary: {
        q: "Что мы получаем после встречи?",
        a: "Полное AI-резюме с решениями, задачами и темами, которое читается примерно за 2 минуты, и расшифровку, по которой можно искать и переходить к нужному моменту записи. Задачи создаются автоматически и назначаются нужному человеку, а работают они с Jira, Trello, Asana, ClickUp или вашей собственной платформой задач.",
      },
      limits: {
        q: "Как работают бесплатные минуты и лимиты?",
        a: "Каждая команда начинает с тарифа Free: {free} минут в месяц, карта не нужна. Платные тарифы увеличивают лимит: {paid}. Тарифы также определяют объём хранилища и срок хранения истории. Нужно больше минут? Разовые пакеты минут не сгорают.",
      },
      limitsNoCatalog:
        "Любой тариф начинается бесплатно, карта не нужна. Платные тарифы увеличивают месячные минуты, хранилище и историю. Нужно больше минут? Разовые пакеты минут не сгорают.",
      pay: {
        q: "Как оплатить и продлевается ли подписка автоматически?",
        a: "Платные тарифы оплачиваются онлайн в узбекских сумах (UZS) банковской картой или из узбекского электронного кошелька (Payme, Click, Uzum, Alif, Anorbank, Xazna) через платёжный шлюз Multicard. Dicta не видит и не хранит данные вашей карты, а за каждый платёж выдаётся фискальный чек. Продление ручное, автопродления нет: когда оплаченный период заканчивается, аккаунт возвращается на бесплатный тариф, а перед этим мы отправляем напоминание по почте. Если вашей компании нужен отдельный договор, запросите его по адресу legal@dicta.uz.",
      },
      privacy: {
        q: "Как обрабатываются наши данные?",
        a: "Мы не продаём ваши данные, не показываем рекламу и не обучаем AI-модели на ваших встречах. Записи хранятся в закрытом объектном хранилище и доступны только организатору. Для расшифровки и резюме нужны внешние AI-провайдеры, поэтому мы спрашиваем разрешение до того, как что-либо произойдёт; без согласия запись, расшифровка и AI-функции остаются выключенными. Данные и аккаунт можно удалить самостоятельно, а мы удаляем аккаунт, расшифровки и записи в течение 30 дней.",
      },
      apps: {
        q: "Какие приложения доступны?",
        a: "Dicta работает в браузере, как приложение для компьютера (macOS и Windows) и как мобильные приложения для iOS и Android.",
      },
      sales: {
        q: "Как связаться с отделом продаж?",
        a: "Воспользуйтесь формой на этом сайте: оставьте телефон или email, и наша команда свяжется с вами. Можно также написать на support@dicta.uz.",
      },
    },
  },
  contact: {
    eyebrow: "Контакты",
    headingPre: "Напишите нам,",
    headingAccent: "ответит живой человек.",
    sub: "Оставьте способ связи, и наша команда скоро ответит.",
    name: "Имя",
    phone: "Телефон",
    reachHint: "Достаточно телефона или email, как вам удобнее. Остальное по желанию.",
    email: "Email",
    company: "Компания",
    message: "Сообщение",
    optional: "необязательно",
    messagePlaceholder: "Для чего вы хотите использовать Dicta?",
    submit: "Отправить",
    sending: "Отправляем…",
    successTitle: "Спасибо, заявка получена.",
    successBody: "Наша команда скоро свяжется с вами.",
    errorInvalid: "Оставьте корректный телефон или email, чтобы мы могли связаться с вами.",
    errorGeneric: "Что-то пошло не так. Попробуйте ещё раз или напишите на support@dicta.uz.",
    note: "Мы используем эти данные, чтобы связаться с вами по вашей заявке.",
  },
  notFound: {
    title: "Страница не найдена",
    sub: "Такой страницы нет, или она переехала.",
    home: "На главную",
    download: "Скачать",
  },
  notetaker: { steps: { recording: "Recording" } },
  appBadges: {
    appStore: "Загрузить в App Store",
    googlePlay: "Доступно в Google Play",
    appStoreSuper: "Загрузите в",
    googlePlaySuper: "ДОСТУПНО В",
  },
  download: {
    title: "Установите Dicta",
    sub: "Dicta работает везде, где проходят ваши встречи — на телефоне, на компьютере и в браузере.",
    desktopHeading: "Для компьютера",
    desktopSub:
      "В фоновом режиме автоматически определяет ваши встречи и записывает их — бот не подключается к звонку.",
    mobileHeading: "Для телефона",
    mobileSub:
      "Записывайте очные встречи, читайте итоги в дороге и проводите круглые столы — когда пишут телефоны всех участников сразу. Круглый стол работает только в приложении.",
    mobileScan: "Отсканируйте, чтобы установить на телефон",
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
    privacyUpdated: "Последнее обновление: 26 октября 2026 г.",
    termsTitle: "Условия использования",
    termsUpdated: "Последнее обновление: 28 июля 2026 г.",
    offerTitle: "Публичная оферта",
    offerUpdated: "Последнее обновление: 28 июля 2026 г.",
    deleteAccountTitle: "Как удалить аккаунт Dicta",
    deleteAccountUpdated: "Последнее обновление: 27 июля 2026 г.",
    privacy: {
      intro:
        "Dicta («мы», «наш») управляет сервисом видеовстреч на dicta.uz. На этой странице описано, какие данные мы собираем, как мы их собираем, для чего используем и каким третьим лицам передаём.",
      dataCollect: {
        title: "Какие данные мы собираем",
        accountInfo: {
          label: "Данные аккаунта.",
          text: "Адрес электронной почты, полное имя и (при входе через Google) URL фотографии профиля Google. Собираются при создании аккаунта.",
        },
        meetings: {
          label: "Встречи.",
          text: "Названия встреч, участники, временные метки и короткие коды, которые вы создаёте. Собираются по мере использования сервиса.",
        },
        transcripts: {
          label: "Аудио и расшифровки.",
          text: "Когда транскрипция включена, приложение записывает аудио встречи и передаёт его перечисленным ниже AI-провайдерам, чтобы получить расшифровку, резюме, решения и задачи. Само аудио после обработки у нас не сохраняется, если не включена запись, — остаётся только итоговый текст.",
        },
        recordings: {
          label: "Записи.",
          text: "Когда организатор начинает запись, видео и аудио загружаются в наше приватное объектное хранилище и доступны только организатору. Мы не продаём и не публикуем записи.",
        },
        voiceprints: {
          label: "Голосовой отпечаток (по желанию).",
          text: "Если вы включите распознавание голоса, мы создадим из короткого образца математическое описание вашего голоса и сохраним его на наших серверах, чтобы автоматически подписывать вас в расшифровках. Это необязательно, запрашивается отдельно и может быть удалено в любой момент.",
        },
        location: {
          label: "Местоположение (по желанию).",
          text: "Если вы разрешите, офлайн-запись один раз, в момент старта, отмечается местом, где вы её сделали. Отказ оставит записи без метки и ни на что больше не повлияет.",
        },
        logs: {
          label: "Служебные логи и диагностика.",
          text: "IP-адрес, user agent, время запросов и отчёты о сбоях — для отладки и предотвращения злоупотреблений.",
        },
      },
      howCollected: {
        title: "Как мы их собираем",
        body: "Напрямую от вас, когда вы создаёте аккаунт или вводите данные в приложении; автоматически с вашего устройства, когда вы записываете или присоединяетесь к встрече (микрофон, а также камера и местоположение, если вы их включили); и с наших серверов по мере использования сервиса (логи и диагностика). Мы не покупаем персональные данные и не отслеживаем вас в приложениях и на сайтах других компаний.",
      },
      howWeUse: {
        title: "Как мы используем эти данные",
        body: "Для работы сервиса, создания расшифровок и AI-резюме, поддержки организаторов после встречи, обработки платежей и предотвращения злоупотреблений. Мы не продаём ваши данные, не показываем рекламу и не используем ваши встречи для обучения AI-моделей.",
      },
      ai: {
        title: "AI-обработка",
        body: "Чтобы превратить встречу в расшифровку и резюме, данные необходимо передать сторонним AI-провайдерам за пределами Dicta. Аудио вашей встречи передаётся для перевода речи в текст и определения, кто и когда говорил; полученная расшифровка, название встречи и имена участников передаются для создания резюме, решений и задач и для ответов на ваши вопросы в ИИ-чате.",
        consent:
          "Эта обработка происходит, только когда вы записываете, загружаете или расшифровываете встречу. Без этих функций вы по-прежнему можете входить, создавать встречи, присоединяться к ним и проводить аудио/видеозвонки — без какой-либо AI-обработки.",
      },
      thirdParties: {
        title: "Третьи лица, которым мы передаём данные",
        intro:
          "Мы передаём персональные данные только перечисленным ниже провайдерам, только для указанной цели и только для работы сервиса. С каждым заключён договор, обязывающий защищать ваши данные на уровне, эквивалентном этой политике, обрабатывать их исключительно по нашему поручению и не использовать их для обучения собственных моделей или в своих целях.",
        items: [
          {
            name: "AI-провайдеры",
            purpose:
              "Перевод речи в текст, разделение говорящих, обработка голосового отпечатка, резюме, решения, задачи, ответы в ИИ-чате и индексация для поиска. Получают аудио встречи, текст расшифровки, названия встреч, отображаемые имена участников и, если вы записали образец голоса, этот образец.",
          },
          {
            name: "Recall.ai",
            purpose:
              "Только если вы отправляете бота Dicta во внешний звонок Zoom, Google Meet или Microsoft Teams. Получает ссылку на эту встречу и возвращает её аудио, видео и имена участников. Обработка происходит в Европейском союзе.",
          },
          {
            name: "Google (Sign-In) и Apple (Sign in with Apple)",
            purpose: "Аутентификация, если вы выбираете эти способы входа.",
          },
          {
            name: "LiveKit",
            purpose:
              "Передача аудио и видео в реальном времени во время звонка. Работает на наших собственных серверах в Узбекистане.",
          },
          {
            name: "Cloudflare",
            purpose:
              "Шифрованное хранение записей, доставка контента и отправка сервисных писем.",
          },
          {
            name: "Sentry",
            purpose:
              "Диагностика сбоев и ошибок; может включать идентификатор вашего аккаунта и детали запроса.",
          },
          {
            name: "Firebase и Google Analytics",
            purpose:
              "Аналитика использования продукта. Её можно отключить в настройках; она никогда не используется для рекламы.",
          },
          {
            name: "Apple Push Notification service и Firebase Cloud Messaging",
            purpose: "Доставка push-уведомлений, которые могут содержать названия встреч.",
          },
          {
            name: "OpenStreetMap (Nominatim)",
            purpose:
              "Преобразование координат офлайн-записи в название места, если вы включили местоположение.",
          },
          {
            name: "Telegram",
            purpose:
              "Отправка вам резюме встреч, если вы привязали аккаунт Telegram.",
          },
          {
            name: "Multicard и RevenueCat",
            purpose: "Обработка платежей и подписок.",
          },
          {
            name: "Trello, Jira, ClickUp, Asana и Hisobot",
            purpose:
              "Только если вы их подключите. Получают название встречи, задачи, решения, фрагмент резюме и ссылку на итоги. Открыть эти итоги может любой, у кого есть ссылка, поэтому подключайте такие сервисы только к доскам, приемлемым для ваших участников.",
          },
        ],
      },
      retention: {
        title: "Сколько мы храним данные",
        body: "Данные аккаунта хранятся, пока существует аккаунт. Расшифровки, резюме и записи хранятся, пока вы их не удалите или не удалите аккаунт. Голосовые отпечатки хранятся, пока вы их не удалите или не отключите распознавание голоса. Служебные логи и диагностика хранятся до 90 дней. После удаления аккаунта мы удаляем аккаунт, расшифровки и записи в течение 30 дней.",
      },
      transfers: {
        title: "Где обрабатываются ваши данные",
        body: "Наши серверы встреч находятся в Узбекистане, в сети TAS-IX, и трафик живых звонков остаётся на них. Перечисленные выше AI-провайдеры обрабатывают данные за пределами Узбекистана — в своих регионах, Recall.ai — в Европейском союзе. Там, где данные покидают Узбекистан, мы полагаемся на договорные гарантии, эквивалентные этой политике.",
      },
      security: {
        title: "Безопасность",
        body: "Трафик шифруется при передаче. Записи хранятся в приватном объектном хранилище без публичного листинга и доступны только по временным подписанным ссылкам. Доступ к продакшн-системам имеют только сотрудники, которым он необходим. Идеально защищённых систем не бывает, поэтому мы также даём вам возможность удалить свои данные самостоятельно.",
      },
      children: {
        title: "Дети",
        body: "Dicta не предназначена для детей младше 13 лет, и мы сознательно не собираем их персональные данные. Если вы полагаете, что ребёнок передал нам данные, напишите нам, и мы их удалим.",
      },
      yourRights: {
        title: "Ваши права",
        bodyBefore: "Вы можете получить доступ к своим данным, исправить, экспортировать или удалить их, а также в любой момент отозвать согласие на AI-обработку. Удалить аккаунт можно, написав на ",
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
      payment: {
        title: "Оплата и подписка",
        body: "У Dicta есть бесплатный тариф и платные тарифы. Платные тарифы продаются в узбекских сумах (UZS) и оплачиваются онлайн — банковской картой или из узбекского электронного кошелька (Payme, Click, Uzum, Alif, Anorbank, Xazna) через шлюз Multicard. Мы не видим и не храним данные вашей карты. Платный тариф активируется сразу после подтверждения платежа и действует в течение оплаченного периода; ограничения тарифа — минуты, объём хранилища и срок хранения истории — применяются на этот период.",
      },
      renewal: {
        title: "Продление",
        body: "Продление производится только вручную. Мы не храним вашу карту и никогда не списываем средства автоматически — автопродления нет. По окончании оплаченного периода тариф просто прекращает действовать, и аккаунт возвращается на бесплатный. Отменять ничего не нужно. Чтобы продолжить, вы сами оплачиваете следующий период. Перед окончанием срока мы отправляем напоминание на вашу электронную почту.",
      },
      refunds: {
        title: "Возврат средств",
        bodyBefore:
          "Мы не возвращаем деньги за уже оказанную услугу, в том числе за неиспользованную часть периода, если вы прекращаете пользоваться Dicta раньше срока. Бесплатный тариф позволяет полноценно оценить сервис до оплаты. Возврат производится только при повторном или ошибочном списании, а также если тариф был оплачен, но так и не активирован. Порядок обращения описан в ",
        linkLabel: "Публичной оферте",
        bodyAfter: ".",
      },
      taxes: {
        title: "Налоги и чеки",
        body: "Цены указаны без НДС: ООО «NORLAS IT SOLUTIONS» является резидентом IT Park Республики Узбекистан и освобождено от налога на добавленную стоимость, поэтому НДС при оплате не добавляется. По каждому платежу через оператора фискальных данных формируется фискальный чек: он приходит на вашу электронную почту, а ссылка на него сохраняется в истории платежей в приложении.",
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
    offer: {
      intro:
        "Настоящий документ является публичной офертой ООО «NORLAS IT SOLUTIONS» (далее — «Продавец»), адресованной любому физическому или юридическому лицу (далее — «Покупатель»), заключить договор возмездного оказания услуг по предоставлению доступа к сервису Dicta на изложенных ниже условиях. Пожалуйста, прочитайте её полностью до оплаты: оплата означает согласие со всеми условиями настоящей оферты.",
      subject: {
        title: "1. Предмет оферты",
        body: "Продавец предоставляет Покупателю платный доступ к Dicta — онлайн-сервису для проведения встреч, их записи, расшифровки речи в текст и автоматической подготовки кратких изложений — в объёме выбранного тарифа и на оплаченный срок. Dicta предоставляется как услуга через интернет; экземпляр программы Покупателю не передаётся, исключительные права на неё не отчуждаются.",
        scope:
          "Доступ предоставляется к аккаунту Покупателя. Если Покупатель является юридическим лицом, доступ распространяется на пользователей, добавленных им в своё рабочее пространство, в пределах ограничений выбранного тарифа.",
      },
      acceptance: {
        title: "2. Акцепт оферты",
        body: "Оферта акцептуется оплатой. Выбор тарифа и его полная оплата являются полным и безоговорочным принятием условий настоящей оферты и признаются акцептом в значении Гражданского кодекса Республики Узбекистан.",
        effectBefore:
          "С момента поступления оплаты договор считается заключённым в письменной форме на условиях настоящей оферты и имеет силу документа, подписанного обеими сторонами. Отдельный договор на бумаге не требуется; если он необходим Покупателю, его можно запросить по адресу ",
        effectAfter: ".",
        version:
          "К платежу применяется та редакция оферты, которая опубликована на этой странице на момент совершения платежа.",
      },
      seller: {
        title: "3. Реквизиты Продавца",
        nameLabel: "Полное наименование:",
        nameValue:
          "Общество с ограниченной ответственностью «NORLAS IT SOLUTIONS»",
        stirLabel: "ИНН (СТИР):",
        stirValue: "312444263",
        addressLabel: "Юридический адрес:",
        addressValue: "махалля Янгидархон, ул. Навруз, д. 13, кв. 96, Республика Узбекистан",
        directorLabel: "Директор:",
        directorValue: "Бехруз Махмудов",
        siteLabel: "Сайт:",
        siteValue: "dicta.uz",
        supportLabel: "Поддержка:",
        legalLabel: "Юридические вопросы:",
      },
      service: {
        title: "4. Что входит в услугу",
        body: "Dicta — программное обеспечение, предоставляемое как услуга: в браузере по адресу meet.dicta.uz и в приложениях Dicta для macOS, Windows, iOS и Android. В пределах оплаченного тарифа сервис обеспечивает:",
        item1: "видеовстречи по ссылке, без установки чего-либо гостями;",
        item2: "запись встреч и хранение записей;",
        item3: "автоматическую расшифровку речи на узбекском, русском и английском языках;",
        item4: "краткие изложения, списки решений и задач, подготовленные ИИ на основе расшифровки;",
        item5: "поиск по прошедшим встречам, обмен результатами и экспорт в подключённые сервисы.",
        limits:
          "Конкретные ограничения — количество минут в месяц, объём хранилища, срок хранения истории и число участников рабочего пространства — определяются оплаченным тарифом.",
      },
      plans: {
        title: "5. Тарифы и цены",
        bodyBefore: "Действующие тарифы, их ограничения и стоимость опубликованы в разделе ",
        linkLabel: "«Цены»",
        bodyAfter:
          " и являются неотъемлемой частью настоящей оферты. Цена указывается за тариф и за расчётный период (месяц или год).",
        free: "У Dicta есть постоянно бесплатный тариф. Покупатель может полноценно оценить сервис до оплаты: карта не требуется ни для регистрации, ни для дальнейшего использования бесплатного тарифа.",
      },
      vat: {
        title: "6. Налог на добавленную стоимость",
        body: "Продавец является резидентом Технологического парка программных продуктов и информационных технологий (IT Park) Республики Узбекистан и освобождён от налога на добавленную стоимость. Все цены указаны без НДС; НДС к ним при оплате не добавляется.",
        certificate: "Свидетельство резидента IT Park: № 6513, внесено в Единый реестр резидентов Технопарка 17 июля 2026 года (решение № 14/24 от 17 июля 2026 года).",
      },
      payment: {
        title: "7. Способы оплаты и валюта",
        body: "Все расчёты производятся в национальной валюте Республики Узбекистан — узбекских сумах (UZS).",
        methods:
          "Оплата производится онлайн через платёжный шлюз Multicard: банковской картой либо из электронных кошельков Payme, Click, Uzum, Alif, Anorbank и Xazna.",
        noCard:
          "Продавец не получает, не обрабатывает и не хранит полный номер карты, срок её действия и CVV — эти данные вводятся на стороне платёжного шлюза и банка.",
        moment:
          "Обязанность по оплате считается исполненной в момент зачисления денежных средств на счёт Продавца и подтверждения успешного платежа платёжным шлюзом.",
      },
      activation: {
        title: "8. Момент предоставления доступа",
        body: "Оплаченный тариф активируется автоматически после подтверждения платежа платёжным шлюзом — как правило, в течение нескольких минут. Оплаченный период исчисляется с момента активации.",
        failureBefore:
          "Если денежные средства списаны, а тариф в аккаунте не появился, Покупателю следует написать на ",
        failureAfter:
          ", указав дату, сумму и чек платежа. Мы либо откроем доступ, либо вернём платёж.",
      },
      term: {
        title: "9. Срок подписки и продление",
        body: "Оплаченный тариф действует в течение оплаченного периода — месяц или год в соответствии с выбранным тарифом — начиная с момента активации.",
        manual:
          "Продление производится только вручную. Dicta не сохраняет карту Покупателя и никогда не списывает средства автоматически. Автопродления нет.",
        expiry:
          "По окончании оплаченного периода тариф просто прекращает действовать, и аккаунт возвращается на бесплатный тариф. Ничего отменять не нужно, уведомление об отказе от подписки направлять не требуется. Чтобы продолжить пользоваться платным тарифом, Покупатель самостоятельно оплачивает следующий период — тогда, когда сочтёт нужным.",
        reminder:
          "Перед окончанием оплаченного периода мы направляем напоминание на электронную почту, указанную в аккаунте, чтобы окончание срока не стало неожиданностью.",
      },
      refunds: {
        title: "10. Возврат денежных средств",
        body: "Денежные средства за фактически оказанную услугу не возвращаются. Доступ предоставляется на весь оплаченный период с момента оплаты, а бесплатный тариф позволяет полноценно оценить сервис до какой-либо оплаты.",
        earlyStop:
          "Если Покупатель прекращает пользоваться Dicta до окончания оплаченного периода или удаляет аккаунт, неиспользованная часть периода не возвращается и не переносится.",
        exceptionsIntro: "Возврат производится только в двух случаях:",
        exception1:
          "повторное или ошибочное списание — один и тот же платёж списан дважды либо списана сумма, не соответствующая стоимости выбранного тарифа;",
        exception2:
          "услуга оплачена, но не оказана — оплаченный тариф не был активирован и активировать его не удалось.",
        howBefore: "Заявление на возврат направляется на ",
        howAfter:
          " с указанием даты, суммы и чека платежа. При обоснованности требования денежные средства возвращаются через тот же платёжный шлюз на карту или кошелёк, с которых был совершён платёж; срок зачисления зависит от банка-эмитента.",
        consumer:
          "Настоящий раздел не ограничивает права, предоставленные физическим лицам законодательством Республики Узбекистан о защите прав потребителей.",
      },
      receipt: {
        title: "11. Фискальный чек",
        body: "По каждому платежу через оператора фискальных данных (ОФД) формируется фискальный чек, как того требует законодательство Республики Узбекистан.",
        delivery:
          "Чек направляется на электронную почту, указанную в аккаунте Покупателя, а ссылка на него сохраняется в истории платежей в приложении. Чек является документом, подтверждающим оплату.",
        missingBefore: "Если чек не пришёл, проверьте папку «Спам», а затем напишите на ",
        missingAfter: " — мы направим его повторно.",
      },
      customerObligations: {
        title: "12. Обязанности Покупателя",
        intro: "Покупатель обязуется:",
        item1: "предоставить достоверные регистрационные данные и действующий адрес электронной почты и поддерживать их в актуальном состоянии — на этот адрес направляются чек, напоминания и служебные уведомления;",
        item2: "хранить данные для входа в тайне и не передавать доступ третьим лицам;",
        item3: "использовать Dicta в соответствии с Условиями использования и законодательством Республики Узбекистан;",
        item4: "получать согласие всех участников встречи на запись и расшифровку, когда этого требует закон;",
        item5: "не перепродавать, не сублицензировать и иным образом не предоставлять доступ к оплаченному тарифу лицам за пределами своего рабочего пространства;",
        item6: "оплачивать выбранный тариф в размере и способом, установленными настоящей офертой.",
      },
      sellerObligations: {
        title: "13. Обязанности Продавца",
        intro: "Продавец обязуется:",
        item1: "предоставлять доступ к оплаченному тарифу в течение всего оплаченного периода;",
        item2: "поддерживать работоспособность сервиса и принимать разумные технические меры для его доступности и безопасности;",
        item3: "формировать и направлять фискальный чек по каждому платежу;",
        item4: "обрабатывать персональные данные в соответствии с Политикой конфиденциальности;",
        item5: "оказывать поддержку по вопросам, входящим в выбранный тариф, по контактам, указанным в разделе 3.",
        availability:
          "Продавец не гарантирует бесперебойную и безошибочную работу сервиса. Доступ может быть временно приостановлен для технического обслуживания, работ по безопасности, обновлений или по причинам нагрузки, а также по независящим от Продавца причинам — сбои каналов связи, оборудования Покупателя или сторонних сервисов. Кратковременные перерывы такого рода не считаются неоказанием услуги и не являются основанием для возврата денежных средств.",
      },
      liability: {
        title: "14. Ограничение ответственности",
        body: "Сервис предоставляется «как есть». В максимальной степени, разрешённой законом, Продавец не несёт ответственности за косвенные, случайные или сопутствующие убытки, упущенную выгоду и утрату данных, возникшие в связи с использованием или невозможностью использования сервиса.",
        ai: "Расшифровки, краткие изложения, списки решений и задач формируются автоматически моделями машинного обучения и могут содержать неточности. Они являются вспомогательным материалом, а не юридически значимым документом. Покупатель обязан проверять их, прежде чем полагаться на них при принятии решений, в учёте или в отношениях с третьими лицами.",
        cap: "В любом случае совокупная ответственность Продавца ограничивается суммой, фактически уплаченной Покупателем за тот оплаченный период, в котором произошло событие, послужившее основанием ответственности.",
        force:
          "Стороны не несут ответственности за неисполнение обязательств, вызванное обстоятельствами непреодолимой силы, включая акты государственных органов, стихийные бедствия, военные действия, массовые сбои связи или электроснабжения.",
      },
      personalData: {
        title: "15. Персональные данные",
        bodyBefore:
          "Персональные данные обрабатываются в соответствии с законодательством Республики Узбекистан о персональных данных и ",
        linkLabel: "Политикой конфиденциальности",
        bodyAfter:
          ", в которой описано, какие данные собираются, для чего, как долго хранятся и как Покупатель может удалить аккаунт и свои данные. Акцепт настоящей оферты одновременно означает согласие на обработку персональных данных на указанных условиях.",
      },
      termination: {
        title: "16. Срок действия договора и его прекращение",
        body: "Договор вступает в силу с момента акцепта оферты (оплаты) и действует до окончания оплаченного периода либо до полного исполнения сторонами своих обязательств.",
        customer:
          "Покупатель вправе в любой момент прекратить пользование Dicta и удалить аккаунт непосредственно в приложении. Удаление аккаунта прекращает действие договора; неиспользованная часть оплаченного периода не возвращается.",
        seller:
          "Продавец вправе приостановить или прекратить доступ при нарушении Условий использования или законодательства Республики Узбекистан, в том числе при использовании сервиса в противоправных целях либо при действиях, нарушающих его работу.",
      },
      amendments: {
        title: "17. Изменение оферты",
        body: "Продавец вправе в одностороннем порядке изменять настоящую оферту и цены. Новая редакция вступает в силу с момента её опубликования на этой странице с обновлением даты.",
        priceLock:
          "Изменение цены не распространяется на уже оплаченный период: оплаченный тариф продолжает действовать на условиях и по цене, действовавшим на момент оплаты. Продолжение использования сервиса после опубликования изменений, равно как и последующая оплата, означают согласие с новой редакцией.",
      },
      law: {
        title: "18. Применимое право и разрешение споров",
        body: "К настоящей оферте и к отношениям, возникающим на её основании, применяется право Республики Узбекистан.",
        claimsBefore:
          "Стороны стремятся разрешать споры путём переговоров. Письменная претензия направляется на ",
        claimsAfter: " и рассматривается в срок, установленный законодательством.",
        court:
          "Если согласие не достигнуто, спор передаётся на рассмотрение компетентный экономический суд по месту регистрации Продавца и разрешается в соответствии с законодательством Республики Узбекистан.",
        languages:
          "Настоящая оферта опубликована на узбекском, русском и английском языках. При расхождении текстов преимущественную силу имеет текст на узбекском языке.",
      },
    },
  },
};

const uz: typeof en = {
  common: { login: "Kirish" },
  nav: {
    privacy: "Maxfiylik",
    terms: "Foydalanish shartlari",
    offer: "Oferta",
    deleteAccount: "Hisobni oʻchirish",
    download: "Yuklab olish",
    downloadWin: "Windows uchun yuklab olish",
    faq: "FAQ",
    contact: "Aloqa",
  },
  landing: {
    footerRights: "Barcha huquqlar himoyalangan.",
    developedBy: "Ishlab chiquvchi",
  },
  home: {
    startFree: "Bepul boshlash",
    hero: {
      eyebrow: "Yozib oladi, matnga oʻgiradi, xulosa qiladi",
      titlePre: "Xulosani oʻzi yozadigan",
      titleAccent: "uchrashuvlar.",
      sub: "Dicta qoʻngʻiroqlar va jonli uchrashuvlarni yozib oladi, oʻzbek, rus va ingliz tilida matnga oʻgiradi va qoʻngʻiroqdan bir necha daqiqa oʻtib qarorlar va vazifalarni qoʻlingizga beradi.",
      ctaSecondary: "Sotuv boʻlimi bilan bogʻlanish",
      note: "Bepul tarif, karta shart emas. Bir daqiqada tayyor.",
      shotAlt: "Dicta’dagi uchrashuv xulosasi: asosiy qarorlar va vazifalar",
      liveLabel: "Jonli transkripsiya",
      live: [
        {
          who: "Dilnoza",
          text: "Ombor ochilishini 15-sanaga koʻchiramiz.",
        },
        {
          who: "Rustam",
          text: "Unda shartnomalarni jumagacha imzolatib qoʻyaman.",
        },
        {
          who: "Dilnoza",
          text: "Kelishdik. Aziz, mijozga xabar berasizmi?",
        },
      ],
    },
    customers: {
      eyebrow: "Dicta bilan kimlar yozib boradi",
      businessTag: "Biznes",
      premierLead: "Premier barcha onlayn va oflayn uchrashuvlarini Dicta bilan yozib boradi.",
      premierLink: "premier.uz saytiga oʻtish",
      peopleTag: "Jismoniy shaxslar",
      peopleLeadPre: "Kuni uchrashuvlarda oʻtadigan insonlar ham: ",
      roles: ["rahbarlar", "asoschilar", "HR jamoalar", "oʻqituvchilar", "frilanserlar", "sotuvchilar"],
      and: "va",
      peopleLeadPost: ".",
      usesLabel: "Dicta bilan nimalar yoziladi",
      uses: ["Jamoa yigʻilishlari", "Mijozlar bilan qoʻngʻiroqlar", "Suhbatlar", "Maʼruzalar", "Shaxsiy qaydlar", "Oflayn uchrashuvlar"],
    },
    stats: {
      eyebrow: "Hozirgacha",
      pre: "Dicta ",
      hours: "soatlik",
      sep1: " suhbatni qaydlarga aylantirdi: bu ",
      meetings: "ta uchrashuv",
      sep2: " va ",
      users: "ta foydalanuvchi",
      post: ".",
      updated: "{date} holatiga",
      footnote: "Taxmin emas, Dicta maʼlumotlar bazasidan hisoblangan.",
    },
    features: {
      titlePre: "Birinchi soʻzdan",
      titleAccent: "oxirgi vazifagacha.",
      sub: "Har bir uchrashuv bir xil uch bosqichdan oʻtadi va ularning hech biri sizdan harakat talab qilmaydi.",
      capture: {
        kicker: "Yozib olish",
        title: "Uchrashuv qayerda boʻlmasin",
        body: "Qoʻngʻiroqni Dicta’da oʻtkazing, Zoom, Google Meet yoki Teams’ga bot yuboring, xonadagi uchrashuvni telefonda yozib oling yoki faylni yuklang.",
        points: ["Mehmonlar havola orqali kiradi, akkaunt va oʻrnatish shart emas", "Ulgurmagan qoʻngʻiroqlaringizga bot qoʻshiladi", "Desktop ilova qoʻngʻiroqni botsiz yozib oladi"],
        alt: "Dicta’dagi uchrashuvlar roʻyxati: Dicta, Zoom va Google Meet yozuvlari",
      },
      transcript: {
        kicker: "Transkripsiya",
        title: "Har bir soʻz va uni kim aytgani",
        body: "Oʻzbek, rus va ingliz tilida aniq transkripsiya, hatto suhbatdoshlar gap orasida tilni almashtirsa ham. Istalgan soʻzni qidiring va yozuvning aynan shu joyiga oʻting.",
        points: ["Soʻzlovchilar avtomatik belgilanadi", "Vaqt belgili, qidiriladigan matn", "Yozuv va matn yonma-yon"],
        alt: "Dicta’dagi oʻzbekcha transkripsiya: soʻzlovchilar ismi va vaqt belgilari",
      },
      summary: {
        kicker: "Natija",
        title: "Qoʻngʻiroqdan bir necha daqiqa oʻtib qarorlar va vazifalar",
        body: "Ikki daqiqada oʻqiladigan AI xulosa: nima hal qilindi va kim nima qiladi. Vazifalar bitta roʻyxatga tushadi va siz ishlatadigan vositalar bilan ishlaydi.",
        points: ["Asosiy qarorlar va mavzular", "Masʼuli belgilangan vazifalar", "Jira, Trello, Asana va ClickUp bilan ishlaydi"],
        alt: "Dicta’da uchrashuvlardan yaratilgan vazifalar, har birining masʼuli bor",
      },
      apps: {
        kicker: "Qayerda ishlasangiz ham",
        title: "Brauzerda, kompyuterda va choʻntagingizda",
        body: "Veb, macOS va Windows, iOS va Android. Bittasida yozib oling, boshqasida oʻqing.",
        desktop: "Kompyuter uchun yuklab olish",
        alt: "Dicta mobil ilovasida uchrashuv xulosasi",
      },
    },
    finalCta: {
      titlePre: "Keyingi uchrashuvingiz",
      titleAccent: "xulosani oʻzi yozadi.",
      sub: "Bugun bepul tarifdan boshlang. Karta, oʻrnatish va qoʻngʻiroq vaqtiga cheklov yoʻq.",
      secondary: "Ilovalarni yuklab olish",
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
    vatNote: "Narxlarga QQS solinmaydi — sotuvchi IT Park rezidenti.",
  },
  faq: {
    eyebrow: "FAQ",
    headingPre: "Savollar",
    headingAccent: "va javoblar.",
    sub: "Jamoalar va rahbarlar Dictani uchrashuvlariga ulashdan oldin nimalarni soʻraydi.",
    allLabel: "Barcha savollar",
    pageTitle: "Koʻp beriladigan savollar",
    pageSub: "Dicta onlayn va oflayn uchrashuvlarda qanday ishlaydi, narxi qancha va maʼlumotlaringiz bilan qanday ishlanadi.",
    moreLabels: {
      pricing: "Narxlarni koʻrish",
      privacy: "Maxfiylik siyosatini oʻqish",
      download: "Ilovalarni yuklab olish",
      contact: "Biz bilan bogʻlanish",
    },
    q: {
      what: {
        q: "Dicta nima?",
        a: "Dicta — uchrashuvlar uchun yagona platforma. Siz qoʻngʻiroqni oʻtkazasiz, Dicta esa uni yozib oladi, transkripsiya qiladi va xulosa yozadi: qarorlar, vazifalar va mavzular. Mehmonlar havola orqali qoʻshiladi — mehmon akkauntlarisiz va oʻrnatishsiz.",
      },
      rooms: {
        q: "Dicta onlayn ham, oflayn uchrashuvlar uchun ham ishlaydimi?",
        a: "Ha. Onlayn qoʻngʻiroqlarni Dictaning oʻzida oʻtkazish yoki Zoom, Google Meet va Microsoft Teams'da yozib olish mumkin. Yuzma-yuz uchrashuvlar uchun mobil ilovada bitta tugmani bosing — Dicta uchrashuvni yozib oladi va turli soʻzlovchilarni avtomatik ajratadi.",
      },
      bot: {
        q: "Dicta Zoom, Google Meet yoki Teams qoʻngʻiroqlariga qoʻshila oladimi?",
        a: "Ha. Oʻzingiz oʻrniga Dicta botini yuboring. U Zoom, Google Meet va Microsoft Teams uchrashuvlariga qoʻshiladi, siz esa qatnasha olmagan boʻlsangiz ham toʻliq transkripsiya va AI xulosani olasiz.",
      },
      desktop: {
        q: "Qoʻngʻiroqda koʻrinib turadigan botsiz yozib olish mumkinmi?",
        a: "Ha. Dicta kompyuter ilovasi qoʻngʻiroqqa qoʻshilganingizni oʻzi aniqlab, siz uchun yozib boradi — uchrashuvda bot yoʻq. Yakunida yozuv va AI xulosa sizda. Qonun talab qiladigan hollarda yozib olish uchun barcha ishtirokchilarning roziligi kerak va uni olish sizning zimmangizda.",
      },
      languages: {
        q: "Dicta qaysi tillarni qoʻllab-quvvatlaydi?",
        a: "Dicta uchrashuvlarni istalgan tilda yuqori aniqlikda transkripsiya qiladi, jumladan oʻzbek, rus va ingliz tillarida, va har bir kishining soʻzlarini toʻgʻri soʻzlovchiga biriktiradi.",
      },
      speakers: {
        q: "Dicta kim nima degani aniqlay oladimi?",
        a: "Ha. Har bir kishining soʻzlari toʻgʻri soʻzlovchiga biriktiriladi. Mobil ilovada Dicta jonli uchrashuvdagi turli soʻzlovchilarni ajratadi va ovozidan kim gapirayotganini aniqlay oladi. Ovozni tanish ixtiyoriy: u alohida soʻraladi va ovoz izingizni istalgan vaqt oʻchirib tashlash mumkin.",
      },
      summary: {
        q: "Uchrashuvdan keyin nima olamiz?",
        a: "Qarorlar, vazifalar va mavzularning toʻliq AI xulosasi (uni oʻqish taxminan 2 daqiqa oladi) hamda matn orqali qidirib, yozuvning kerakli lahzasiga oʻtish mumkin boʻlgan transkripsiya. Vazifalar avtomatik yaratilib, toʻgʻri kishiga biriktiriladi va Jira, Trello, Asana, ClickUp yoki oʻzingizning vazifalar platformangiz bilan ishlaydi.",
      },
      limits: {
        q: "Bepul daqiqalar va limitlar qanday ishlaydi?",
        a: "Har bir jamoa Free rejadan boshlaydi: oyiga {free} daqiqa, karta shart emas. Pullik rejalar limitni oshiradi: {paid}. Rejalar xotira hajmini va tarix qancha saqlanishini ham belgilaydi. Koʻproq daqiqa kerakmi? Bir martalik daqiqa paketlari hech qachon eskirmaydi.",
      },
      limitsNoCatalog:
        "Har bir reja bepul boshlanadi, karta shart emas. Pullik rejalar oylik daqiqalar, xotira va tarixni oshiradi. Koʻproq daqiqa kerakmi? Bir martalik daqiqa paketlari hech qachon eskirmaydi.",
      pay: {
        q: "Qanday toʻlanadi va obuna avtomatik yangilanadimi?",
        a: "Pullik rejalar onlayn, oʻzbek soʻmida (UZS), bank kartasi yoki oʻzbek elektron hamyoni (Payme, Click, Uzum, Alif, Anorbank, Xazna) orqali Multicard shlyuzi bilan toʻlanadi. Dicta karta maʼlumotlaringizni koʻrmaydi va saqlamaydi, har bir toʻlov uchun fiskal chek beriladi. Yangilash qoʻlda, avtomatik yangilanish yoʻq: toʻlangan davr tugagach hisob bepul rejaga qaytadi, bundan oldin esa pochtaga eslatma yuboramiz. Kompaniyangizga alohida shartnoma kerak boʻlsa, uni legal@dicta.uz manzilidan soʻrang.",
      },
      privacy: {
        q: "Maʼlumotlarimiz bilan qanday ishlanadi?",
        a: "Biz maʼlumotlaringizni sotmaymiz, reklama koʻrsatmaymiz va uchrashuvlaringiz asosida AI modellarni oʻqitmaymiz. Yozuvlar yopiq obyekt omborida saqlanadi va faqat tashkilotchiga ochiq. Transkripsiya va xulosa uchun AI xizmat koʻrsatuvchilari kerak, shuning uchun bularning birortasi sodir boʻlishidan oldin ruxsatingizni soʻraymiz; rozilik boʻlmasa, yozib olish, transkripsiya va AI funksiyalari oʻchiq qoladi. Maʼlumotlaringiz va hisobingizni oʻzingiz oʻchirishingiz mumkin, biz hisob, transkripsiya va yozuvlarni 30 kun ichida olib tashlaymiz.",
      },
      apps: {
        q: "Qanday ilovalar mavjud?",
        a: "Dicta brauzerda, macOS va Windows uchun kompyuter ilovasi sifatida hamda iOS va Android uchun mobil ilovalar sifatida ishlaydi.",
      },
      sales: {
        q: "Sotuv boʻlimi bilan qanday bogʻlanaman?",
        a: "Shu saytdagi aloqa formasidan foydalaning: telefon raqamingiz yoki emailingizni qoldiring, jamoamiz siz bilan bogʻlanadi. Shuningdek, support@dicta.uz manziliga yozishingiz mumkin.",
      },
    },
  },
  contact: {
    eyebrow: "Aloqa",
    headingPre: "Bizga yozing,",
    headingAccent: "jonli inson javob beradi.",
    sub: "Siz bilan qanday bogʻlanishni qoldiring, jamoamiz tez orada javob beradi.",
    name: "Ism",
    phone: "Telefon",
    reachHint: "Telefon yoki email kifoya, qaysi biri qulay boʻlsa. Qolgani ixtiyoriy.",
    email: "Email",
    company: "Kompaniya",
    message: "Xabar",
    optional: "ixtiyoriy",
    messagePlaceholder: "Dictadan nima uchun foydalanmoqchisiz?",
    submit: "Yuborish",
    sending: "Yuborilmoqda…",
    successTitle: "Rahmat, soʻrovingiz qabul qilindi.",
    successBody: "Jamoamiz tez orada siz bilan bogʻlanadi.",
    errorInvalid: "Siz bilan bogʻlanishimiz uchun toʻgʻri telefon yoki email qoldiring.",
    errorGeneric: "Xatolik yuz berdi. Qayta urinib koʻring yoki support@dicta.uz manziliga yozing.",
    note: "Bu maʼlumotlardan soʻrovingiz yuzasidan siz bilan bogʻlanish uchun foydalanamiz.",
  },
  notFound: {
    title: "Sahifa topilmadi",
    sub: "Bunday sahifa mavjud emas yoki koʻchirilgan.",
    home: "Bosh sahifaga",
    download: "Yuklab olish",
  },
  notetaker: { steps: { recording: "Recording" } },
  appBadges: {
    appStore: "App Store’dan yuklab olish",
    googlePlay: "Google Play’dan olish",
    appStoreSuper: "Yuklab oling",
    googlePlaySuper: "YUKLAB OLING",
  },
  download: {
    title: "Dictani oʻrnating",
    sub: "Dicta uchrashuvlaringiz qayerda boʻlsa — telefoningizda, kompyuteringizda va brauzerda ishlaydi.",
    desktopHeading: "Kompyuter uchun",
    desktopSub:
      "Fon rejimida uchrashuvlaringizni avtomatik aniqlaydi va yozib oladi — qoʻngʻiroqqa hech qanday bot qoʻshilmaydi.",
    mobileHeading: "Telefon uchun",
    mobileSub:
      "Yuzma-yuz uchrashuvlarni yozib oling, xulosalarni yoʻlda oʻqing va davra suhbatlarini oʻtkazing — bunda hamma qatnashchining telefoni bir vaqtda yozadi. Davra suhbati faqat ilovada ishlaydi.",
    mobileScan: "Telefoningizga oʻrnatish uchun skanerlang",
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
    privacyUpdated: "Oxirgi yangilangan: 2026-yil 26-oktabr",
    termsTitle: "Foydalanish shartlari",
    termsUpdated: "Oxirgi yangilangan: 2026-yil 28-iyul",
    offerTitle: "Ommaviy oferta",
    offerUpdated: "Oxirgi yangilangan: 2026-yil 28-iyul",
    deleteAccountTitle: "Dicta hisobini qanday oʻchirish mumkin",
    deleteAccountUpdated: "Oxirgi yangilangan: 2026-yil 27-iyul",
    privacy: {
      intro:
        "«Dicta» («biz», «bizning») dicta.uz manzilidagi videouchrashuvlar xizmatini boshqaradi. Ushbu sahifada qanday maʼlumotlarni toʻplashimiz, ularni qanday yigʻishimiz, nima uchun ishlatishimiz va qaysi uchinchi tomonlarga uzatishimiz tushuntirilgan.",
      dataCollect: {
        title: "Toʻplaydigan maʼlumotlar",
        accountInfo: {
          label: "Akkaunt maʼlumotlari.",
          text: "Elektron pochta manzili, toʻliq ism va (Google orqali kirganda) Google profil rasmining URL manzili. Akkaunt yaratilganda toʻplanadi.",
        },
        meetings: {
          label: "Uchrashuvlar.",
          text: "Uchrashuv nomlari, ishtirokchilar, vaqt belgilari va siz yaratgan qisqa kodlar. Xizmatdan foydalanish davomida toʻplanadi.",
        },
        transcripts: {
          label: "Audio va transkriptlar.",
          text: "Transkripsiya yoqilganda ilova uchrashuv audiosini yozib oladi va transkript, xulosa, qarorlar va vazifalar tayyorlash uchun uni quyida sanab oʻtilgan AI provayderlariga yuboradi. Yozib olish yoqilmagan boʻlsa, audioning oʻzi qayta ishlangandan soʻng bizda saqlanmaydi — faqat yakuniy matn qoladi.",
        },
        recordings: {
          label: "Yozuvlar.",
          text: "Mezbon yozuvni boshlaganida video va audio bizning shaxsiy obyekt xotiramizga yuklanadi va faqat mezbonga ochiq boʻladi. Biz yozuvlarni sotmaymiz va eʼlon qilmaymiz.",
        },
        voiceprints: {
          label: "Ovoz izi (ixtiyoriy).",
          text: "Ovozni tanishni yoqsangiz, qisqa namunadan ovozingizning matematik tavsifini yaratamiz va transkriptlarda sizni avtomatik belgilash uchun uni oʻz serverlarimizda saqlaymiz. Bu ixtiyoriy, alohida soʻraladi va istalgan vaqtda oʻchirilishi mumkin.",
        },
        location: {
          label: "Joylashuv (ixtiyoriy).",
          text: "Ruxsat bersangiz, oflayn yozuv boshlangan paytda bir marta siz uni qayerda yozganingiz bilan belgilanadi. Rad etsangiz, yozuvlar belgisiz qoladi va boshqa hech narsa oʻzgarmaydi.",
        },
        logs: {
          label: "Texnik jurnallar va diagnostika.",
          text: "Nosozliklarni bartaraf etish va suiisteʼmolning oldini olish uchun IP manzil, foydalanuvchi agenti, soʻrov vaqti va nosozlik hisobotlari.",
        },
      },
      howCollected: {
        title: "Ularni qanday yigʻamiz",
        body: "Bevosita sizdan — akkaunt yaratganingizda yoki ilovaga maʼlumot kiritganingizda; qurilmangizdan avtomatik — uchrashuvni yozganingizda yoki unga qoʻshilganingizda (mikrofon, shuningdek yoqsangiz, kamera va joylashuv); va serverlarimizdan — xizmatdan foydalanish davomida (jurnallar va diagnostika). Biz shaxsiy maʼlumotlarni sotib olmaymiz va sizni boshqa kompaniyalarning ilovalari va saytlarida kuzatmaymiz.",
      },
      howWeUse: {
        title: "Maʼlumotlardan qanday foydalanamiz",
        body: "Xizmatni ishlatish, transkript va AI xulosalarini tayyorlash, uchrashuvdan keyin mezbonlarni qoʻllab-quvvatlash, toʻlovlarni qayta ishlash va suiisteʼmolning oldini olish uchun. Biz maʼlumotlaringizni sotmaymiz, reklama koʻrsatmaymiz va uchrashuvlaringizdan AI modellarini oʻqitishda foydalanmaymiz.",
      },
      ai: {
        title: "AI qayta ishlash",
        body: "Uchrashuvni transkript va xulosaga aylantirish uchun maʼlumotlarni Dictadan tashqaridagi uchinchi tomon AI provayderlariga yuborish zarur. Uchrashuv audiosi nutqni matnga aylantirish va kim qachon gapirganini aniqlash uchun yuboriladi; hosil boʻlgan transkript, uchrashuv nomi va ishtirokchilar ismlari xulosa, qaror va vazifalar yaratish hamda AI chatdagi savollaringizga javob berish uchun yuboriladi.",
        consent:
          "Bu qayta ishlash faqat siz uchrashuvni yozib olganingizda, yuklaganingizda yoki transkripsiya qilganingizda amalga oshadi. Bu funksiyalarsiz ham tizimga kirish, uchrashuv yaratish, unga qoʻshilish va audio/video qoʻngʻiroqlar qilish mumkin — hech qanday AI qayta ishlashsiz.",
      },
      thirdParties: {
        title: "Maʼlumot uzatiladigan uchinchi tomonlar",
        intro:
          "Biz shaxsiy maʼlumotlarni faqat quyidagi provayderlarga, faqat koʻrsatilgan maqsadda va faqat xizmatni taqdim etish uchun uzatamiz. Ularning har biri shartnoma bilan maʼlumotlaringizni ushbu siyosatga teng darajada himoya qilishga, ularni faqat bizning koʻrsatmamiz boʻyicha qayta ishlashga hamda oʻz modellarini oʻqitish yoki oʻz maqsadlarida foydalanmaslikka majbur.",
        items: [
          {
            name: "AI provayderlari",
            purpose:
              "Nutqni matnga aylantirish, soʻzlovchilarni ajratish, ovoz izini qayta ishlash, xulosalar, qarorlar, vazifalar, AI chat javoblari va qidiruv indeksatsiyasi. Uchrashuv audiosi, transkript matni, uchrashuv nomlari, ishtirokchilarning koʻrsatiladigan ismlari va, ovozingizni roʻyxatdan oʻtkazsangiz, ovoz namunasini oladi.",
          },
          {
            name: "Recall.ai",
            purpose:
              "Faqat Dicta botini tashqi Zoom, Google Meet yoki Microsoft Teams qoʻngʻirogʻiga yuborsangiz. Oʻsha uchrashuv havolasini oladi va uning audiosi, videosi hamda ishtirokchilar ismlarini qaytaradi. Yevropa Ittifoqida qayta ishlanadi.",
          },
          {
            name: "Google (Sign-In) va Apple (Sign in with Apple)",
            purpose: "Ushbu kirish usullarini tanlasangiz — autentifikatsiya.",
          },
          {
            name: "LiveKit",
            purpose:
              "Qoʻngʻiroq davomida real vaqtda audio va video uzatish. Oʻzbekistondagi oʻz serverlarimizda ishlaydi.",
          },
          {
            name: "Cloudflare",
            purpose:
              "Yozuvlarni shifrlangan holda saqlash, kontent yetkazib berish va xizmat xatlarini yuborish.",
          },
          {
            name: "Sentry",
            purpose:
              "Nosozlik va xatoliklar diagnostikasi; akkaunt identifikatoringiz va soʻrov tafsilotlarini oʻz ichiga olishi mumkin.",
          },
          {
            name: "Firebase va Google Analytics",
            purpose:
              "Mahsulotdan foydalanish tahlili. Uni sozlamalarda oʻchirish mumkin; hech qachon reklama uchun ishlatilmaydi.",
          },
          {
            name: "Apple Push Notification service va Firebase Cloud Messaging",
            purpose: "Push-bildirishnomalarni yetkazish; ular uchrashuv nomlarini oʻz ichiga olishi mumkin.",
          },
          {
            name: "OpenStreetMap (Nominatim)",
            purpose:
              "Joylashuvni yoqqan boʻlsangiz, oflayn yozuv koordinatalarini joy nomiga aylantirish.",
          },
          {
            name: "Telegram",
            purpose:
              "Telegram akkauntingizni bogʻlagan boʻlsangiz, sizga uchrashuv xulosalarini yuborish.",
          },
          {
            name: "Multicard va RevenueCat",
            purpose: "Toʻlovlar va obunalarni qayta ishlash.",
          },
          {
            name: "Trello, Jira, ClickUp, Asana va Hisobot",
            purpose:
              "Faqat siz ularni ulasangiz. Uchrashuv nomi, vazifalar, qarorlar, xulosa parchasi va yakun havolasini oladi. Bu havolaga ega har qanday kishi yakunni ocha oladi, shuning uchun bunday xizmatlarni faqat ishtirokchilaringiz roziligiga mos doskalarga ulang.",
          },
        ],
      },
      retention: {
        title: "Maʼlumotlarni qancha saqlaymiz",
        body: "Akkaunt maʼlumotlari akkaunt mavjud boʻlgunicha saqlanadi. Transkriptlar, xulosalar va yozuvlar siz ularni yoki akkauntingizni oʻchirmaguningizcha saqlanadi. Ovoz izlari siz ularni oʻchirmaguningizcha yoki ovozni tanishni oʻchirmaguningizcha saqlanadi. Texnik jurnallar va diagnostika 90 kungacha saqlanadi. Akkauntni oʻchirganingizdan soʻng hisobingizni, transkriptlaringizni va yozuvlaringizni 30 kun ichida oʻchiramiz.",
      },
      transfers: {
        title: "Maʼlumotlaringiz qayerda qayta ishlanadi",
        body: "Uchrashuv serverlarimiz Oʻzbekistonda, TAS-IX tarmogʻida joylashgan va jonli qoʻngʻiroq trafigi shu yerda qoladi. Yuqorida sanab oʻtilgan AI provayderlari maʼlumotlarni Oʻzbekistondan tashqarida — oʻz mintaqalarida, Recall.ai esa Yevropa Ittifoqida qayta ishlaydi. Maʼlumot Oʻzbekistondan chiqqan hollarda biz ushbu siyosatga teng shartnomaviy kafolatlarga tayanamiz.",
      },
      security: {
        title: "Xavfsizlik",
        body: "Trafik uzatish vaqtida shifrlanadi. Yozuvlar ommaviy roʻyxatga olinmaydigan shaxsiy obyekt xotirasida saqlanadi va faqat qisqa muddatli imzolangan havolalar orqali ochiladi. Ishlab chiqarish tizimlariga faqat zarur xodimlar kira oladi. Mutlaqo xavfsiz tizim boʻlmaydi, shuning uchun sizga maʼlumotlaringizni mustaqil oʻchirish imkonini ham beramiz.",
      },
      children: {
        title: "Bolalar",
        body: "Dicta 13 yoshgacha boʻlgan bolalar uchun moʻljallanmagan va biz ularning shaxsiy maʼlumotlarini bila turib toʻplamaymiz. Agar bola bizga maʼlumot bergan deb hisoblasangiz, bizga yozing — biz uni oʻchiramiz.",
      },
      yourRights: {
        title: "Sizning huquqlaringiz",
        bodyBefore: "Maʼlumotlaringizni koʻrish, tuzatish, eksport qilish yoki oʻchirish, shuningdek AI qayta ishlashga rozilikni istalgan vaqtda qaytarib olish mumkin. Hisobingizni quyidagi manzilga xat yozib oʻchirishingiz mumkin: ",
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
      payment: {
        title: "Toʻlov va obuna",
        body: "Dicta-da bepul tarif va pullik tariflar mavjud. Pullik tariflar oʻzbek soʻmida (UZS) sotiladi va onlayn toʻlanadi — bank kartasi bilan yoki oʻzbek elektron hamyonlaridan (Payme, Click, Uzum, Alif, Anorbank, Xazna) Multicard shlyuzi orqali. Biz karta maʼlumotlaringizni koʻrmaymiz va saqlamaymiz. Pullik tarif toʻlov tasdiqlangan zahoti faollashadi va siz toʻlagan muddat davomida amal qiladi; tarif cheklovlari — daqiqalar, xotira va tarix — oʻsha muddatga tatbiq etiladi.",
      },
      renewal: {
        title: "Uzaytirish",
        body: "Uzaytirish faqat qoʻlda amalga oshiriladi. Biz kartangizni saqlamaymiz va hech qachon avtomatik pul yechmaymiz — avtomatik uzaytirish yoʻq. Toʻlangan muddat tugagach, tarif shunchaki amal qilishdan toʻxtaydi va hisobingiz bepul tarifga qaytadi. Bekor qiladigan narsa yoʻq. Davom ettirish uchun keyingi muddatni oʻzingiz toʻlaysiz. Muddat tugashidan oldin elektron pochtangizga eslatma yuboramiz.",
      },
      refunds: {
        title: "Pulni qaytarish",
        bodyBefore:
          "Amalda koʻrsatilgan xizmat uchun toʻlangan pulni qaytarmaymiz — shu jumladan Dicta-dan muddatidan oldin voz kechsangiz, muddatning ishlatilmagan qismini ham. Bepul tarif toʻlovdan oldin xizmatni toʻliq baholash imkonini beradi. Pul faqat takroriy yoki xato yechib olinganda hamda tarif toʻlangan boʻlsa-yu faollashtirilmagan boʻlsa qaytariladi. Murojaat tartibi ",
        linkLabel: "Ommaviy ofertada",
        bodyAfter: " keltirilgan.",
      },
      taxes: {
        title: "Soliqlar va cheklar",
        body: "Narxlar QQSsiz koʻrsatilgan: «NORLAS IT SOLUTIONS» MChJ Oʻzbekiston Respublikasi IT Park rezidenti boʻlib, qoʻshilgan qiymat soligʻidan ozod, shu sababli toʻlovda QQS qoʻshilmaydi. Har bir toʻlov boʻyicha fiskal maʼlumotlar operatori orqali fiskal chek shakllantiriladi: u elektron pochtangizga yuboriladi, unga havola esa ilovadagi toʻlovlar tarixida saqlanadi.",
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
    offer: {
      intro:
        "Ushbu hujjat «NORLAS IT SOLUTIONS» masʼuliyati cheklangan jamiyatining (keyingi oʻrinlarda — «Sotuvchi») har qanday jismoniy yoki yuridik shaxsga (keyingi oʻrinlarda — «Xaridor») qaratilgan ommaviy ofertasi boʻlib, quyidagi shartlar asosida Dicta xizmatidan pullik foydalanish boʻyicha shartnoma tuzishni taklif etadi. Iltimos, toʻlovdan oldin uni toʻliq oʻqib chiqing: toʻlov ushbu ofertaning barcha shartlariga rozilik bildirish demakdir.",
      subject: {
        title: "1. Ofertaning predmeti",
        body: "Sotuvchi Xaridorga Dicta xizmatidan — uchrashuvlar oʻtkazish, ularni yozib olish, nutqni matnga aylantirish va sunʼiy intellekt yordamida qisqa xulosalar tayyorlash uchun moʻljallangan onlayn xizmatdan — tanlangan tarif doirasida va toʻlangan muddat davomida pullik foydalanish imkonini beradi. Dicta internet orqali xizmat sifatida taqdim etiladi; dasturning nusxasi Xaridorga topshirilmaydi va unga boʻlgan mutlaq huquqlar oʻtkazilmaydi.",
        scope:
          "Foydalanish huquqi Xaridorning hisobiga beriladi. Agar Xaridor yuridik shaxs boʻlsa, bu huquq u oʻz ish maydoniga qoʻshgan foydalanuvchilarga — tanlangan tarif cheklovlari doirasida — tatbiq etiladi.",
      },
      acceptance: {
        title: "2. Ofertani qabul qilish (aksept)",
        body: "Oferta toʻlov orqali qabul qilinadi. Tarifni tanlash va uni toʻliq toʻlash ushbu oferta shartlarini toʻliq va soʻzsiz qabul qilish hisoblanadi hamda Oʻzbekiston Respublikasi Fuqarolik kodeksi maʼnosidagi aksept deb eʼtirof etiladi.",
        effectBefore:
          "Toʻlov kelib tushgan paytdan boshlab shartnoma ushbu oferta shartlarida yozma shaklda tuzilgan hisoblanadi va ikkala tomon imzolagan hujjat kuchiga ega boʻladi. Alohida qogʻoz shartnoma talab etilmaydi; agar u Xaridorga zarur boʻlsa, quyidagi manzil orqali soʻrash mumkin: ",
        effectAfter: ".",
        version:
          "Toʻlovga ushbu sahifada toʻlov amalga oshirilgan paytda eʼlon qilingan tahrir qoʻllaniladi.",
      },
      seller: {
        title: "3. Sotuvchining rekvizitlari",
        nameLabel: "Toʻliq nomi:",
        nameValue: "«NORLAS IT SOLUTIONS» masʼuliyati cheklangan jamiyati",
        stirLabel: "STIR:",
        stirValue: "312444263",
        addressLabel: "Yuridik manzil:",
        addressValue: "Yangidarxon MFY, Navroʻz koʻchasi, 13-uy, 96-xonadon, Oʻzbekiston Respublikasi",
        directorLabel: "Direktor:",
        directorValue: "Behruz Mahmudov",
        siteLabel: "Sayt:",
        siteValue: "dicta.uz",
        supportLabel: "Qoʻllab-quvvatlash:",
        legalLabel: "Yuridik masalalar:",
      },
      service: {
        title: "4. Xizmat tarkibiga nimalar kiradi",
        body: "Dicta — xizmat sifatida taqdim etiladigan dasturiy taʼminot: brauzerda meet.dicta.uz manzilida hamda macOS, Windows, iOS va Android uchun Dicta ilovalarida. Toʻlangan tarif doirasida xizmat quyidagilarni taʼminlaydi:",
        item1: "havola orqali videouchrashuvlar — mehmonlar hech narsa oʻrnatmasdan qoʻshiladi;",
        item2: "uchrashuvlarni yozib olish va yozuvlarni saqlash;",
        item3: "nutqni oʻzbek, rus va ingliz tillarida avtomatik transkripsiya qilish;",
        item4: "transkripsiya asosida sunʼiy intellekt tayyorlagan qisqa xulosalar, qarorlar va vazifalar roʻyxati;",
        item5: "oʻtgan uchrashuvlar boʻyicha qidiruv, natijalarni ulashish va ulangan xizmatlarga eksport qilish.",
        limits:
          "Aniq cheklovlar — oyiga necha daqiqa, xotira hajmi, tarix saqlanish muddati va ish maydoni aʼzolari soni — toʻlangan tarif bilan belgilanadi.",
      },
      plans: {
        title: "5. Tariflar va narxlar",
        bodyBefore: "Amaldagi tariflar, ularning cheklovlari va narxlari ",
        linkLabel: "«Narxlar» boʻlimida",
        bodyAfter:
          " eʼlon qilinadi va ushbu ofertaning ajralmas qismi hisoblanadi. Narx har bir tarif va hisob-kitob davri (oy yoki yil) uchun koʻrsatiladi.",
        free: "Dicta-da doimiy bepul tarif ham bor. Xaridor toʻlovdan oldin xizmatni toʻliq sinab koʻrishi mumkin: roʻyxatdan oʻtish uchun ham, bepul tarifdan foydalanishda davom etish uchun ham karta talab qilinmaydi.",
      },
      vat: {
        title: "6. Qoʻshilgan qiymat soligʻi",
        body: "Sotuvchi Oʻzbekiston Respublikasi Dasturiy mahsulotlar va axborot texnologiyalari texnoparki (IT Park) rezidenti boʻlib, qoʻshilgan qiymat soligʻidan ozod qilingan. Barcha narxlar QQSsiz koʻrsatilgan; toʻlov paytida ularga QQS qoʻshilmaydi.",
        certificate: "IT Park rezidenti guvohnomasi: № 6513, Texnopark rezidentlarining Yagona reestriga 2026-yil 17-iyulda kiritilgan (2026-yil 17-iyuldagi 14/24-son qaror).",
      },
      payment: {
        title: "7. Toʻlov usullari va valyuta",
        body: "Barcha hisob-kitoblar Oʻzbekiston Respublikasining milliy valyutasida — oʻzbek soʻmida (UZS) amalga oshiriladi.",
        methods:
          "Toʻlov Multicard toʻlov shlyuzi orqali onlayn amalga oshiriladi: bank kartasi bilan yoki Payme, Click, Uzum, Alif, Anorbank va Xazna elektron hamyonlaridan.",
        noCard:
          "Sotuvchi karta raqamini, uning amal qilish muddatini va CVV kodini olmaydi, qayta ishlamaydi va saqlamaydi — bu maʼlumotlar toʻlov shlyuzi va bank tomonida kiritiladi.",
        moment:
          "Toʻlov majburiyati mablagʻ Sotuvchining hisobiga tushgan va toʻlov shlyuzi toʻlovni muvaffaqiyatli deb tasdiqlagan paytda bajarilgan hisoblanadi.",
      },
      activation: {
        title: "8. Foydalanish qachon ochiladi",
        body: "Toʻlangan tarif toʻlov shlyuzi toʻlovni tasdiqlagach avtomatik faollashadi — odatda bir necha daqiqa ichida. Toʻlangan muddat faollashtirilgan paytdan boshlab hisoblanadi.",
        failureBefore:
          "Agar mablagʻ yechib olingan boʻlsa-yu, tarif hisobda paydo boʻlmasa, Xaridor quyidagi manzilga yozishi lozim: ",
        failureAfter:
          " — toʻlov sanasi, summasi va chekini koʻrsatgan holda. Biz yo foydalanishni ochamiz, yo toʻlovni qaytaramiz.",
      },
      term: {
        title: "9. Obuna muddati va uni uzaytirish",
        body: "Toʻlangan tarif toʻlangan muddat davomida — tanlangan tarifga koʻra bir oy yoki bir yil — faollashtirilgan paytdan boshlab amal qiladi.",
        manual:
          "Uzaytirish faqat qoʻlda amalga oshiriladi. Dicta Xaridorning kartasini saqlamaydi va hech qachon avtomatik pul yechmaydi. Avtomatik uzaytirish yoʻq.",
        expiry:
          "Toʻlangan muddat tugagach, tarif shunchaki amal qilishdan toʻxtaydi va hisob bepul tarifga qaytadi. Hech narsani bekor qilish shart emas, obunadan voz kechish haqida xabar berish ham talab etilmaydi. Pullik tarifdan foydalanishni davom ettirish uchun Xaridor keyingi muddatni oʻzi — istagan paytda — toʻlaydi.",
        reminder:
          "Toʻlangan muddat tugashidan oldin hisobda koʻrsatilgan elektron pochtaga eslatma yuboramiz, toki muddatning tugashi kutilmagan hol boʻlmasin.",
      },
      refunds: {
        title: "10. Pul mablagʻlarini qaytarish",
        body: "Amalda koʻrsatilgan xizmat uchun toʻlangan pul qaytarilmaydi. Foydalanish huquqi toʻlov paytidan boshlab butun toʻlangan muddatga beriladi, bepul tarif esa har qanday toʻlovdan oldin xizmatni toʻliq baholash imkonini beradi.",
        earlyStop:
          "Agar Xaridor toʻlangan muddat tugashidan oldin Dicta-dan foydalanishni toʻxtatsa yoki hisobini oʻchirsa, muddatning ishlatilmagan qismi qaytarilmaydi va keyingi muddatga oʻtkazilmaydi.",
        exceptionsIntro: "Pul faqat ikki holatda qaytariladi:",
        exception1:
          "takroriy yoki xato yechib olish — bitta toʻlov ikki marta yechilgan yoki tanlangan tarif narxiga mos kelmaydigan summa yechilgan boʻlsa;",
        exception2:
          "xizmat toʻlangan, ammo koʻrsatilmagan — toʻlangan tarif faollashtirilmagan va uni faollashtirishning iloji boʻlmagan boʻlsa.",
        howBefore: "Pulni qaytarish boʻyicha ariza quyidagi manzilga yuboriladi: ",
        howAfter:
          " — toʻlov sanasi, summasi va cheki koʻrsatilgan holda. Talab asosli boʻlsa, mablagʻ oʻsha toʻlov shlyuzi orqali toʻlov amalga oshirilgan kartaga yoki hamyonga qaytariladi; qachon tushishi kartani chiqargan bankka bogʻliq.",
        consumer:
          "Ushbu boʻlim Oʻzbekiston Respublikasining isteʼmolchilar huquqlarini himoya qilish toʻgʻrisidagi qonunchiligi jismoniy shaxslarga bergan huquqlarni cheklamaydi.",
      },
      receipt: {
        title: "11. Fiskal chek",
        body: "Har bir toʻlov boʻyicha Oʻzbekiston Respublikasi qonunchiligi talabiga muvofiq fiskal maʼlumotlar operatori (OFD) orqali fiskal chek shakllantiriladi.",
        delivery:
          "Chek Xaridorning hisobida koʻrsatilgan elektron pochtaga yuboriladi, unga havola esa ilovadagi toʻlovlar tarixida saqlanadi. Chek toʻlovni tasdiqlovchi hujjat hisoblanadi.",
        missingBefore: "Agar chek kelmasa, «Spam» papkasini tekshiring va soʻng quyidagi manzilga yozing: ",
        missingAfter: " — biz uni qayta yuboramiz.",
      },
      customerObligations: {
        title: "12. Xaridorning majburiyatlari",
        intro: "Xaridor quyidagilarni oʻz zimmasiga oladi:",
        item1: "roʻyxatdan oʻtishda haqiqiy maʼlumotlarni va ishlaydigan elektron pochta manzilini koʻrsatish hamda ularni dolzarb holatda saqlash — chek, eslatmalar va xizmat bildirishnomalari shu manzilga yuboriladi;",
        item2: "hisobga kirish maʼlumotlarini sir saqlash va foydalanish huquqini uchinchi shaxslarga bermaslik;",
        item3: "Dicta-dan Foydalanish shartlari va Oʻzbekiston Respublikasi qonunchiligiga muvofiq foydalanish;",
        item4: "qonun talab qilgan hollarda uchrashuvning barcha ishtirokchilaridan yozib olish va transkripsiya qilishga rozilik olish;",
        item5: "toʻlangan tarifdan foydalanish huquqini oʻz ish maydonidan tashqaridagi shaxslarga qayta sotmaslik, sublitsenziya bermaslik va boshqa yoʻl bilan taqdim etmaslik;",
        item6: "tanlangan tarifni ushbu ofertada belgilangan miqdorda va usulda toʻlash.",
      },
      sellerObligations: {
        title: "13. Sotuvchining majburiyatlari",
        intro: "Sotuvchi quyidagilarni oʻz zimmasiga oladi:",
        item1: "toʻlangan tarifdan foydalanishni butun toʻlangan muddat davomida taʼminlash;",
        item2: "xizmatning ishlashini qoʻllab-quvvatlash hamda uning ochiqligi va xavfsizligi uchun oqilona texnik choralar koʻrish;",
        item3: "har bir toʻlov boʻyicha fiskal chek shakllantirish va yuborish;",
        item4: "shaxsiy maʼlumotlarni Maxfiylik siyosatiga muvofiq qayta ishlash;",
        item5: "tanlangan tarifga kiradigan masalalar boʻyicha 3-boʻlimda koʻrsatilgan manzillar orqali qoʻllab-quvvatlash koʻrsatish.",
        availability:
          "Sotuvchi xizmatning uzluksiz va xatosiz ishlashini kafolatlamaydi. Foydalanish texnik xizmat koʻrsatish, xavfsizlik ishlari, yangilanishlar yoki yuklama sabablari boʻyicha, shuningdek Sotuvchiga bogʻliq boʻlmagan sabablarga koʻra — aloqa kanallari, Xaridor uskunasi yoki uchinchi tomon xizmatlaridagi uzilishlar tufayli — vaqtincha toʻxtatilishi mumkin. Bunday qisqa muddatli uzilishlar xizmat koʻrsatilmagani hisoblanmaydi va pulni qaytarish uchun asos boʻlmaydi.",
      },
      liability: {
        title: "14. Javobgarlikning cheklanishi",
        body: "Xizmat «boricha» taqdim etiladi. Qonun ruxsat bergan maksimal darajada Sotuvchi xizmatdan foydalanish yoki undan foydalana olmaslik bilan bogʻliq bilvosita, tasodifiy yoki ergashuvchi zararlar, boy berilgan foyda va maʼlumotlarning yoʻqolishi uchun javobgar emas.",
        ai: "Transkriptlar, qisqa xulosalar, qarorlar va vazifalar roʻyxati mashinali oʻrganish modellari tomonidan avtomatik shakllantiriladi va noaniqliklarni oʻz ichiga olishi mumkin. Ular yordamchi material boʻlib, yuridik ahamiyatga ega hujjat emas. Xaridor ularga qaror qabul qilishda, hisob-kitobda yoki uchinchi shaxslar bilan munosabatlarda tayanishdan oldin tekshirib chiqishi shart.",
        cap: "Har qanday holatda Sotuvchining umumiy javobgarligi javobgarlikka asos boʻlgan voqea sodir boʻlgan toʻlangan muddat uchun Xaridor tomonidan haqiqatda toʻlangan summa bilan cheklanadi.",
        force:
          "Tomonlar yengib boʻlmas kuch holatlari — davlat organlarining hujjatlari, tabiiy ofatlar, harbiy harakatlar, aloqa yoki elektr taʼminotidagi ommaviy uzilishlar — tufayli majburiyatlar bajarilmagani uchun javobgar boʻlmaydi.",
      },
      personalData: {
        title: "15. Shaxsiy maʼlumotlar",
        bodyBefore:
          "Shaxsiy maʼlumotlar Oʻzbekiston Respublikasining shaxsga doir maʼlumotlar toʻgʻrisidagi qonunchiligiga hamda ",
        linkLabel: "Maxfiylik siyosatiga",
        bodyAfter:
          " muvofiq qayta ishlanadi; unda qanday maʼlumotlar va nima uchun toʻplanishi, qancha saqlanishi hamda Xaridor hisobini va maʼlumotlarini qanday oʻchirishi mumkinligi tushuntirilgan. Ushbu ofertani qabul qilish ayni paytda shaxsiy maʼlumotlarni koʻrsatilgan shartlarda qayta ishlashga rozilik berishni anglatadi.",
      },
      termination: {
        title: "16. Shartnomaning amal qilish muddati va bekor qilinishi",
        body: "Shartnoma oferta qabul qilingan (toʻlov amalga oshirilgan) paytdan kuchga kiradi va toʻlangan muddat tugagunga qadar yoxud tomonlar oʻz majburiyatlarini toʻliq bajargunga qadar amal qiladi.",
        customer:
          "Xaridor istalgan paytda Dicta-dan foydalanishni toʻxtatishi va hisobini bevosita ilovada oʻchirishi mumkin. Hisobning oʻchirilishi shartnomani bekor qiladi; toʻlangan muddatning ishlatilmagan qismi qaytarilmaydi.",
        seller:
          "Sotuvchi Foydalanish shartlari yoki Oʻzbekiston Respublikasi qonunchiligi buzilganda, jumladan xizmatdan noqonuniy maqsadlarda foydalanilganda yoki uning ishini buzuvchi harakatlar sodir etilganda, foydalanishni toʻxtatib qoʻyishi yoki bekor qilishi mumkin.",
      },
      amendments: {
        title: "17. Ofertaga oʻzgartirish kiritish",
        body: "Sotuvchi ushbu ofertaga va narxlarga bir tomonlama tartibda oʻzgartirish kiritishga haqli. Yangi tahrir ushbu sahifada eʼlon qilingan va sanasi yangilangan paytdan kuchga kiradi.",
        priceLock:
          "Narxning oʻzgarishi allaqachon toʻlangan muddatga tatbiq etilmaydi: toʻlangan tarif toʻlov paytida amalda boʻlgan shartlar va narx boʻyicha davom etadi. Oʻzgarishlar eʼlon qilingandan keyin xizmatdan foydalanishda davom etish, shuningdek keyingi toʻlov yangi tahrirga rozilik bildirish hisoblanadi.",
      },
      law: {
        title: "18. Qoʻllaniladigan huquq va nizolarni hal etish",
        body: "Ushbu ofertaga va uning asosida yuzaga keladigan munosabatlarga Oʻzbekiston Respublikasining huquqi qoʻllaniladi.",
        claimsBefore:
          "Tomonlar nizolarni muzokaralar yoʻli bilan hal etishga intiladi. Yozma daʼvo ",
        claimsAfter:
          " manziliga yuboriladi va qonunchilikda belgilangan muddatda koʻrib chiqiladi.",
        court:
          "Kelishuvga erishilmagan taqdirda nizo Oʻzbekiston Respublikasi qonunchiligiga muvofiq Sotuvchining roʻyxatdan oʻtgan manzili boʻyicha vakolatli iqtisodiy sud tomonidan koʻrib chiqiladi.",
        languages:
          "Ushbu oferta oʻzbek, rus va ingliz tillarida eʼlon qilingan. Matnlar oʻrtasida tafovut boʻlsa, oʻzbek tilidagi matn ustuvor hisoblanadi.",
      },
    },
  },
};

// Arabic (ar) — right-to-left. Generated from the `en` block above and
// then reviewed: structure, keys and every `${…}` interpolation are
// preserved by construction. Typed `typeof en`, so the compiler enforces
// completeness. Terminology follows the shared glossary used by the app,
// iOS, Android and desktop tables.
const ar: typeof en = {
  common: { login: "تسجيل الدخول" },
  nav: {
    privacy: "الخصوصية",
    terms: "الشروط",
    offer: "العرض",
    deleteAccount: "حذف الحساب",
    download: "تنزيل",
    downloadWin: "التنزيل لـ Windows",
    faq: "الأسئلة الشائعة",
    contact: "تواصل",
  },
  landing: {
    footerRights: "جميع الحقوق محفوظة.",
    developedBy: "تطوير",
  },
  home: {
    startFree: "ابدأ مجانًا",
    hero: {
      eyebrow: "يسجّل ويفرّغ ويلخّص",
      titlePre: "اجتماعات تكتب",
      titleAccent: "محاضرها بنفسها.",
      sub: "تسجّل Dicta مكالماتك واجتماعاتك الحضورية، وتفرّغها نصيًّا، وتسلّمك القرارات والمهام بعد دقائق من انتهاء المكالمة.",
      ctaSecondary: "تواصل مع المبيعات",
      note: "خطة مجانية، بلا بطاقة. جاهز في أقل من دقيقة.",
      shotAlt: "ملخّص اجتماع في Dicta مع القرارات الرئيسية والمهام",
      liveLabel: "تفريغ مباشر",
      live: [
        {
          who: "ليلى",
          text: "لنؤجّل افتتاح المستودع إلى يوم 15.",
        },
        {
          who: "عمر",
          text: "إذن سأنهي توقيع العقود قبل الجمعة.",
        },
        {
          who: "ليلى",
          text: "اتفقنا. سامي، هل تُبلغ العميل؟",
        },
      ],
    },
    customers: {
      eyebrow: "من يسجّل اجتماعاته مع Dicta",
      businessTag: "الشركات",
      premierLead: "تسجّل Premier جميع اجتماعاتها عبر الإنترنت والحضورية مع Dicta.",
      premierLink: "زيارة premier.uz",
      peopleTag: "الأفراد",
      peopleLeadPre: "وأشخاص يقضون يومهم في الاجتماعات: ",
      roles: ["المديرون", "المؤسسون", "فرق الموارد البشرية", "المعلّمون", "المستقلّون", "مندوبو المبيعات"],
      and: "و",
      peopleLeadPost: ".",
      usesLabel: "ما يسجّله الناس مع Dicta",
      uses: ["اجتماعات الفريق", "مكالمات العملاء", "المقابلات", "المحاضرات", "الملاحظات الشخصية", "الاجتماعات الحضورية"],
    },
    stats: {
      eyebrow: "حتى الآن",
      pre: "حوّلت Dicta ",
      hours: "ساعة",
      sep1: " من المحادثات إلى ملاحظات، في ",
      meetings: "اجتماعًا",
      sep2: " لـ ",
      users: "شخصًا",
      post: ".",
      updated: "حتى {date}",
      footnote: "محسوبة من قاعدة بيانات Dicta، وليست تقديرًا.",
    },
    features: {
      titlePre: "من الكلمة الأولى",
      titleAccent: "إلى آخر مهمة.",
      sub: "يمرّ كل اجتماع بالخطوات الثلاث نفسها، ولا تحتاج أيٌّ منها إلى تدخّلك.",
      capture: {
        kicker: "التسجيل",
        title: "أينما كان الاجتماع",
        body: "استضف المكالمة في Dicta، أو أرسل روبوتًا إلى Zoom أو Google Meet أو Teams، أو سجّل الغرفة بهاتفك، أو ارفع ملفًا.",
        points: ["ينضم الضيوف برابط، دون حساب أو تثبيت", "ينضم الروبوت إلى المكالمات التي لا تستطيع حضورها", "تطبيق سطح المكتب يسجّل دون روبوت في المكالمة"],
        alt: "قائمة الاجتماعات في Dicta مع تسجيلات من Dicta وZoom وGoogle Meet",
      },
      transcript: {
        kicker: "التفريغ",
        title: "كل كلمة، ومن قالها",
        body: "تفريغ نصي دقيق بأي لغة، حتى عندما ينتقل المتحدثون بين اللغات في منتصف الجملة. ابحث عن أي كلمة وانتقل إلى تلك اللحظة من التسجيل.",
        points: ["تمييز المتحدثين تلقائيًا", "نص قابل للبحث مع طوابع زمنية", "التسجيل والنص جنبًا إلى جنب"],
        alt: "تفريغ نصي لاجتماع في Dicta مع أسماء المتحدثين والطوابع الزمنية",
      },
      summary: {
        kicker: "النتيجة",
        title: "القرارات والمهام بعد دقائق من المكالمة",
        body: "ملخّص بالذكاء الاصطناعي تقرؤه في دقيقتين: ما الذي تقرّر ومن يفعل ماذا. تُجمع المهام في قائمة واحدة وتعمل مع الأدوات التي تستخدمها.",
        points: ["القرارات والمواضيع الرئيسية", "مهام لكلٍّ منها مسؤول", "يعمل مع Jira وTrello وAsana وClickUp"],
        alt: "مهام أنشأتها Dicta من الاجتماعات، لكلٍّ منها مسؤول",
      },
      apps: {
        kicker: "أينما تعمل",
        title: "في المتصفح، وعلى حاسوبك، وفي جيبك",
        body: "الويب وmacOS وWindows وiOS وAndroid. سجّل على جهاز واقرأ الملاحظات على آخر.",
        desktop: "تنزيل لسطح المكتب",
        alt: "تطبيق Dicta للهاتف يعرض ملخّص اجتماع",
      },
    },
    finalCta: {
      titlePre: "اجتماعك القادم",
      titleAccent: "سيدوّن ملاحظاته بنفسه.",
      sub: "ابدأ بالخطة المجانية اليوم. بلا بطاقة، وبلا تثبيت، وبلا حدّ زمني للمكالمات.",
      secondary: "تنزيل التطبيقات",
    },
  },
  pricing: {
    navLabel: "الأسعار",
    eyebrow: "الأسعار",
    headingPre: "ابدأ مجانًا.",
    headingAccent: "لا تُرقِّ إلا إن احتجت.",
    sub: "كل فريق يعمل ضمن باقة مجانية سخية. وانتقل إلى باقة مدفوعة عندما تريد دقائق وتخزينًا وسجلًا أكثر.",
    currencyLabel: "العملة",
    currencyUzs: "سوم",
    currencyUsd: "دولار أمريكي",
    uzsUnit: "سوم",
    freeWord: "مجانية",
    minutes: "{min} دقيقة شهريًا",
    bulletStorage: "{gb} غيغابايت تخزين",
    bulletRetentionForever: "الاحتفاظ بالسجل إلى الأبد",
    bulletRetentionDays: "سجل لمدة {days} يومًا",
    support: {
      community: "دعم المجتمع",
      standard: "دعم قياسي",
      priority: "دعم ذو أولوية",
    },
    popular: "الأكثر رواجًا",
    cta: "ابدأ مجانًا",
    packsLine: "تحتاج المزيد؟ باقات دقائق لمرة واحدة ابتداءً من {price}، ولا تنتهي صلاحيتها.",
    reassurance: "كل باقة تبدأ مجانًا. ولا حاجة إلى بطاقة.",
    vatNote: "الأسعار معفاة من ضريبة القيمة المضافة، فالبائع مقيم في IT Park.",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    headingPre: "أسئلة",
    headingAccent: "وأجوبتها.",
    sub: "ما تسأل عنه الفرق والمديرون قبل أن يعتمدوا Dicta في اجتماعاتهم.",
    allLabel: "عرض كل الأسئلة",
    pageTitle: "الأسئلة الشائعة",
    pageSub: "كيف تعمل Dicta في الاجتماعات عبر الإنترنت والحضورية، وكم تكلّف، وكيف تُعالَج بياناتك.",
    moreLabels: {
      pricing: "عرض الأسعار",
      privacy: "قراءة سياسة الخصوصية",
      download: "تنزيل التطبيقات",
      contact: "تواصل معنا",
    },
    q: {
      what: {
        q: "ما هي Dicta؟",
        a: "Dicta منصة اجتماعات متكاملة. تستضيف أنت المكالمة وتتولى Dicta تسجيلها وتفريغها نصيًا وكتابة الملخص: القرارات والمهام والمواضيع. ينضم الضيوف عبر رابط، بلا حسابات للضيوف وبلا تثبيت.",
      },
      rooms: {
        q: "هل تعمل Dicta في الاجتماعات عبر الإنترنت والحضورية معًا؟",
        a: "نعم. يمكن إجراء المكالمات عبر الإنترنت في Dicta نفسها أو تسجيلها في Zoom وGoogle Meet وMicrosoft Teams. وللاجتماعات وجهًا لوجه، اضغط زرًّا واحدًا في تطبيق الجوال فتسجّل Dicta الاجتماع وتميّز المتحدثين المختلفين تلقائيًا.",
      },
      bot: {
        q: "هل تستطيع Dicta الانضمام إلى مكالمات Zoom وGoogle Meet وTeams؟",
        a: "نعم. أرسل روبوت Dicta نيابةً عنك. ينضم إلى اجتماعات Zoom وGoogle Meet وMicrosoft Teams، وتحصل مع ذلك على التفريغ النصي الكامل وملخص الذكاء الاصطناعي حتى إن لم تتمكن من الحضور.",
      },
      desktop: {
        q: "هل يمكن التسجيل دون روبوت ظاهر في المكالمة؟",
        a: "نعم. يكتشف تطبيق Dicta لسطح المكتب انضمامك إلى مكالمة ويسجّلها لك، دون أي روبوت في الاجتماع. وفي النهاية تحصل على التسجيل وملخص الذكاء الاصطناعي. يتطلب التسجيل موافقة جميع المشاركين حيث يشترط القانون ذلك، وأنت المسؤول عن الحصول عليها.",
      },
      languages: {
        q: "ما اللغات التي تدعمها Dicta؟",
        a: "تفرّغ Dicta الاجتماعات نصيًا بأي لغة وبدقة عالية، ومنها الأوزبكية والروسية والإنجليزية، وتنسب كلام كل شخص إلى المتحدث الصحيح.",
      },
      speakers: {
        q: "هل تستطيع Dicta معرفة من قال ماذا؟",
        a: "نعم. يُنسب كلام كل شخص إلى المتحدث الصحيح. وفي تطبيق الجوال تميّز Dicta بين المتحدثين في الاجتماع الحضوري ويمكنها تحديد من يتكلم من صوته. التعرّف على الصوت اختياري: يُطلب بشكل منفصل ويمكن حذف بصمتك الصوتية في أي وقت.",
      },
      summary: {
        q: "ماذا نحصل عليه بعد الاجتماع؟",
        a: "ملخص كامل بالذكاء الاصطناعي للقرارات والمهام والمواضيع تقرؤه في نحو دقيقتين، ونص تفريغ يمكنك البحث فيه للانتقال إلى اللحظة المطلوبة من التسجيل. تُنشأ المهام تلقائيًا وتُسند إلى الشخص المناسب، وتعمل مع Jira وTrello وAsana وClickUp أو منصة المهام الخاصة بك.",
      },
      limits: {
        q: "كيف تعمل الدقائق المجانية والحدود؟",
        a: "يبدأ كل فريق بالباقة المجانية Free: {free} دقيقة شهريًا دون الحاجة إلى بطاقة. وترفع الباقات المدفوعة الحد: {paid}. كما تحدد الباقات مساحة التخزين ومدة الاحتفاظ بالسجل. تحتاج دقائق أكثر؟ باقات الدقائق لمرة واحدة لا تنتهي صلاحيتها.",
      },
      limitsNoCatalog:
        "كل باقة تبدأ مجانًا دون الحاجة إلى بطاقة. وترفع الباقات المدفوعة الدقائق الشهرية والتخزين والسجل. تحتاج دقائق أكثر؟ باقات الدقائق لمرة واحدة لا تنتهي صلاحيتها.",
      pay: {
        q: "كيف ندفع، وهل يتجدد الاشتراك تلقائيًا؟",
        a: "تُدفع الباقات المدفوعة عبر الإنترنت. التجديد يدوي ولا يوجد تجديد تلقائي: عندما تنتهي الفترة المدفوعة يعود الحساب إلى الباقة المجانية، ونرسل تذكيرًا بالبريد الإلكتروني قبل ذلك.",
      },
      privacy: {
        q: "كيف تُعالَج بياناتنا؟",
        a: "لا نبيع بياناتك ولا نعرض إعلانات ولا نستخدم اجتماعاتك لتدريب نماذج الذكاء الاصطناعي. تُحفظ التسجيلات في مخزن كائنات خاص ولا يصل إليها سوى المضيف. يتطلب إنتاج النص والملخص مزوّدي معالجة بالذكاء الاصطناعي، لذا نطلب إذنك قبل حدوث أي شيء من ذلك؛ وبدون الموافقة تبقى ميزات التسجيل والتفريغ والذكاء الاصطناعي متوقفة. يمكنك حذف بياناتك وحسابك بنفسك، ونزيل حسابك ونصوصك وتسجيلاتك خلال 30 يومًا.",
      },
      apps: {
        q: "ما التطبيقات المتاحة؟",
        a: "تعمل Dicta في المتصفح، وكتطبيق لسطح المكتب على macOS وWindows، وكتطبيقات جوال على iOS وAndroid.",
      },
      sales: {
        q: "كيف أتواصل مع فريق المبيعات؟",
        a: "استخدم نموذج التواصل في هذا الموقع: اترك رقم هاتفك أو بريدك الإلكتروني وسيتواصل معك فريقنا. ويمكنك أيضًا المراسلة على support@dicta.uz.",
      },
    },
  },
  contact: {
    eyebrow: "تواصل",
    headingPre: "تحدّث إلينا،",
    headingAccent: "سيردّ عليك شخص حقيقي.",
    sub: "أخبرنا كيف نتواصل معك وسيعود إليك فريقنا قريبًا.",
    name: "الاسم",
    phone: "الهاتف",
    reachHint: "يكفي رقم الهاتف أو البريد الإلكتروني، أيهما تفضّل. والباقي اختياري.",
    email: "البريد الإلكتروني",
    company: "الشركة",
    message: "الرسالة",
    optional: "اختياري",
    messagePlaceholder: "فيمَ تريد استخدام Dicta؟",
    submit: "إرسال",
    sending: "جارٍ الإرسال…",
    successTitle: "شكرًا لك، تم استلام طلبك.",
    successBody: "سيتواصل معك فريقنا قريبًا.",
    errorInvalid: "يُرجى ترك رقم هاتف أو بريد إلكتروني صالح لنتمكّن من التواصل معك.",
    errorGeneric: "حدث خطأ ما. أعد المحاولة أو راسلنا على support@dicta.uz.",
    note: "سنستخدم هذه البيانات للتواصل معك بشأن طلبك.",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    sub: "هذه الصفحة غير موجودة أو تم نقلها.",
    home: "العودة إلى الرئيسية",
    download: "تنزيل",
  },
  notetaker: { steps: { recording: "جارٍ التسجيل" } },
  // Badge labels. `*Super` is the short line printed INSIDE the badge SVG and
  // must stay under ~22 characters or it clips; the unsuffixed key is the full
  // phrase used as the link's aria-label.
  appBadges: {
    appStore: "نزّله من App Store",
    googlePlay: "احصل عليه من Google Play",
    appStoreSuper: "نزّله من",
    googlePlaySuper: "احصل عليه من",
  },
  download: {
    title: "احصل على Dicta",
    sub: "يعمل Dicta في كل مكان تُعقد فيه اجتماعاتك: على هاتفك، وعلى حاسوبك، وفي المتصفح.",
    desktopHeading: "لحاسوبك",
    desktopSub:
      "يعمل في الخلفية ويكتشف اجتماعاتك تلقائيًا ويسجّلها محليًا، دون انضمام أي روبوت إلى المكالمة.",
    mobileHeading: "لهاتفك",
    mobileSub:
      "سجّل الاجتماعات الحضورية، واقرأ الملخصات أثناء التنقل، وأدر اجتماعات الطاولة المستديرة حيث تسجّل هواتف الجميع في وقت واحد. والطاولة المستديرة تعمل في التطبيق فقط.",
    mobileScan: "امسح الرمز للتثبيت على هاتفك",
    mac: "التنزيل لـ macOS",
    windows: "التنزيل لـ Windows",
    intel: "حاسوب Mac بمعالج Intel",
    appleSilicon: "حاسوب Mac بمعالج Apple Silicon",
    macHint: "Apple Silicon · macOS 13 فأحدث",
    intelHint: "Intel · macOS 13 فأحدث",
    windowsHint: "Windows 10/11 · 64 بت",
    osMac: "macOS",
    osWindows: "Windows",
    note: "مجاني — يعمل بحساب Dicta الخاص بك.",
    smartscreen: 'Windows may show a SmartScreen warning — choose "مزيد من المعلومات" then "تشغيل على أي حال".',
    back: "العودة إلى الرئيسية",
  },
  language: "اللغة",
  legal: {
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: 26 أكتوبر 2026",
    termsTitle: "شروط الخدمة",
    termsUpdated: "آخر تحديث: 28 يوليو 2026",
    offerTitle: "العرض العام",
    offerUpdated: "آخر تحديث: 28 يوليو 2026",
    deleteAccountTitle: "كيفية حذف حسابك في Dicta",
    deleteAccountUpdated: "آخر تحديث: 27 يوليو 2026",
    privacy: {
      intro:
        'Dicta ("نحن", "الخاصة بنا") operates the meeting service at dicta.uz. This page explains what we collect, how we collect it, what we use it for, and every third party we share it with.',
      dataCollect: {
        title: "البيانات التي نجمعها",
        accountInfo: {
          label: "بيانات الحساب.",
          text: "عنوان البريد الإلكتروني والاسم الكامل، و(عند تسجيل الدخول عبر Google) رابط صورة ملف Google الشخصي. تُجمع عند إنشاء الحساب.",
        },
        meetings: {
          label: "الاجتماعات.",
          text: "عناوين الاجتماعات والمشاركون والطوابع الزمنية والرموز القصيرة التي تنشئها. تُجمع أثناء استخدامك الخدمة.",
        },
        transcripts: {
          label: "الصوت والنصوص.",
          text: "عند تفعيل التفريغ النصي، يلتقط التطبيق صوت اجتماعك ويرسله إلى مزوّدي الذكاء الاصطناعي المذكورين أدناه لإنتاج نص وملخص وقرارات ومهام. ولا نحتفظ بالصوت نفسه بعد المعالجة ما لم يكن التسجيل مفعّلًا أيضًا؛ إذ يُحفظ النص الناتج فقط.",
        },
        recordings: {
          label: "التسجيلات.",
          text: "عندما يبدأ المضيف التسجيل، يُرفع الفيديو والصوت إلى مخزن الكائنات الخاص بنا ولا يصل إليهما إلا المضيف. ولا نبيع التسجيلات ولا ننشرها.",
        },
        voiceprints: {
          label: "بصمات الصوت (اختياري).",
          text: "إذا اخترت تسجيل بصمة صوتك، فإننا نستخرج توقيعًا رياضيًا لصوتك من عينة قصيرة ونخزّنه على خوادمنا الخاصة لنتمكن من تسميتك تلقائيًا في النصوص. وهذا اختياري ويُطلب على حدة ويمكن حذفه في أي وقت.",
        },
        location: {
          label: "الموقع (اختياري).",
          text: "إن سمحت بذلك، يُوسم التسجيل دون اتصال مرة واحدة عند بدئه بالمكان الذي أجريته فيه. ورفض ذلك يترك التسجيلات دون وسم ولا يغيّر شيئًا آخر.",
        },
        logs: {
          label: "السجلات التشغيلية وبيانات التشخيص.",
          text: "عنوان IP ووكيل المستخدم وتوقيت الطلبات وتقارير الأعطال، لأغراض تصحيح الأخطاء ومنع إساءة الاستخدام.",
        },
      },
      howCollected: {
        title: "كيف نجمعها",
        body: "منك مباشرة عند إنشاء حساب أو الكتابة في التطبيق؛ ومن جهازك تلقائيًا عند التسجيل أو الانضمام إلى اجتماع (الميكروفون، وكذلك الكاميرا والموقع إن فعّلتهما)؛ ومن خوادمنا أثناء استخدامك الخدمة (السجلات وبيانات التشخيص). ولا نشتري بيانات شخصية ولا نتتبعك عبر تطبيقات الشركات الأخرى أو مواقعها.",
      },
      howWeUse: {
        title: "كيف نستخدمها",
        body: "لتشغيل الخدمة، وإنتاج النصوص وملخصات الذكاء الاصطناعي، ودعم المضيفين بعد الاجتماع، ومعالجة المدفوعات، ومنع إساءة الاستخدام. ولا نبيع بياناتك، ولا نعرض إعلانات، ولا نستخدم اجتماعاتك لتدريب نماذج الذكاء الاصطناعي.",
      },
      ai: {
        title: "معالجة الذكاء الاصطناعي",
        body: "يتطلب تحويل الاجتماع إلى نص وملخص إرسال بياناتك إلى مزوّدي معالجة ذكاء اصطناعي من أطراف ثالثة خارج Dicta. إذ يُرسل صوت اجتماعك لتحويل الكلام إلى نص ولتحديد من تحدث ومتى؛ ثم يُرسل النص الناتج وعنوان الاجتماع وأسماء المشاركين لإعداد الملخصات والقرارات والمهام وللإجابة عن أسئلتك في دردشة الذكاء الاصطناعي.",
        consent:
          "لا تتم هذه المعالجة إلا عندما تسجّل اجتماعًا أو ترفعه أو تفرّغه نصيًا. وبدون هذه الميزات يمكنك تسجيل الدخول وإنشاء الاجتماعات والانضمام إليها وإجراء مكالمات صوتية ومرئية دون أي معالجة بالذكاء الاصطناعي.",
      },
      thirdParties: {
        title: "الأطراف الثالثة التي نشارك معها البيانات",
        intro:
          "لا نشارك البيانات الشخصية إلا مع المزوّدين المذكورين أدناه، وللغرض المحدد فقط، ولتقديم الخدمة فقط. وكل منهم ملزم بعقد يوجب عليه حماية بياناتك بمستوى معادل لهذه السياسة، ومعالجتها وفق تعليماتنا وحدها، وعدم استخدامها لتدريب نماذجه أو لأغراضه الخاصة.",
        items: [
          {
            name: "مزوّدو معالجة الذكاء الاصطناعي",
            purpose:
              "تحويل الكلام إلى نص، وفصل المتحدثين، ومعالجة بصمات الصوت، والملخصات والقرارات والمهام وإجابات دردشة الذكاء الاصطناعي وفهرسة البحث. يتلقون صوت الاجتماع ونص التفريغ وعناوين الاجتماعات وأسماء العرض للمشاركين، ومقطع بصمة الصوت إن سجّلته.",
          },
          {
            name: "Recall.ai",
            purpose:
              "فقط إذا أرسلت مدوّن ملاحظات Dicta إلى مكالمة خارجية على Zoom أو Google Meet أو Microsoft Teams. يتلقى رابط ذلك الاجتماع ويعيد صوته وفيديوه وأسماء الحاضرين. وتتم المعالجة في الاتحاد الأوروبي.",
          },
          {
            name: "‏Google (تسجيل الدخول) وApple (تسجيل الدخول عبر Apple)",
            purpose: "المصادقة، إذا اخترت طرق تسجيل الدخول تلك.",
          },
          {
            name: "LiveKit",
            purpose:
              "الصوت والفيديو الفوري أثناء المكالمة. يعمل على خوادمنا الخاصة في أوزبكستان.",
          },
          {
            name: "Cloudflare",
            purpose:
              "التخزين المشفّر للتسجيلات، وتوصيل المحتوى، وإرسال رسائل البريد التشغيلية.",
          },
          {
            name: "Sentry",
            purpose:
              "تشخيص الأعطال والأخطاء، وقد يتضمن معرّف حسابك وتفاصيل الطلبات.",
          },
          {
            name: "‏Firebase وGoogle Analytics",
            purpose:
              "تحليلات استخدام المنتج. يمكنك إيقافها من الإعدادات، ولا تُستخدم للإعلانات إطلاقًا.",
          },
          {
            name: "خدمة إشعارات Apple وFirebase Cloud Messaging",
            purpose: "إيصال الإشعارات الفورية، وقد تتضمن عناوين الاجتماعات.",
          },
          {
            name: "OpenStreetMap (Nominatim)",
            purpose:
              "تحويل إحداثيات تسجيل دون اتصال إلى اسم مكان، إذا فعّلت خدمة الموقع.",
          },
          {
            name: "Telegram",
            purpose:
              "إرسال ملخصات الاجتماعات إليك إذا ربطت حسابك على Telegram.",
          },
          {
            name: "‏Multicard وRevenueCat",
            purpose: "معالجة المدفوعات والاشتراكات.",
          },
          {
            name: "‏Trello وJira وClickUp وAsana وHisobot",
            purpose:
              "فقط إذا ربطتها. تتلقى عنوان الاجتماع والمهام والقرارات ومقتطفًا من الملخص ورابط الملخص. ويمكن لأي شخص لديه ذلك الرابط فتح الملخص، لذا اربطها فقط بلوحات يقبلها المشاركون معك.",
          },
        ],
      },
      retention: {
        title: "مدة احتفاظنا بها",
        body: "يُحتفظ ببيانات الحساب طالما بقي حسابك قائمًا. وتُحفظ النصوص والملخصات والتسجيلات حتى تحذفها أو تحذف حسابك. وتُحفظ بصمات الصوت حتى تزيلها أو توقف تسجيل بصمة الصوت. وتُحفظ السجلات التشغيلية وبيانات التشخيص مدة تصل إلى 90 يومًا. وبعد حذف حسابك نزيل حسابك ونصوصك وتسجيلاتك خلال 30 يومًا.",
      },
      transfers: {
        title: "أين تُعالَج بياناتك",
        body: "خوادم اجتماعاتنا في أوزبكستان على شبكة TAS-IX، وتبقى بيانات المكالمات المباشرة عليها. أما مزوّدو الذكاء الاصطناعي المذكورون أعلاه فيعالجون البيانات خارج أوزبكستان في مناطقهم، وRecall.ai في الاتحاد الأوروبي. وحيثما تغادر البيانات أوزبكستان نعتمد على حماية تعاقدية معادلة لهذه السياسة.",
      },
      security: {
        title: "الأمان",
        body: "تُشفَّر البيانات أثناء نقلها. وتُخزَّن التسجيلات في مخزن كائنات خاص غير قابل للاستعراض العام، ولا يمكن الوصول إليها إلا عبر روابط موقّعة قصيرة الأجل. والوصول إلى أنظمة الإنتاج مقصور على الموظفين الذين يحتاجونه. ولأن أي نظام لا يخلو من مخاطر، نمنحك أيضًا أدوات لحذف بياناتك بنفسك.",
      },
      children: {
        title: "الأطفال",
        body: "‏Dicta غير موجّه للأطفال دون سن 13 عامًا، ولا نجمع بياناتهم الشخصية عن علم. وإذا كنت ترى أن طفلًا زوّدنا ببيانات، فراسلنا وسنحذفها.",
      },
      yourRights: {
        title: "حقوقك",
        bodyBefore: "يمكنك الاطلاع على بياناتك أو تصحيحها أو تصديرها أو حذفها، وسحب موافقتك على معالجة الذكاء الاصطناعي في أي وقت. ويمكنك حذف حسابك بمراسلة ",
        bodyAfter: ". سنحذف حسابك ونصوصك وتسجيلاتك خلال 30 يومًا.",
        selfServeBefore:
          "ويمكنك أيضًا فعل ذلك بنفسك من داخل التطبيق دون التواصل معنا — راجع ",
        selfServeLink: "كيفية حذف حسابك في Dicta",
        selfServeAfter: ".",
      },
      contact: {
        title: "التواصل",
        bodyBefore: "الأسئلة أو الطلبات: ",
        bodyAfter: ".",
      },
    },
    deleteAccount: {
      intro:
        "يمكنك حذف حسابك في Dicta بنفسك من داخل التطبيق، دون الحاجة إلى مراسلتنا أو طلب إذن. وتوضح هذه الصفحة مكان الزر، وما يحدث بعد الضغط عليه، وما الذي يُحذف بالضبط.",
      where: {
        title: "أين تجد الزر",
        ios: {
          label: "‏iPhone وiPad.",
          text: "افتح تطبيق Dicta، وانتقل إلى الإعدادات، ومرّر إلى الأسفل حتى «حذف الحساب».",
        },
        android: {
          label: "Android.",
          text: "افتح تطبيق Dicta، وانتقل إلى الإعدادات، ومرّر إلى الأسفل حتى «حذف الحساب».",
        },
        web: {
          label: "الويب.",
          text: "سجّل الدخول على meet.dicta.uz، وافتح الإعدادات، ومرّر إلى الأسفل حتى «حذف الحساب».",
        },
      },
      confirm: {
        title: "ما سيُطلب منك تأكيده",
        typeDelete:
          "اكتب كلمة DELETE بأحرف كبيرة لتأكيد أنك قصدت الضغط على الزر.",
        reauth:
          "إثبات هويتك. فإن كانت لحسابك كلمة مرور، ستُدخلها. وإن كنت تسجّل الدخول عبر Google أو Apple فقط، نرسل إليك رمزًا لمرة واحدة بالبريد الإلكتروني.",
        blockers:
          "إن كنت تملك مساحة عمل لا يزال فيها أعضاء آخرون، فسيُطلب منك تسليم الملكية إلى شخص آخر أولًا، كي لا تختفي اجتماعاتهم مع حسابك. والتطبيق يرشدك خطوة بخطوة.",
      },
      immediate: {
        title: "ما يحدث فورًا",
        body: "يُقفل حسابك لحظة التأكيد. ويُسجَّل خروجك من كل جهاز ويتوقف Dicta عن العمل بالنسبة إليك: لا اجتماعات ولا تسجيلات ولا نصوص. ولم يُمحَ شيء بعد.",
      },
      grace: {
        title: "مهلة السماح البالغة 30 يومًا",
        body: "ننتظر 30 يومًا قبل محو أي شيء. وهذا التأخير مقصود: فهو يحميك من ضغطة خاطئة، أو قرار اتُّخذ في لحظة انفعال، أو دخول شخص آخر إلى حسابك.",
        restore:
          "لإلغاء الحذف، يكفي أن تسجّل الدخول مرة أخرى خلال تلك الأيام الثلاثين وتضغط «استعادة». وسيعود كل شيء تمامًا كما كان. وبعد 30 يومًا يصبح الحذف نهائيًا ولا يمكن التراجع عنه.",
      },
      deleted: {
        title: "ما الذي يُحذف نهائيًا بعد 30 يومًا",
        meetings:
          "كل اجتماع استضفته، مع قائمة مشاركيه ودردشته وملاحظاته.",
        recordings:
          "كل تسجيل فيديو وصوت لتلك الاجتماعات، يُمحى من مخزننا.",
        transcripts: "كل نص أُنتج من تلك الاجتماعات.",
        summaries:
          "كل ملخص بالذكاء الاصطناعي وكل قائمة قرارات وكل مهمة نتجت عنها.",
        voices:
          "ملفات صوتك، أي بصمات الصوت المستخدمة للتعرف عليك كمتحدث، بما فيها العينات الصوتية المخزّنة داخل اجتماعات الآخرين.",
        workspaces:
          "أي مساحة عمل تملكها، مع إعداداتها ومحتواها.",
        account:
          "الحساب نفسه: عنوان بريدك الإلكتروني واسمك وصورة ملفك الشخصي. ولا نحتفظ بنسخة مخفية منها.",
      },
      anonymized: {
        title: "ما الذي يُخفى بدل أن يُحذف",
        body: "الاجتماعات التي استضافها آخرون هي سجلاتهم لا سجلاتك، ولا يمكننا حذف اجتماع شخص آخر لمجرد أنك غادرت. لذا بدلًا من حذفها، نزيلك منها: يُستبدل اسمك وبريدك الإلكتروني وصورتك بعبارة «مستخدم محذوف» في كل موضع تظهر فيه — في قوائم المشاركين وفي رسائل الدردشة وفي الدعوات.",
        note: "ملاحظة صريحة واحدة: ملخص الذكاء الاصطناعي نص مكتوب وقد يرد فيه اسمك ضمن جملة. وإعادة كتابته ستفسد سجل المضيف عن اجتماعه، لذا نترك تلك النصوص كما هي.",
      },
      payments: {
        title: "سجلات المدفوعات",
        body: "إن سبق أن دفعت مقابل Dicta، فإن قوانين المحاسبة والضرائب تلزمنا بالاحتفاظ بسجل للمعاملة. ونحتفظ بالمبلغ والتاريخ والعملة والباقة فقط، منفصلةً عن هويتك؛ فاسمك وبريدك الإلكتروني وبيانات بطاقتك ليست جزءًا منه. ولم يعد بالإمكان تتبّع السجل ليعود إليك.",
      },
      contact: {
        title: "تحتاج مساعدة؟",
        bodyBefore:
          "إن تعذّر عليك الوصول إلى الزر أو حدث خطأ ما، فراسل ",
        bodyAfter: " وسنحذف الحساب نيابةً عنك.",
      },
    },
    terms: {
      intro:
        "باستخدامك Dicta فإنك توافق على هذه الشروط. وإن لم توافق عليها، فلا تستخدم الخدمة.",
      acceptableUse: {
        title: "الاستخدام المقبول",
        item1: "لا تستخدم Dicta في المضايقة أو الرسائل المزعجة أو الأنشطة غير القانونية.",
        item2: "لا تحاول تعطيل الخدمة أو جمع البيانات بكميات كبيرة أو الهندسة العكسية للنظام.",
        item3: "يتطلب التسجيل موافقة جميع المشاركين في الولايات القضائية التي يقتضي قانونها ذلك، وأنت المسؤول عن الحصول عليها.",
      },
      availability: {
        title: "توفر الخدمة",
        body: "نعمل على إبقاء Dicta متاحًا لكننا لا نضمن خدمة دون انقطاع. وقد نوقف الخدمة مؤقتًا لأعمال الصيانة أو إصلاحات الأمان أو لأسباب تتعلق بالسعة دون إشعار مسبق.",
      },
      yourContent: {
        title: "المحتوى الخاص بك",
        body: "تحتفظ بملكية الاجتماعات والنصوص والتسجيلات التي تنشئها. وتمنحنا ترخيصًا محدودًا لمعالجة هذا المحتوى وتخزينه بالقدر اللازم لتقديم الخدمة.",
      },
      payment: {
        title: "الدفع والاشتراك",
        body: "يوفر Dicta باقة مجانية وباقات مدفوعة. وتُباع الباقات المدفوعة بالسوم الأوزبكي (UZS) وتُدفع عبر الإنترنت ببطاقة مصرفية أو من محفظة أوزبكية إلكترونية (Payme أو Click أو Uzum أو Alif أو Anorbank أو Xazna) من خلال بوابة Multicard. ولا نطّلع على بيانات بطاقتك ولا نخزّنها إطلاقًا. وتُفعَّل الباقة المدفوعة بمجرد تأكيد الدفع وتستمر طوال المدة التي دفعت قيمتها، وتسري حدود تلك الباقة — الدقائق والتخزين والسجل — طوال تلك المدة.",
      },
      renewal: {
        title: "التجديد",
        body: "التجديد يدوي. لا نخزّن بطاقتك ولا نخصم منها تلقائيًا مطلقًا، فلا يوجد تجديد تلقائي. وعند انتهاء المدة المدفوعة تتوقف الباقة ببساطة ويعود حسابك إلى الباقة المجانية، ولا حاجة إلى إلغاء أي شيء. وللاستمرار، تدفع قيمة المدة التالية بنفسك. ونرسل إليك تذكيرًا بالبريد الإلكتروني قبل انتهاء المدة.",
      },
      refunds: {
        title: "الاسترداد",
        bodyBefore:
          "لا نرد المبالغ المدفوعة مقابل خدمة قُدِّمت بالفعل، بما في ذلك الجزء غير المستخدم من المدة إن توقفت عن استخدام Dicta مبكرًا. وتتيح لك الباقة المجانية تقييم الخدمة بالكامل قبل الدفع. ولا يتم الاسترداد إلا في حالة خصم مكرر أو خاطئ، أو عند دفع قيمة باقة لم تُفعَّل قط. وإجراءات طلب الاسترداد مبينة في ",
        linkLabel: "العرض العام",
        bodyAfter: ".",
      },
      taxes: {
        title: "الضرائب والإيصالات",
        body: 'Prices are shown without value added tax: "NORLAS IT SOLUTIONS" LLC is a resident of IT Park of the Republic of Uzbekistan and is exempt from VAT, so no VAT is added at checkout. A fiscal receipt is issued for every payment through a fiscal data operator: it is sent to your email address and a link to it is kept in your payment history in the app.',
      },
      termination: {
        title: "الإنهاء",
        bodyBefore: "يجوز لنا تعليق الحسابات التي تخالف هذه الشروط. ويمكنك إغلاق حسابك في أي وقت بمراسلة ",
        bodyAfter: ".",
      },
      liability: {
        title: "حدود المسؤولية",
        body: 'The service is provided "كما هي". To the fullest extent permitted by law, Dicta is not liable for indirect, incidental, or consequential damages arising from your use of the service.',
      },
      contact: { title: "التواصل", legalLabel: "الشؤون القانونية: " },
    },
    offer: {
      intro:
        'This document is a public offer by "NORLAS IT SOLUTIONS" LLC (the "البائع") addressed to any individual or legal entity (the "العميل") to conclude an agreement for paid access to the Dicta service on the terms set out below. Please read it in full before you pay: payment means acceptance of every clause of this offer.',
      subject: {
        title: "1. موضوع العرض",
        body: "يمنح البائع العميل وصولًا مدفوعًا إلى Dicta — وهي خدمة عبر الإنترنت لعقد الاجتماعات وتسجيلها وتفريغ الكلام نصيًا وإعداد الملخصات تلقائيًا — ضمن حدود الباقة المختارة وطوال المدة المدفوعة. ويُقدَّم Dicta كخدمة عبر الإنترنت؛ ولا تُسلَّم للعميل نسخة من البرنامج ولا تُنقل إليه أي حقوق حصرية فيه.",
        scope:
          "يُمنح الوصول لحساب العميل. وإذا كان العميل شخصًا اعتباريًا، يمتد الوصول إلى المستخدمين الذين يضيفهم إلى مساحة عمله، ضمن حدود الباقة المختارة.",
      },
      acceptance: {
        title: "2. قبول العرض",
        body: "يُقبل هذا العرض بالدفع. فاختيار باقة وسداد قيمتها كاملةً يمثل قبولًا تامًا وغير مشروط من العميل لشروط هذا العرض، ويُعد قبولًا بالمعنى المقصود في القانون المدني لجمهورية أوزبكستان.",
        effectBefore:
          "من لحظة استلام الدفعة تُعد الاتفاقية مبرمة كتابةً وفق شروط هذا العرض، ولها قوة مستند موقّع من الطرفين. ولا يلزم عقد ورقي منفصل؛ وإن احتاج العميل إليه، فيمكن طلبه عبر ",
        effectAfter: ".",
        version:
          "تخضع كل دفعة لنسخة العرض المنشورة على هذه الصفحة وقت إجراء تلك الدفعة.",
      },
      seller: {
        title: "3. بيانات البائع",
        nameLabel: "الاسم الكامل:",
        nameValue: '"NORLAS IT SOLUTIONS" Limited Liability Company',
        stirLabel: "الرقم الضريبي (STIR):",
        stirValue: "312444263",
        addressLabel: "العنوان القانوني:",
        addressValue: "‏Yangidarxon MFY, Navro'z street, 13, apt. 96, جمهورية أوزبكستان",
        directorLabel: "المدير:",
        directorValue: "Behruz Mahmudov",
        siteLabel: "الموقع الإلكتروني:",
        siteValue: "dicta.uz",
        supportLabel: "الدعم:",
        legalLabel: "الشؤون القانونية:",
      },
      service: {
        title: "4. ما تشمله الخدمة",
        body: "‏Dicta برنامج يُقدَّم كخدمة: عبر المتصفح على meet.dicta.uz ومن خلال تطبيقات Dicta لأنظمة macOS وWindows وiOS وAndroid. وضمن حدود الباقة المدفوعة، تقدّم الخدمة ما يلي:",
        item1: "اجتماعات فيديو عبر رابط، دون حاجة الضيوف إلى تثبيت أي شيء؛",
        item2: "تسجيل الاجتماعات وتخزين التسجيلات؛",
        item3: "التفريغ النصي التلقائي للكلام بالأوزبكية والروسية والإنجليزية؛",
        item4: "الملخصات وقوائم القرارات والمهام التي يولّدها الذكاء الاصطناعي من النص؛",
        item5: "البحث في الاجتماعات السابقة، ومشاركة النتائج، والتصدير إلى الخدمات المرتبطة.",
        limits:
          "تُحدَّد الحدود التفصيلية — الدقائق شهريًا، وحجم التخزين، ومدة الاحتفاظ بالسجل، وعدد أعضاء مساحة العمل — بحسب الباقة التي دفع العميل قيمتها.",
      },
      plans: {
        title: "5. الباقات والأسعار",
        bodyBefore: "تُنشر الباقات الحالية وحدودها وأسعارها على ",
        linkLabel: "صفحة الأسعار",
        bodyAfter:
          " وتشكل جزءًا لا يتجزأ من هذا العرض. وتُحدَّد الأسعار لكل باقة ولكل دورة فوترة (شهر أو سنة).",
        free: "يوفر Dicta أيضًا باقة مجانية دائمة. ويمكن للعميل تقييم الخدمة بالكامل قبل الدفع: فلا تُطلب بطاقة للتسجيل، ولا تُطلب لمواصلة استخدام الباقة المجانية.",
      },
      vat: {
        title: "6. ضريبة القيمة المضافة",
        body: "البائع مقيم في المجمع التقني لمنتجات البرمجيات وتقنيات المعلومات (IT Park) بجمهورية أوزبكستان، وهو معفى من ضريبة القيمة المضافة. وتُعرض جميع الأسعار بدون ضريبة القيمة المضافة، ولا تُضاف إليها عند الدفع.",
        certificate: "شهادة الإقامة في IT Park: رقم 6513، مقيّدة في السجل الموحد لمقيمي المجمع التقني بتاريخ 17 يوليو 2026 (القرار رقم 14/24 الصادر في 17 يوليو 2026).",
      },
      payment: {
        title: "7. طرق الدفع والعملة",
        body: "تتم جميع التسويات بالعملة الوطنية لجمهورية أوزبكستان، وهي السوم الأوزبكي (UZS).",
        methods:
          "يتم الدفع عبر الإنترنت من خلال بوابة الدفع Multicard: ببطاقة مصرفية، أو من محافظ Payme وClick وUzum وAlif وAnorbank وXazna الإلكترونية.",
        noCard:
          "لا يتلقى البائع رقم البطاقة الكامل أو تاريخ انتهائها أو رمز CVV ولا يعالجها ولا يخزّنها، إذ تُدخَل هذه البيانات لدى بوابة الدفع والبنك.",
        moment:
          "يُعد التزام الدفع منفَّذًا من لحظة قيد الأموال في حساب البائع وتأكيد بوابة الدفع نجاح العملية.",
      },
      activation: {
        title: "8. موعد فتح الوصول",
        body: "تُفعَّل الباقة المدفوعة تلقائيًا بمجرد تأكيد بوابة الدفع للدفعة، وعادةً خلال دقائق قليلة. وتبدأ المدة المدفوعة من لحظة التفعيل.",
        failureBefore:
          "إذا خُصم المبلغ ولم تظهر الباقة في الحساب، فعلى العميل مراسلة ",
        failureAfter:
          "، مع بيان تاريخ الدفعة ومبلغها وإيصالها. وسنقوم إما بفتح الوصول أو بإعادة المبلغ.",
      },
      term: {
        title: "9. مدة الاشتراك والتجديد",
        body: "تظل الباقة المدفوعة سارية طوال المدة المدفوعة — شهر أو سنة بحسب الباقة المختارة — ابتداءً من لحظة التفعيل.",
        manual:
          "التجديد يدوي. ولا يخزّن Dicta بطاقة العميل ولا يخصم منها تلقائيًا مطلقًا. ولا يوجد تجديد تلقائي.",
        expiry:
          "عند انتهاء المدة المدفوعة تتوقف الباقة ببساطة ويعود الحساب إلى الباقة المجانية. ولا حاجة إلى إلغاء أي شيء أو تقديم إشعار بالإلغاء. وللاستمرار في باقة مدفوعة، يدفع العميل قيمة المدة التالية بنفسه ومتى شاء.",
        reminder:
          "قبل انتهاء المدة المدفوعة نرسل تذكيرًا إلى البريد الإلكتروني المسجّل في الحساب، حتى لا يكون الانتهاء مفاجئًا.",
      },
      refunds: {
        title: "10. الاسترداد",
        body: "لا تُسترد الأموال المدفوعة مقابل خدمة قُدِّمت فعليًا. فالوصول يُمنح طوال المدة المدفوعة من لحظة الدفع، كما تتيح الباقة المجانية تقييم الخدمة بالكامل قبل دفع أي مبلغ.",
        earlyStop:
          "إذا توقف العميل عن استخدام Dicta قبل انتهاء المدة المدفوعة، أو حذف حسابه، فلا يُسترد الجزء غير المستخدم من المدة ولا يُرحَّل.",
        exceptionsIntro: "لا يُجرى الاسترداد إلا في حالتين:",
        exception1:
          "خصم مكرر أو خاطئ، أي تحصيل الدفعة نفسها مرتين، أو خصم مبلغ لا يطابق سعر الباقة المختارة؛",
        exception2:
          "دُفعت قيمة الخدمة ولم تُقدَّم، أي أن الباقة المدفوعة لم تُفعَّل وتعذّر تفعيلها.",
        howBefore: "يُرسل طلب الاسترداد إلى ",
        howAfter:
          " مع بيان تاريخ الدفعة ومبلغها وإيصالها. وإذا كان الطلب مبررًا، تُعاد الأموال عبر بوابة الدفع نفسها إلى البطاقة أو المحفظة التي تم الدفع منها، وتتوقف سرعة ظهورها على البنك المُصدِر.",
        consumer:
          "لا يحدّ هذا البند من الحقوق التي تمنحها تشريعات جمهورية أوزبكستان للأفراد بشأن حماية حقوق المستهلك.",
      },
      receipt: {
        title: "11. الإيصال الضريبي",
        body: "يُصدَر إيصال ضريبي عن كل دفعة عبر مشغّل البيانات الضريبية (OFD)، وفقًا لما تقتضيه تشريعات جمهورية أوزبكستان.",
        delivery:
          "يُرسل الإيصال إلى عنوان البريد الإلكتروني المسجّل في حساب العميل، ويُحفظ رابط له في سجل المدفوعات داخل التطبيق. والإيصال هو المستند المثبت للدفع.",
        missingBefore: "إن لم يصل الإيصال، فتحقق من مجلد البريد غير المرغوب فيه ثم راسل ",
        missingAfter: " — وسنرسله مرة أخرى.",
      },
      customerObligations: {
        title: "12. التزامات العميل",
        intro: "يلتزم العميل بما يلي:",
        item1: "تقديم بيانات تسجيل صحيحة وعنوان بريد إلكتروني فعّال والحفاظ على تحديثهما، إذ تُرسل إليهما الإيصالات والتذكيرات وإشعارات الخدمة؛",
        item2: "الحفاظ على سرية بيانات تسجيل الدخول وعدم منح الوصول إلى أطراف ثالثة؛",
        item3: "استخدام Dicta وفقًا لشروط الخدمة ولتشريعات جمهورية أوزبكستان؛",
        item4: "الحصول على موافقة جميع المشاركين في الاجتماع على التسجيل والتفريغ النصي حيثما يقتضي القانون ذلك؛",
        item5: "عدم إعادة بيع الباقة المدفوعة أو الترخيص من الباطن أو منح الوصول إليها بأي شكل لأشخاص من خارج مساحة عمل العميل؛",
        item6: "دفع قيمة الباقة المختارة بالمبلغ وبالطريقة المنصوص عليهما في هذا العرض.",
      },
      sellerObligations: {
        title: "13. التزامات البائع",
        intro: "يلتزم البائع بما يلي:",
        item1: "إتاحة الوصول إلى الباقة المدفوعة طوال المدة المدفوعة بالكامل؛",
        item2: "إبقاء الخدمة قيد التشغيل واتخاذ تدابير تقنية معقولة لضمان توافرها وأمانها؛",
        item3: "إصدار إيصال ضريبي وتسليمه عن كل دفعة؛",
        item4: "معالجة البيانات الشخصية وفقًا لسياسة الخصوصية؛",
        item5: "تقديم الدعم في المسائل التي تغطيها الباقة المختارة، عبر وسائل التواصل الواردة في البند 3.",
        availability:
          "لا يضمن البائع تشغيل الخدمة دون انقطاع أو دون أخطاء. وقد يُعلَّق الوصول مؤقتًا لأعمال الصيانة أو الأمان أو التحديثات أو لأسباب تتعلق بالسعة، وكذلك لأسباب خارجة عن سيطرة البائع مثل أعطال قنوات الاتصال أو أجهزة العميل أو خدمات الأطراف الثالثة. ولا تُعد هذه الانقطاعات القصيرة إخلالًا بتقديم الخدمة ولا تشكل سببًا للاسترداد.",
      },
      liability: {
        title: "14. حدود المسؤولية",
        body: 'The service is provided "كما هي". To the fullest extent permitted by law, the Seller is not liable for indirect, incidental or consequential losses, for lost profit or for loss of data arising from the use of, or the inability to use, the service.',
        ai: "تُنتَج النصوص والملخصات وقوائم القرارات والمهام تلقائيًا بواسطة نماذج تعلّم آلي وقد تتضمن أخطاء. وهي وسيلة مساعدة وليست مستندًا ذا حجية قانونية. وعلى العميل التحقق منها قبل الاعتماد عليها في القرارات أو في المحاسبة أو في التعامل مع أطراف ثالثة.",
        cap: "في جميع الأحوال، تقتصر المسؤولية الإجمالية للبائع على المبلغ الذي دفعه العميل فعليًا عن المدة المدفوعة التي وقع فيها الحدث المنشئ للمسؤولية.",
        force:
          "لا يتحمل أي من الطرفين المسؤولية عن عدم التنفيذ الناتج عن ظروف قوة قاهرة، بما في ذلك قرارات الجهات الحكومية أو الكوارث الطبيعية أو الأعمال العدائية أو الأعطال الواسعة في الاتصالات أو إمدادات الكهرباء.",
      },
      personalData: {
        title: "15. البيانات الشخصية",
        bodyBefore:
          "تُعالَج البيانات الشخصية وفقًا لتشريعات جمهورية أوزبكستان بشأن البيانات الشخصية ووفقًا لـ ",
        linkLabel: "سياسة الخصوصية",
        bodyAfter:
          "، التي توضح البيانات التي تُجمع وسببها ومدة الاحتفاظ بها وكيف يمكن للعميل حذف حسابه وبياناته. ويُعد قبول هذا العرض موافقةً كذلك على معالجة البيانات الشخصية وفق تلك الشروط.",
      },
      termination: {
        title: "16. مدة الاتفاقية وإنهاؤها",
        body: "تسري الاتفاقية من لحظة قبول العرض (الدفع) وتظل نافذة حتى نهاية المدة المدفوعة، أو حتى ينفّذ الطرفان التزاماتهما بالكامل.",
        customer:
          "يجوز للعميل التوقف عن استخدام Dicta في أي وقت وحذف الحساب من داخل التطبيق مباشرة. ويؤدي حذف الحساب إلى إنهاء الاتفاقية، ولا يُسترد الجزء غير المستخدم من المدة المدفوعة.",
        seller:
          "يجوز للبائع تعليق الوصول أو إنهاؤه في حال مخالفة شروط الخدمة أو تشريعات جمهورية أوزبكستان، بما في ذلك استخدام الخدمة لأغراض غير مشروعة أو القيام بأفعال تعطّل عملها.",
      },
      amendments: {
        title: "17. تعديلات العرض",
        body: "يجوز للبائع تعديل هذا العرض والأسعار من طرف واحد. وتسري النسخة الجديدة من لحظة نشرها على هذه الصفحة مع تحديث التاريخ.",
        priceLock:
          "لا ينطبق تغيير السعر على مدة مدفوعة سلفًا: إذ تستمر الباقة المدفوعة بالشروط والسعر الساريين وقت الدفع. ويُعد الاستمرار في استخدام الخدمة بعد نشر التغييرات، وكذلك أي دفعة لاحقة، قبولًا للنسخة الجديدة.",
      },
      law: {
        title: "18. القانون الواجب التطبيق وتسوية النزاعات",
        body: "يخضع هذا العرض والعلاقات الناشئة عنه لقانون جمهورية أوزبكستان.",
        claimsBefore:
          "يسعى الطرفان إلى تسوية النزاعات عبر التفاوض. وتُرسل المطالبة الخطية إلى ",
        claimsAfter: " ويُنظر فيها خلال المدة التي يحددها القانون.",
        court:
          "وإذا تعذّر التوصل إلى اتفاق، يُحال النزاع إلى المحكمة الاقتصادية المختصة في العنوان المسجّل للبائع، ويُسوّى وفقًا لتشريعات جمهورية أوزبكستان.",
        languages:
          "يُنشر هذا العرض باللغات الأوزبكية والروسية والإنجليزية والعربية. وفي حال وجود تعارض بين النصوص، يُعتد بالنص الأوزبكي.",
      },
    },
  },
};

export const ui: Record<Locale, typeof en> = { uz, ru, en, ar };
export type Dict = typeof en;

