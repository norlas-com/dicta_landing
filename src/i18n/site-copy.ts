// Per-site copy overrides.
//
// dicta.uz and dicta.live ship the same dictionary, but a handful of strings are
// written for the Uzbek market and are wrong — sometimes actively
// counterproductive — in front of a global audience:
//
//   * "transcribes in Uzbek, Russian and English" (home hero and transcript
//     feature): a list that excludes the one language a MENA visitor is
//     looking for.
//   * The IT Park VAT note, which describes an Uzbek tax status that does not
//     apply to a USD sale.
//   * The FAQ's payment answer, which names the Uzbek gateway and e-wallets.
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
      // The language list excludes the one a MENA visitor looks for.
      home: {
        hero: {
          sub: "Dicta records your calls and in-person meetings, transcribes them in any language, and hands you the decisions and tasks minutes after you hang up.",
        },
        features: {
          transcript: {
            body: "Accurate transcripts in any language, even when people switch languages mid-sentence. Search any word and jump to that moment of the recording.",
          },
        },
      },
      pricing: {
        vatNote: "Prices are shown in US dollars and exclude any local taxes.",
      },
      // The Uzbek gateway, e-wallets and offer do not describe a global sale.
      faq: {
        q: {
          pay: {
            a: "Paid plans are paid online. Renewal is manual, with no auto-renewal: Dicta never charges you automatically, and when the paid period ends the account returns to the free plan. We email a reminder first.",
          },
        },
      },
    },

    ru: {
      home: {
        hero: {
          sub: "Dicta записывает созвоны и живые встречи, расшифровывает их на любом языке и через несколько минут после звонка выдаёт решения и задачи.",
        },
        features: {
          transcript: {
            body: "Точная расшифровка на любом языке, даже если собеседники переходят с языка на язык посреди фразы. Найдите любое слово и перейдите к этому моменту записи.",
          },
        },
      },
      pricing: {
        vatNote: "Цены указаны в долларах США и не включают местные налоги.",
      },
      faq: {
        q: {
          pay: {
            a: "Платные тарифы оплачиваются онлайн. Продление ручное, автопродления нет: Dicta никогда не списывает деньги автоматически, а когда оплаченный период заканчивается, аккаунт возвращается на бесплатный тариф. Перед этим мы отправляем напоминание по почте.",
          },
        },
      },
    },

    ar: {
      pricing: {
        vatNote: "الأسعار معروضة بالدولار الأمريكي ولا تشمل أي ضرائب محلية.",
      },
    },
  },
};
