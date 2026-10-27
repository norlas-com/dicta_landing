import type { FeaturesLocale } from "./features-types";

export const uz: FeaturesLocale = {
  ui: {
    indexTitle: "Dicta uchrashuvlaringiz bilan nima qiladi",
    indexMetaTitle: "Imkoniyatlar: AI xulosa, transkripsiya va yozuv boti",
    indexMetaDesc:
      "Dicta imkoniyatlari: spikerlar bilan ovozni matnga aylantirish, AI xulosa, Zoom, Google Meet va Teams uchun bot, oflayn yozuv, vebinarlar, AI chat va vazifalar. Oʻzbek, rus, ingliz va arab tillarida.",
    indexSub:
      "Har qanday yoʻl bir xil yakunlanadi: yozuv, spikerlar boʻyicha transkripsiya va qarorlar hamda vazifalar bilan AI xulosa.",
    breadcrumbRoot: "Imkoniyatlar",
    benefitsTitle: "Nima uchun qulay",
    howTitle: "Qanday ishlaydi",
    faqTitle: "Savollar",
    relatedTitle: "Bogʻliq imkoniyatlar",
    moreTitle: "Yana nimalarni koʻrish mumkin",
    ctaTitle: "Navbatdagi uchrashuvda sinab koʻring",
    ctaSub: "Bepul roʻyxatdan oʻting va birinchi transkripsiya hamda xulosani oling.",
    ctaPrimary: "Bepul boshlash",
    ctaSecondary: "Ilovani yuklab olish",
    useCases: "Qoʻllanish holatlari",
    pricing: "Tariflar",
    allFeatures: "Barcha imkoniyatlar",
    learnMore: "Batafsil",
    desktopLink: "Kompyuter ilovasini yuklab olish",
  },
  features: {
    transcription: {
      name: "Transkripsiya",
      metaTitle: "Oʻzbek tilida transkripsiya: ovozni matnga aylantirish",
      metaDesc:
        "Nutqni spikerlar belgilangan matnga aylantiring. Dicta uchrashuvlarni oʻzbek, rus, ingliz va arab tillarida transkripsiya qiladi; matndan qidirib, yozuvning kerakli joyiga oʻtish mumkin.",
      h1: "Ovozni matnga aylantirish, har bir spiker belgilangan",
      sub: "Dicta uchrashuvlarni oʻzbek, rus, ingliz va arab tillarida matnga aylantiradi: yozuvni qayta eshitish oʻrniga matndan qidiring.",
      card: "Toʻrt tilda ovozdan matnga, spikerlar bilan.",
      benefits: [
        { t: "Toʻrt til", d: "Oʻzbek, rus, ingliz va arab tillari, ishtirokchilar tilni almashtirgan uchrashuvlar ham." },
        { t: "Kim nima dedi", d: "Transkripsiya spikerlarni ajratadi, shuning uchun har bir fikr kimga tegishli ekani koʻrinadi." },
        { t: "Qidirish va oʻtish", d: "Matndan qidiring va audioni aylantirib oʻtirmay, yozuvning aynan kerakli lahzasini oching." },
      ],
      steps: [
        { t: "Uchrashuvni yozib oling", d: "Dicta xonasida, Zoom, Meet yoki Teams’ga bot yuborib, telefonda yoki fayl yuklab." },
        { t: "Dicta matnga aylantiradi", d: "Audio matnga aylanadi va avtomatik ravishda spikerlar boʻyicha boʻlinadi." },
        { t: "Oʻqing va qidiring", d: "Transkripsiyani yozuv yonida oching, kerakli joyni toping va nusxa oling." },
      ],
      faq: [
        { q: "Dicta qaysi tillarda transkripsiya qiladi?", a: "Oʻzbek, rus, ingliz va arab tillarida." },
        { q: "Kim gapirayotgani koʻrinadimi?", a: "Ha. Dicta transkripsiyada spikerlarni ajratadi, kim nima deganini koʻrasiz." },
        { q: "Tayyor yozuvni matnga aylantirsa boʻladimi?", a: "Ha. Audio yoki video fayl yuklang, Dicta transkripsiya va AI xulosa qaytaradi." },
      ],
    },
    "ai-summary": {
      name: "AI xulosa",
      metaTitle: "AI xulosa: uchrashuv qarorlari, mavzulari va vazifalari",
      metaDesc:
        "Har bir uchrashuvdan keyin Dicta qisqa AI xulosa yozadi: asosiy mavzular, qarorlar va masʼul belgilangan vazifalar. Bir soatlik yozuv oʻrniga ikki daqiqalik oʻqish.",
      h1: "Taxminan ikki daqiqada oʻqiladigan AI xulosa",
      sub: "Mavzular, asosiy qarorlar va masʼul belgilangan vazifalar: har bir uchrashuvdan keyin avtomatik.",
      card: "Har bir uchrashuvdan keyin mavzu, qaror va vazifalar.",
      benefits: [
        { t: "Qarorlar bir joyda", d: "Butun transkripsiyani qayta oʻqimasdan nima kelishilganini koʻring." },
        { t: "Masʼul belgilangan vazifalar", d: "Vazifalar suhbatdan ajratib olinadi va kerakli odamga biriktiriladi." },
        { t: "Yozuvga bogʻlangan", d: "Har bir band transkripsiyaga va yozuvning aniq lahzasiga olib boradi." },
      ],
      steps: [
        { t: "Uchrashuvni tugating", d: "Yozuv qayta ishlangach, Dicta xulosani tayyorlashga kirishadi." },
        { t: "AI transkripsiyani oʻqiydi", d: "U aytilganlardan mavzu, qaror va vazifalarni ajratadi." },
        { t: "Tekshiring va yuboring", d: "Xulosani oching, transkripsiya bilan solishtiring va jamoa bilan ulashing." },
      ],
      faq: [
        { q: "Xulosada nimalar bor?", a: "Asosiy mavzular, muhim qarorlar va har biri uchun masʼul belgilangan vazifalar." },
        { q: "Xulosani oʻqish qancha vaqt oladi?", a: "Uchrashuv uzoq boʻlsa ham taxminan ikki daqiqa." },
        { q: "Band qayerdan olinganini tekshirsa boʻladimi?", a: "Ha. Transkripsiyadan qidirib, yozuvning kerakli lahzasiga oʻtish mumkin." },
      ],
    },
    "notetaker-bot": {
      name: "Yozuv boti",
      metaTitle: "Zoom, Google Meet va Teams uchun uchrashuvni yozib olish boti",
      metaDesc:
        "Dicta botini Zoom, Google Meet yoki Microsoft Teams qoʻngʻirogʻiga yuboring. U uchrashuvni yozib oladi va keyin spikerlar bilan transkripsiya hamda AI xulosa beradi.",
      h1: "Zoom, Google Meet va Teams uchun yozuv boti",
      sub: "Uchrashuv havolasini qoʻying: Dicta qoʻngʻiroqqa kiradi, yozib oladi va transkripsiya bilan xulosani yuboradi.",
      card: "Zoom, Google Meet va Teams qoʻngʻiroqlarini bot bilan yozib olish.",
      benefits: [
        { t: "Odatiy xizmatlar bilan ishlaydi", d: "Zoom, Google Meet va Microsoft Teams: jamoangiz avvalgidek uchrashadi." },
        { t: "Siz qatnashasiz, bot yozadi", d: "Yozib oʻtirmay, tinglang va gapiring." },
        { t: "Natija bir xil", d: "Yozuv, spikerlar boʻyicha transkripsiya va vazifalar bilan AI xulosa." },
      ],
      steps: [
        { t: "Havolani qoʻying", d: "Dicta’ga Zoom, Meet yoki Teams uchrashuv havolasini qoʻshing." },
        { t: "Bot qoʻngʻiroqqa kiradi", d: "U ulanadi va uchrashuvni yozib oladi." },
        { t: "Natijani oling", d: "Qoʻngʻiroqdan keyin transkripsiya, xulosa va vazifalar hisobingizda paydo boʻladi." },
      ],
      faq: [
        { q: "Bot qaysi platformalarni qoʻllab-quvvatlaydi?", a: "Zoom, Google Meet va Microsoft Teams." },
        { q: "Uchrashuv tashkilotchisi boʻlishim shartmi?", a: "Uchrashuv havolasi kerak. Bot ishtirokchi sifatida kiradi, shuning uchun suhbatdoshlarni yozuv ketayotgani haqida ogohlantiring." },
        { q: "Qoʻngʻiroqdan keyin nima olaman?", a: "Yozuv, spikerlar boʻyicha transkripsiya hamda qaror va vazifalar bilan AI xulosa." },
      ],
    },
    "meeting-room": {
      name: "Uchrashuv xonasi",
      metaTitle: "Onlayn uchrashuv: brauzer va ilovada, AI xulosa bilan",
      metaDesc:
        "Onlayn uchrashuvlarni Dicta xonasida oʻtkazing: darhol yoki rejalashtirilgan, kod orqali brauzer va ilovalardan kiring. Har bir uchrashuv yozib olinadi, matnga aylantiriladi va xulosa qilinadi.",
      h1: "Xulosasi ichiga qurilgan onlayn uchrashuvlar",
      sub: "Uchrashuvni darhol boshlang, rejalashtiring yoki brauzer, iOS, Android va kompyuter ilovasidan kod bilan kiring. Yozuv va xulosani Dicta oʻzi qiladi.",
      card: "Brauzer va ilovalarda onlayn uchrashuv, yozuv va xulosa bilan.",
      benefits: [
        { t: "Darhol yoki rejalashtirilgan", d: "Uchrashuvni bir bosishda boshlang yoki oldindan rejalashtiring." },
        { t: "Kod orqali kirish", d: "Mehmonlar uchrashuv kodi bilan brauzer yoki ilovalardan kiradi." },
        { t: "Botsiz yozuv", d: "Uchrashuv Dicta’da oʻtgani uchun, tugashi bilan transkripsiya va xulosa tayyor." },
      ],
      steps: [
        { t: "Uchrashuv yarating", d: "Hoziroq boshlang yoki rejalashtiring va kod yoki havolani yuboring." },
        { t: "Uchrashuvni oʻtkazing", d: "Hamma brauzer yoki ilovalardan kiradi, uchrashuv yozib olinadi." },
        { t: "Natijani oching", d: "Spikerlar boʻyicha transkripsiya va AI xulosa uchrashuvlar roʻyxatida paydo boʻladi." },
      ],
      faq: [
        { q: "Ishtirokchilar biror narsa oʻrnatishi kerakmi?", a: "Yoʻq, brauzerdan kirish mumkin. iOS, Android va kompyuter uchun ilovalar ham bor." },
        { q: "Uchrashuvni oldindan rejalashtirsa boʻladimi?", a: "Ha. Uchrashuvni darhol boshlash yoki keyinga rejalashtirish mumkin." },
        { q: "Yozuv avtomatik ketadimi?", a: "Dicta xonasidagi uchrashuvlar yozib olinib, transkripsiya va xulosaga aylantiriladi, shuning uchun ishtirokchilarni oldindan ogohlantiring." },
      ],
    },
    "offline-recording": {
      name: "Oflayn yozuv",
      metaTitle: "Telefonda yigʻilishni yozib olish: spikerlar bilan transkripsiya",
      metaDesc:
        "Jonli yigʻilish, maʼruza yoki intervyuni telefonda yozib oling. Dicta ovozlarni ajratadi, transkripsiya va AI xulosa tayyorlaydi. “Davra suhbati” rejimi bir nechta telefonni birlashtiradi.",
      h1: "Jonli yigʻilishlarni telefonda yozib oling",
      sub: "Telefonni stolga qoʻying. Dicta ovozlarni ajratadi va yigʻilish, maʼruza yoki intervyu transkripsiyasi hamda xulosasini beradi.",
      card: "Spikerlarni ajratadigan telefon yozuvi. Davra suhbati rejimi.",
      benefits: [
        { t: "Ovozlar ajratiladi", d: "Spikerlarni ajratish xulosada kim nima deganini koʻrsatadi." },
        { t: "Davra suhbati rejimi", d: "Bitta xona, koʻp telefon. Har kim oʻz telefonida yozadi, Dicta treklarni birlashtiradi." },
        { t: "Yigʻilish va maʼruzalar uchun", d: "Rahbariyat yigʻilishlari, savdo qoʻngʻiroqlari, HR intervyulari, majlis xulosasi va talabalar maʼruzalari." },
      ],
      steps: [
        { t: "Ilovani oching va yozing", d: "iOS yoki Android’da yozuvni yoqing. Davra suhbatida har kim oʻz telefonida yozadi." },
        { t: "Dicta qayta ishlaydi", d: "Spikerlarni ajratadi va bir nechta telefon boʻlsa, treklarni birlashtiradi." },
        { t: "Xulosani oʻqing", d: "Transkripsiya va qaror hamda vazifalar bilan AI xulosani oling." },
      ],
      faq: [
        { q: "Zoom yoki Meet qoʻngʻirogʻisiz ishlaydimi?", a: "Ha. Oflayn yozuv jonli uchrashuvlar uchun: telefonda yozib oling, shu kifoya." },
        { q: "Davra suhbati rejimi nima?", a: "Bitta xona, koʻp telefon. Har bir ishtirokchi oʻz telefonida yozadi, Dicta treklarni bitta uchrashuvga birlashtiradi." },
        { q: "Spikerlarni ajratadimi?", a: "Ha. Dicta transkripsiyada ovozlarni ajratish uchun spiker diarizatsiyasidan foydalanadi." },
      ],
    },
    upload: {
      name: "Yozuv yuklash",
      metaTitle: "Audioni matnga aylantirish: yozuvni yuklang, transkripsiya oling",
      metaDesc:
        "Dicta’ga audio yoki video fayl yuklang va spikerlar bilan transkripsiya hamda AI xulosa oling. Oʻzbek, rus, ingliz va arab tilidagi yozuvlar bilan ishlaydi.",
      h1: "Yozuvni yuklang, matnni oling",
      sub: "Audio yoki video allaqachon bormi? Yuklang, Dicta spikerlar bilan transkripsiya va AI xulosa qaytaradi.",
      card: "Audio va video fayllardan transkripsiya va xulosa.",
      benefits: [
        { t: "Audio yoki video", d: "Boshqa xizmatlar, diktofon yoki telefondagi yozuvlar." },
        { t: "Jonli uchrashuvdek natija", d: "Spikerlar bilan transkripsiya, AI xulosa, qarorlar va vazifalar." },
        { t: "Toʻrt til", d: "Oʻzbek, rus, ingliz va arab tillari." },
      ],
      steps: [
        { t: "Faylni yuklang", d: "Veb-ilovada audio yoki video fayl qoʻshing." },
        { t: "Dicta qayta ishlaydi", d: "Nutq matnga aylantiriladi va spikerlar boʻyicha boʻlinadi." },
        { t: "Natijadan foydalaning", d: "Transkripsiya, xulosa va vazifalarni oʻqing yoki AI chatda savol bering." },
      ],
      faq: [
        { q: "Qanday fayllarni yuklash mumkin?", a: "Audio va video yozuvlarni." },
        { q: "Spikerlar va xulosa boʻladimi?", a: "Ha. Yuklangan yozuvlar jonli uchrashuvlar bilan bir xil jarayondan oʻtadi." },
        { q: "Qaysi tillar qoʻllab-quvvatlanadi?", a: "Oʻzbek, rus, ingliz va arab tillari." },
      ],
    },
    "desktop-app": {
      name: "Kompyuter ilovasi",
      metaTitle: "macOS va Windows uchun Dicta ilovasi: uchrashuvni avtomatik yozish",
      metaDesc:
        "macOS va Windows uchun Dicta ilovasi kompyuteringizdagi uchrashuvlarni yozib oladi, keyin spikerlar bilan transkripsiya va AI xulosa beradi.",
      h1: "Uchrashuvlarni kompyuterda avtomatik yozib oling",
      sub: "macOS va Windows ilovasi siz qatnashgan uchrashuvlarni yozib, transkripsiya va xulosa uchun Dicta’ga yuboradi.",
      card: "macOS va Windows ilovasi kompyuterdagi uchrashuvni yozadi.",
      benefits: [
        { t: "Kompyuteringizda yozadi", d: "Qoʻngʻiroqqa bot kirishi shart emas: ilova kompyuteringizdan yozadi." },
        { t: "macOS va Windows", d: "Kompyuteringizga mos versiyani yuklab oling." },
        { t: "Hamma joyda bitta hisob", d: "Uchrashuvlar veb, iOS va Android bilan sinxronlanadi." },
      ],
      steps: [
        { t: "Ilovani oʻrnating", d: "Yuklab olish sahifasidan yuklab, hisobingizga kiring." },
        { t: "Uchrashuvga odatdagidek kiring", d: "Ilova uni kompyuterda yozib oladi." },
        { t: "Natijani Dicta’da toping", d: "Transkripsiya va AI xulosa hisobingizda paydo boʻladi." },
      ],
      faq: [
        { q: "Qaysi tizimlar qoʻllab-quvvatlanadi?", a: "macOS va Windows." },
        { q: "Bot ham kerakmi?", a: "Yoʻq. Ilova kompyuterda yozadi, shuning uchun qoʻngʻiroqqa bot kirmaydi." },
        { q: "Qayerdan yuklab olaman?", a: "Shu saytdagi yuklab olish sahifasidan." },
      ],
    },
    webinars: {
      name: "Vebinarlar",
      metaTitle: "600 tagacha ishtirokchili vebinarlar, AI xulosa bilan",
      metaDesc:
        "Dicta’da taxminan 600 ishtirokchigacha vebinar oʻtkazing. Har bir sessiyaning yozuvi, transkripsiyasi va AI xulosasi.",
      h1: "Katta auditoriya uchun vebinarlar",
      sub: "Taxminan 600 ishtirokchigacha sessiya oʻtkazing va yozuv, transkripsiya hamda xulosani oling.",
      card: "Taxminan 600 ishtirokchigacha vebinarlar.",
      benefits: [
        { t: "Katta auditoriya uchun joy", d: "Vebinarlar taxminan 600 ishtirokchigacha moʻljallangan." },
        { t: "Yozib olinadi va matnga aylanadi", d: "Sessiyaning transkripsiyasi va AI xulosasini olasiz." },
        { t: "Materialdan qayta foydalaning", d: "Matndan qidiring yoki AI chatda savol bering." },
      ],
      steps: [
        { t: "Vebinar yarating", d: "Uni Dicta’da sozlang va havolani ulashing." },
        { t: "Sessiyani oʻtkazing", d: "Ishtirokchilar brauzer yoki ilovalardan kiradi." },
        { t: "Yakun yasang", d: "Yozuv, transkripsiya va xulosadan taqdimot natijalari uchun foydalaning." },
      ],
      faq: [
        { q: "Vebinarda nechta odam qatnashishi mumkin?", a: "Taxminan 600 ishtirokchigacha." },
        { q: "Transkripsiya boʻladimi?", a: "Ha, yozuv va AI xulosa bilan birga." },
        { q: "Oddiy uchrashuvdan farqi nima?", a: "Vebinarlar katta auditoriya uchun. Kichik jamoa qoʻngʻiroqlari uchun uchrashuv xonasi bor." },
      ],
    },
    "ai-chat": {
      name: "AI chat",
      metaTitle: "Barcha uchrashuvlaringiz boʻyicha AI chat",
      metaDesc:
        "Oldingi uchrashuvlarda nima deyilgani haqida savol bering. Dicta AI chati transkripsiyalaringiz asosida javob beradi, qoʻlda qidirish shart emas.",
      h1: "Uchrashuvlaringizdan savol soʻrang",
      sub: "AI chat oldingi uchrashuvlar asosida javob beradi: nima qaror qilindi, kim nimani va’da qildi, oʻtgan oy nima muhokama qilindi.",
      card: "Oldingi uchrashuvlar boʻyicha savollar.",
      benefits: [
        { t: "Bir nechta uchrashuv boʻyicha", d: "Faqat oxirgi qoʻngʻiroq haqida emas, koʻproq suhbatlar haqida soʻrang." },
        { t: "Oddiy tilda savollar", d: "Hamkasbdan soʻragandek soʻrang." },
        { t: "Transkripsiyalaringizga tayanadi", d: "Javoblar uchrashuvlarda haqiqatan aytilganlarga asoslanadi." },
      ],
      steps: [
        { t: "Uchrashuvlarni odatdagidek yozing", d: "Har bir uchrashuv Dicta qidira oladigan bilimni boyitadi." },
        { t: "AI chatni oching", d: "Savolingizni oʻz soʻzlaringiz bilan yozing." },
        { t: "Manbani tekshiring", d: "Aniq ibora kerak boʻlsa, transkripsiya va yozuvga qayting." },
      ],
      faq: [
        { q: "Nimalar haqida soʻrash mumkin?", a: "Yozib olingan uchrashuvlar haqida istalgan narsa: qarorlar, masʼullar, mavzular." },
        { q: "Mening transkripsiyalarim ishlatiladimi?", a: "Ha. Javob sizning oʻz uchrashuvlaringiz asosida beriladi." },
        { q: "Javobni tekshirsa boʻladimi?", a: "Ha. Transkripsiyani oching va yozuvning kerakli lahzasiga oʻting." },
      ],
    },
    "tasks-integrations": {
      name: "Vazifalar va integratsiyalar",
      metaTitle: "Uchrashuvdan vazifalar: Trello’ga eksport va Telegram’da xulosa",
      metaDesc:
        "Dicta har bir uchrashuvdan vazifalarni ajratadi, masʼullarni belgilaydi va Trello hamda boshqa vazifa menejerlariga eksport qiladi. Uchrashuv xulosalarini Telegram’da olish mumkin.",
      h1: "Yoʻqolmaydigan vazifalar",
      sub: "Vazifalar har bir uchrashuvdan masʼul bilan ajratiladi, vazifa menejeringizga eksport qilinadi, xulosalar esa Telegram’ga keladi.",
      card: "Vazifalar, menejerlarga eksport va Telegram’da xulosa.",
      benefits: [
        { t: "Masʼul belgilangan vazifalar", d: "Dicta vazifalarni va ular kimga tegishli ekanini sanab beradi." },
        { t: "Menejeringizga eksport", d: "Vazifalarni qayta yozmasdan Trello va boshqa menejerlarga yuboring." },
        { t: "Telegram’da xulosa", d: "Telegram hisobingizni bogʻlang va uchrashuv xulosalarini shu yerda oling." },
      ],
      steps: [
        { t: "Uchrashuv oʻtkazing", d: "Dicta uchrashuvni yozib oladigan istalgan usulda." },
        { t: "Vazifalarni koʻrib chiqing", d: "Xulosadagi vazifalar va masʼullarni tekshiring." },
        { t: "Keyingisiga uzating", d: "Menejerga eksport qiling va xulosani Telegram’da oling." },
      ],
      faq: [
        { q: "Dicta qaysi vazifa vositalari bilan ishlaydi?", a: "Trello va boshqa vazifa menejerlari bilan. Integratsiyalarning joriy roʻyxatini ilovada koʻring." },
        { q: "Xulosalarni Telegram’da olsa boʻladimi?", a: "Ha. Telegram hisobingizni bogʻlang, uchrashuv xulosalari shu yerga keladi." },
        { q: "Vazifaga kim biriktiriladi?", a: "Dicta masʼulni uchrashuvda aytilganlarga qarab taklif qiladi, siz uni tekshirishingiz mumkin." },
      ],
    },
  },
};
