// Per-site copy overrides.
//
// dicta.uz and dicta.live ship the same dictionary, but a handful of strings are
// written for the Uzbek market and are wrong — sometimes actively
// counterproductive — in front of a global audience:
//
//   * "Uzbekistan's own meeting platform" and the TAS-IX pitch. To a team in
//     Tashkent, "your conversation stays here" is the whole value proposition.
//     To a buyer in Dubai it says the opposite: your data goes to a country I
//     have no relationship with. Same sentence, inverted meaning.
//   * "transcribes in Uzbek, Russian, or English" — a list that excludes the
//     one language a MENA visitor is looking for.
//   * The IT Park VAT note, which describes an Uzbek tax status that does not
//     apply to a USD sale.
//
// Only these differ. Everything else — the product, the features, the tone —
// is shared, so this stays a thin override rather than a second dictionary that
// would immediately drift.
//
// `uz` is absent from the global site's locale list, so only en/ru/ar need
// entries here.

import type { Dict, Locale } from "./ui";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends string
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export type CopyOverride = DeepPartial<Dict>;

export const SITE_COPY: Record<string, Partial<Record<Locale, CopyOverride>>> = {
  // dicta.uz keeps the dictionary exactly as written.
  uz: {},

  global: {
    en: {
      landing: {
        sub: "Host the call and Dicta records it, transcribes it, and writes the summary. No guest accounts, no installs, no time limits.",
        features: {
          f1: {
            title: "One platform, not five tools",
            problem:
              "Recording, transcription, notes and follow-up tasks usually mean four separate subscriptions that don't talk to each other — and a meeting that has to be re-entered by hand into all of them.",
            solution:
              "Dicta is the call, the recording, the transcript, the summary and the tasks in one place, on meeting servers we run ourselves rather than resell from someone else.",
          },
        },
      },
      pricing: {
        vatNote: "Prices are shown in US dollars and exclude any local taxes.",
      },
    },

    ru: {
      landing: {
        sub: "Проведите встречу — Dicta запишет её, расшифрует и напишет резюме. Без гостевых аккаунтов, без установки, без ограничения по времени.",
        features: {
          f1: {
            title: "Одна платформа вместо пяти инструментов",
            problem:
              "Запись, расшифровка, заметки и задачи обычно означают четыре разные подписки, которые не связаны между собой, — и встречу, которую приходится вручную переносить в каждую из них.",
            solution:
              "Dicta — это звонок, запись, расшифровка, резюме и задачи в одном месте, на серверах встреч, которые мы держим сами, а не перепродаём чужие.",
          },
        },
      },
      pricing: {
        vatNote: "Цены указаны в долларах США и не включают местные налоги.",
      },
    },

    ar: {
      landing: {
        sub: "أدِر الاجتماع وستتولى Dicta تسجيله وتفريغه نصيًّا وكتابة ملخّصه. بلا حسابات ضيوف، وبلا تثبيت، وبلا حدّ زمني.",
        features: {
          f1: {
            title: "منصّة واحدة بدل خمس أدوات",
            problem:
              "التسجيل والتفريغ النصي والملاحظات ومتابعة المهام تعني عادةً أربعة اشتراكات منفصلة لا يتحدث بعضها إلى بعض، واجتماعًا يُعاد إدخاله يدويًّا في كلٍّ منها.",
            solution:
              "Dicta هي المكالمة والتسجيل والنص والملخّص والمهام في مكان واحد، على خوادم اجتماعات نُشغّلها بأنفسنا لا نُعيد بيعها عن جهة أخرى.",
          },
        },
      },
      pricing: {
        vatNote: "الأسعار معروضة بالدولار الأمريكي ولا تشمل أي ضرائب محلية.",
      },
    },
  },
};
