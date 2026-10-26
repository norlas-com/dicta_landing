// Copy for /pricing. Facts come from the live billing catalog (plan numbers)
// and the existing FAQ/offer wording (payment methods); nothing is invented here.
import type { Locale } from "../locales";

export interface PricingPageCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  h1: string;
  intro: string;
  compare: {
    eyebrow: string;
    title: string;
    sub: string;
    featureCol: string;
    caption: string;
    price: string;
    priceUzs: string;
    priceUsd: string;
    minutes: string;
    minutesSuffix: string;
    storage: string;
    storageSuffix: string;
    retention: string;
    retentionForever: string;
    retentionDays: string;
    support: string;
    noCard: string;
    no: string;
    free: string;
    uzsUnit: string;
    packsTitle: string;
    packsLine: string;
    limitsNote: string;
    noCatalog: string;
  };
  billing: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  enterprise: {
    title: string;
    body: string;
    cta: string;
    secondary: string;
  };
  links: { faq: string; developers: string; signup: string };
}

export const pricingPage: Record<Locale, PricingPageCopy> = {
  en: {
    metaTitle: "Dicta pricing: free plan, Pro, Business and Top | Dicta",
    metaDescription:
      "Compare Dicta plans for AI meeting notes: monthly transcription minutes, storage, history and support. Start free, pay in Uzbek sum by card or e-wallet, or in USD through the app stores.",
    breadcrumbHome: "Home",
    h1: "Dicta pricing: pick a plan by minutes, storage and history",
    intro:
      "Every plan records, transcribes and summarizes your meetings. The plans differ in how many minutes you get each month, how much storage you have and how long your history is kept. Start free, no card needed.",
    compare: {
      eyebrow: "Compare plans",
      title: "What each plan includes",
      sub: "The limits below are exactly the ones applied to your account. Figures come straight from our live plan catalog.",
      featureCol: "Plan limits",
      caption: "Comparison of Dicta plans: price, monthly minutes, storage, history and support",
      price: "Price per month",
      priceUzs: "In Uzbek sum",
      priceUsd: "In US dollars",
      minutes: "Transcription minutes per month",
      minutesSuffix: "min",
      storage: "Storage for recordings",
      storageSuffix: "GB",
      retention: "History kept",
      retentionForever: "Forever",
      retentionDays: "{days} days",
      support: "Support",
      noCard: "Card required to start",
      no: "No",
      free: "Free",
      uzsUnit: "sum",
      packsTitle: "Extra minute packs",
      packsLine: "{min} minutes: {uzs} or {usd}",
      limitsNote:
        "Minutes are counted per month across every way of using Dicta: online meetings, the meeting bot, offline recordings and uploaded files. Storage is the total size of the recordings you keep.",
      noCatalog: "Live prices are temporarily unavailable. Please check back shortly or contact us.",
    },
    billing: {
      eyebrow: "Billing",
      title: "Billing questions",
      items: [
        {
          q: "How do I pay from Uzbekistan?",
          a: "Paid plans are paid online in Uzbek sum (UZS), by bank card or from an Uzbek e-wallet (Payme, Click, Uzum, Alif, Anorbank, Xazna) through the Multicard gateway. Dicta never sees or stores your card details, and a fiscal receipt is issued for every payment.",
        },
        {
          q: "How do I pay from outside Uzbekistan?",
          a: "Outside Uzbekistan, subscribe in the Dicta iOS or Android app: payment goes through the App Store or Google Play in-app purchase, in US dollars. Stripe is not available.",
        },
        {
          q: "Does my plan renew automatically?",
          a: "Renewal is manual, with no auto-renewal for payments made in Uzbek sum: when the paid period ends the account returns to the free plan, and we email a reminder first.",
        },
        {
          q: "Are the prices with VAT?",
          a: "Prices are shown without VAT: the seller is a resident of IT Park of Uzbekistan and no VAT is added at checkout.",
        },
        {
          q: "Can I get a refund?",
          a: "A refund is made only for a duplicate or erroneous charge, or where a plan was paid for but never activated. The free plan lets you try the service in full before you pay. The full procedure is in the public offer.",
        },
        {
          q: "My company needs a contract. What do I do?",
          a: "Write to legal@dicta.uz and request a separate contract, or use the contact form on our home page.",
        },
      ],
    },
    enterprise: {
      title: "Need more, or a contract for your team?",
      body: "For larger teams, special requirements or an invoice and contract, tell us what you need and our team will get back to you.",
      cta: "Contact us",
      secondary: "Start free",
    },
    links: { faq: "Read the full FAQ", developers: "Integrations and API", signup: "Start free" },
  },
  ru: {
    metaTitle: "Тарифы Dicta: бесплатный, Pro, Business и Top | Dicta",
    metaDescription:
      "Сравните тарифы Dicta для ИИ-протоколов встреч: минуты транскрибации в месяц, хранилище, история и поддержка. Начните бесплатно, оплата в сумах картой или кошельком, в USD через магазины приложений.",
    breadcrumbHome: "Главная",
    h1: "Тарифы Dicta: выберите план по минутам, хранилищу и истории",
    intro:
      "На любом тарифе Dicta записывает, расшифровывает и резюмирует ваши встречи. Тарифы отличаются количеством минут в месяц, объёмом хранилища и сроком хранения истории. Начните бесплатно, карта не нужна.",
    compare: {
      eyebrow: "Сравнение тарифов",
      title: "Что входит в каждый тариф",
      sub: "Лимиты ниже — именно те, что действуют на вашем аккаунте. Цифры берутся напрямую из актуального каталога тарифов.",
      featureCol: "Лимиты тарифа",
      caption: "Сравнение тарифов Dicta: цена, минуты в месяц, хранилище, история и поддержка",
      price: "Цена в месяц",
      priceUzs: "В узбекских сумах",
      priceUsd: "В долларах США",
      minutes: "Минуты транскрибации в месяц",
      minutesSuffix: "мин",
      storage: "Хранилище для записей",
      storageSuffix: "ГБ",
      retention: "Срок хранения истории",
      retentionForever: "Бессрочно",
      retentionDays: "{days} дней",
      support: "Поддержка",
      noCard: "Нужна ли карта для старта",
      no: "Нет",
      free: "Бесплатно",
      uzsUnit: "сум",
      packsTitle: "Дополнительные пакеты минут",
      packsLine: "{min} минут: {uzs} или {usd}",
      limitsNote:
        "Минуты считаются за месяц по всем способам использования Dicta: онлайн-встречи, бот, офлайн-записи и загруженные файлы. Хранилище — общий размер записей, которые вы храните.",
      noCatalog: "Актуальные цены временно недоступны. Загляните позже или свяжитесь с нами.",
    },
    billing: {
      eyebrow: "Оплата",
      title: "Вопросы об оплате",
      items: [
        {
          q: "Как оплатить из Узбекистана?",
          a: "Платные тарифы оплачиваются онлайн в узбекских сумах (UZS) банковской картой или из узбекского электронного кошелька (Payme, Click, Uzum, Alif, Anorbank, Xazna) через платёжный шлюз Multicard. Dicta не видит и не хранит данные вашей карты, а за каждый платёж выдаётся фискальный чек.",
        },
        {
          q: "Как оплатить из-за пределов Узбекистана?",
          a: "За пределами Узбекистана оформите подписку в приложении Dicta для iOS или Android: оплата проходит через встроенные покупки App Store или Google Play в долларах США. Stripe недоступен.",
        },
        {
          q: "Продлевается ли тариф автоматически?",
          a: "Для платежей в узбекских сумах продление ручное, автопродления нет: когда оплаченный период заканчивается, аккаунт возвращается на бесплатный тариф, а перед этим мы отправляем напоминание по почте.",
        },
        {
          q: "Цены указаны с НДС?",
          a: "Цены указаны без НДС: продавец является резидентом IT Park Узбекистана, и НДС при оплате не добавляется.",
        },
        {
          q: "Можно ли вернуть деньги?",
          a: "Возврат делается только за повторное или ошибочное списание либо если тариф оплачен, но не активирован. Бесплатный тариф позволяет полностью попробовать сервис до оплаты. Порядок возврата описан в публичной оферте.",
        },
        {
          q: "Нашей компании нужен договор. Что делать?",
          a: "Напишите на legal@dicta.uz и запросите отдельный договор или воспользуйтесь формой связи на главной странице.",
        },
      ],
    },
    enterprise: {
      title: "Нужно больше или договор для команды?",
      body: "Для больших команд, особых требований, счёта и договора расскажите, что вам нужно, и мы свяжемся с вами.",
      cta: "Связаться с нами",
      secondary: "Начать бесплатно",
    },
    links: { faq: "Все вопросы и ответы", developers: "Интеграции и API", signup: "Начать бесплатно" },
  },
  uz: {
    metaTitle: "Dicta narxlari: bepul, Pro, Business va Top rejalar | Dicta",
    metaDescription:
      "Uchrashuv yozuvlari uchun Dicta rejalarini solishtiring: oyiga transkripsiya daqiqalari, xotira, tarix va qoʻllab-quvvatlash. Bepul boshlang, soʻmda karta yoki hamyon bilan, USD da ilova doʻkonlari orqali toʻlang.",
    breadcrumbHome: "Bosh sahifa",
    h1: "Dicta narxlari: rejani daqiqa, xotira va tarix boʻyicha tanlang",
    intro:
      "Har qanday rejada Dicta uchrashuvlaringizni yozib oladi, matnga aylantiradi va qisqacha xulosa qiladi. Rejalar oyiga necha daqiqa berilishi, xotira hajmi va tarix qancha saqlanishi bilan farq qiladi. Bepul boshlang, karta shart emas.",
    compare: {
      eyebrow: "Rejalarni solishtirish",
      title: "Har bir rejaga nimalar kiradi",
      sub: "Quyidagi cheklovlar hisobingizda aynan shunday amal qiladi. Raqamlar bevosita joriy reja katalogidan olinadi.",
      featureCol: "Reja cheklovlari",
      caption: "Dicta rejalarini solishtirish: narx, oylik daqiqalar, xotira, tarix va qoʻllab-quvvatlash",
      price: "Oyiga narxi",
      priceUzs: "Oʻzbek soʻmida",
      priceUsd: "AQSh dollarida",
      minutes: "Oyiga transkripsiya daqiqalari",
      minutesSuffix: "daqiqa",
      storage: "Yozuvlar uchun xotira",
      storageSuffix: "GB",
      retention: "Tarix saqlanish muddati",
      retentionForever: "Doimiy",
      retentionDays: "{days} kun",
      support: "Qoʻllab-quvvatlash",
      noCard: "Boshlash uchun karta kerakmi",
      no: "Yoʻq",
      free: "Bepul",
      uzsUnit: "soʻm",
      packsTitle: "Qoʻshimcha daqiqa paketlari",
      packsLine: "{min} daqiqa: {uzs} yoki {usd}",
      limitsNote:
        "Daqiqalar oy davomida Dicta ishlatishning barcha usullari boʻyicha hisoblanadi: onlayn uchrashuvlar, bot, oflayn yozuvlar va yuklangan fayllar. Xotira — saqlayotgan yozuvlaringizning umumiy hajmi.",
      noCatalog: "Joriy narxlar vaqtincha mavjud emas. Birozdan soʻng qaytib koʻring yoki biz bilan bogʻlaning.",
    },
    billing: {
      eyebrow: "Toʻlov",
      title: "Toʻlov boʻyicha savollar",
      items: [
        {
          q: "Oʻzbekistondan qanday toʻlayman?",
          a: "Pullik rejalar onlayn, oʻzbek soʻmida (UZS), bank kartasi yoki oʻzbek elektron hamyoni (Payme, Click, Uzum, Alif, Anorbank, Xazna) orqali Multicard shlyuzi bilan toʻlanadi. Dicta karta maʼlumotlaringizni koʻrmaydi va saqlamaydi, har bir toʻlov uchun fiskal chek beriladi.",
        },
        {
          q: "Oʻzbekistondan tashqarida qanday toʻlayman?",
          a: "Oʻzbekistondan tashqarida Dicta iOS yoki Android ilovasida obuna boʻling: toʻlov App Store yoki Google Play ilova ichidagi xarid orqali AQSh dollarida amalga oshadi. Stripe mavjud emas.",
        },
        {
          q: "Reja avtomatik yangilanadimi?",
          a: "Soʻmdagi toʻlovlar uchun yangilash qoʻlda, avtomatik yangilanish yoʻq: toʻlangan davr tugagach hisob bepul rejaga qaytadi, bundan oldin esa pochtaga eslatma yuboramiz.",
        },
        {
          q: "Narxlar QQS bilanmi?",
          a: "Narxlar QQSsiz koʻrsatilgan: sotuvchi Oʻzbekiston IT Park rezidenti, toʻlovda QQS qoʻshilmaydi.",
        },
        {
          q: "Pulni qaytarib olish mumkinmi?",
          a: "Pul faqat takroriy yoki xato yechilgan toʻlov uchun, yoki reja toʻlangan-u, faollashmagan boʻlsa qaytariladi. Bepul reja toʻlovdan oldin xizmatni toʻliq sinab koʻrish imkonini beradi. Tartib ommaviy oferta matnida bayon etilgan.",
        },
        {
          q: "Kompaniyamizga shartnoma kerak. Nima qilish kerak?",
          a: "legal@dicta.uz manziliga yozib, alohida shartnoma soʻrang yoki bosh sahifadagi aloqa formasidan foydalaning.",
        },
      ],
    },
    enterprise: {
      title: "Koʻproq narsa yoki jamoa uchun shartnoma kerakmi?",
      body: "Katta jamoalar, maxsus talablar, hisob-faktura va shartnoma uchun nima kerakligini yozing, jamoamiz siz bilan bogʻlanadi.",
      cta: "Biz bilan bogʻlanish",
      secondary: "Bepul boshlash",
    },
    links: { faq: "Barcha savol-javoblar", developers: "Integratsiyalar va API", signup: "Bepul boshlash" },
  },
  ar: {
    metaTitle: "أسعار Dicta: الباقة المجانية وPro وBusiness وTop | Dicta",
    metaDescription:
      "قارن باقات Dicta لمحاضر الاجتماعات بالذكاء الاصطناعي: دقائق التفريغ شهريًا والتخزين والسجل والدعم. ابدأ مجانًا، وادفع بالسوم الأوزبكي ببطاقة أو محفظة، أو بالدولار عبر متجري التطبيقات.",
    breadcrumbHome: "الرئيسية",
    h1: "أسعار Dicta: اختر الباقة حسب الدقائق والتخزين والسجل",
    intro:
      "في كل الباقات يسجّل Dicta اجتماعاتك ويفرّغها ويلخّصها. وتختلف الباقات في عدد الدقائق الشهرية وحجم التخزين ومدة حفظ السجل. ابدأ مجانًا دون بطاقة.",
    compare: {
      eyebrow: "مقارنة الباقات",
      title: "ما الذي تتضمنه كل باقة",
      sub: "الحدود أدناه هي نفسها المطبّقة على حسابك. والأرقام مأخوذة مباشرة من كتالوج الباقات الحالي.",
      featureCol: "حدود الباقة",
      caption: "مقارنة باقات Dicta: السعر والدقائق الشهرية والتخزين والسجل والدعم",
      price: "السعر شهريًا",
      priceUzs: "بالسوم الأوزبكي",
      priceUsd: "بالدولار الأمريكي",
      minutes: "دقائق التفريغ شهريًا",
      minutesSuffix: "دقيقة",
      storage: "مساحة تخزين التسجيلات",
      storageSuffix: "غيغابايت",
      retention: "مدة حفظ السجل",
      retentionForever: "دائمًا",
      retentionDays: "{days} يومًا",
      support: "الدعم",
      noCard: "هل تلزم بطاقة للبدء",
      no: "لا",
      free: "مجانًا",
      uzsUnit: "سوم",
      packsTitle: "حزم دقائق إضافية",
      packsLine: "{min} دقيقة: {uzs} أو {usd}",
      limitsNote:
        "تُحتسب الدقائق شهريًا عبر كل طرق استخدام Dicta: الاجتماعات عبر الإنترنت والبوت والتسجيلات الميدانية والملفات المرفوعة. أما التخزين فهو الحجم الإجمالي للتسجيلات التي تحتفظ بها.",
      noCatalog: "الأسعار الحالية غير متاحة مؤقتًا. تفقّد الصفحة لاحقًا أو تواصل معنا.",
    },
    billing: {
      eyebrow: "الدفع",
      title: "أسئلة عن الدفع",
      items: [
        {
          q: "كيف أدفع من داخل أوزبكستان؟",
          a: "تُدفع الباقات المدفوعة عبر الإنترنت بالسوم الأوزبكي (UZS) ببطاقة مصرفية أو من محفظة أوزبكية إلكترونية (Payme أو Click أو Uzum أو Alif أو Anorbank أو Xazna) من خلال بوابة Multicard. ولا يطّلع Dicta على بيانات بطاقتك ولا يخزّنها، ويُصدر إيصالًا ضريبيًا عن كل دفعة.",
        },
        {
          q: "كيف أدفع من خارج أوزبكستان؟",
          a: "خارج أوزبكستان، اشترك من تطبيق Dicta على iOS أو Android: يتم الدفع عبر الشراء داخل التطبيق من App Store أو Google Play بالدولار الأمريكي. خدمة Stripe غير متاحة.",
        },
        {
          q: "هل تتجدد الباقة تلقائيًا؟",
          a: "التجديد يدوي للمدفوعات بالسوم، ولا يوجد تجديد تلقائي: عند انتهاء المدة المدفوعة يعود الحساب إلى الباقة المجانية، ونرسل تذكيرًا بالبريد قبل ذلك.",
        },
        {
          q: "هل الأسعار شاملة ضريبة القيمة المضافة؟",
          a: "الأسعار معروضة دون ضريبة القيمة المضافة: فالبائع مقيم في IT Park بأوزبكستان ولا تُضاف الضريبة عند الدفع.",
        },
        {
          q: "هل يمكنني استرداد المبلغ؟",
          a: "يُردّ المبلغ فقط عن الخصم المكرر أو الخاطئ، أو إذا دُفعت قيمة باقة ولم تُفعَّل. وتتيح لك الباقة المجانية تجربة الخدمة كاملة قبل الدفع. وتفاصيل الإجراء في العرض العام.",
        },
        {
          q: "شركتنا تحتاج إلى عقد. ماذا أفعل؟",
          a: "اكتب إلى legal@dicta.uz واطلب عقدًا مستقلًا، أو استخدم نموذج التواصل في الصفحة الرئيسية.",
        },
      ],
    },
    enterprise: {
      title: "تحتاج إلى أكثر، أو إلى عقد لفريقك؟",
      body: "للفرق الكبيرة أو المتطلبات الخاصة أو الفاتورة والعقد، أخبرنا بما تحتاج وسيتواصل معك فريقنا.",
      cta: "تواصل معنا",
      secondary: "ابدأ مجانًا",
    },
    links: { faq: "اقرأ الأسئلة الشائعة كاملة", developers: "التكاملات وواجهة API", signup: "ابدأ مجانًا" },
  },
};
