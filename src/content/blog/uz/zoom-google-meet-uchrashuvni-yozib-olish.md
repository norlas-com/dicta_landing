---
title: "Zoom va Google Meet uchrashuvlarini avtomatik yozib olish va transkripsiya qilish"
description: "Zoom, Google Meet va Teams uchrashuvlariga bot yuborib, yozib olish, transkripsiya va AI xulosa olish. Qadamlar, afzalliklar va kamchiliklar."
date: 2026-10-25
lang: uz
slug: zoom-google-meet-uchrashuvni-yozib-olish
translationKey: zoom-meet-bot
topic: guides
tags: [bot, zoom, google-meet, onlayn-uchrashuv]
---

Onlayn uchrashuv tugagach, ko'pincha bir xil manzara takrorlanadi: "Kim nima va'da berdi?", "Narx haqida qaror qanday edi?", "Yozuv bormi?" Zoom va Google Meet o'z yozuv funksiyasini beradi, lekin bu hali matn, qarorlar va topshiriqlar degani emas. Video fayl 40 daqiqa, uni qaytadan ko'rishga hech kimning vaqti yo'q.

Bu maqolada Zoom, Google Meet va Microsoft Teams uchrashuvlarini avtomatik yozib olish, transkripsiya qilish va xulosa chiqarishning amaliy yo'lini ko'rib chiqamiz: meeting bot (notetaker) qanday ishlaydi va uni qanday sozlash kerak.

## Meeting bot nima

Meeting bot uchrashuvga oddiy ishtirokchi sifatida qo'shiladigan dastur. U sizning o'rningizga tinglaydi, yozib oladi va uchrashuv tugagach matn hamda xulosa tayyorlaydi. Siz faqat uchrashuv havolasini berasiz.

Bot yondashuvining afzalligi shundaki, hech narsa o'rnatish shart emas: na kompyuteringizga dastur, na boshqa ishtirokchilardan biror narsa. Bot sizning kompyuteringiz o'chiq yoki internetingiz uzilgan bo'lsa ham uchrashuvda qolaveradi.

## Platformaning o'z yozuvi bilan farqi

Zoom va Google Meet'ning o'z yozuv funksiyasi bor, lekin cheklovlari mavjud:

- yozuvni ko'pincha faqat uchrashuv tashkilotchisi yoki ruxsati bor kishi boshlay oladi;
- natija video fayl, uni qidirib bo'lmaydi;
- qaysi paket yoki rejada qanday transkripsiya va xulosa chiqishi platformaga va tarifga bog'liq, o'zbek tilida esa bu odatda cheklangan bo'ladi (aniq holatni rasmiy hujjatlardan tekshiring);
- qarorlar va topshiriqlar o'z-o'zidan ajratilmaydi.

Bot bu bo'shliqni to'ldiradi: yozuv, so'zlovchilar bo'yicha matn va AI xulosa bir joyda.

## Dicta bilan qadam-baqadam

Dicta bot Zoom, Google Meet va Microsoft Teams uchrashuvlariga qo'shila oladi.

1. **Dicta'da ro'yxatdan o'ting** (bepul) va hisobingizga kiring.
2. **Uchrashuv havolasini kiriting.** Zoom, Meet yoki Teams havolasini Dicta'ga qo'ying va botni yuboring.
3. **Botni uchrashuvga kiriting.** Bot uchrashuvga qo'shiladi. Tashkilotchi uni xonaga kiritishi (qabul qilishi) kerak bo'lishi mumkin.
4. **Uchrashuvni odatdagidek o'tkazing.** Bot yozib boradi.
5. **Natijani oling.** Tugagach transkript (so'zlovchilar bo'yicha), mavzular, qarorlar va topshiriqlar ro'yxati tayyor bo'ladi.
6. **Ulashing.** Xulosani Telegram orqali olish, topshiriqlarni Trello kabi vositalarga eksport qilish mumkin.

Agar uchrashuv Dicta'ning o'z xonasida (meet.dicta.uz) o'tsa, bot kerak emas: yozuv, transkript va xulosa avtomatik ishlaydi. Dicta xonasida oniy uchrashuv ochish, rejalashtirish va kod bilan qo'shilish mumkin.

## Nimalarni olasiz

- **To'liq transkript.** Kim nima degani, vaqt bo'yicha. Qidirish mumkin.
- **AI xulosa.** Muhokama mavzulari, qabul qilingan qarorlar.
- **Topshiriqlar.** Kim, nima qilishi kerak, qaysi muddatgacha (aytilgan bo'lsa).
- **AI chat.** O'tgan uchrashuvlaringiz bo'yicha savol berish: "Mijoz bilan narx haqida nima kelishgan edik?"

## Bot ishlatishda e'tibor berish kerak bo'lgan narsalar

**Ogohlantiring.** Bot uchrashuvda ismi bilan ko'rinadi, ya'ni yashirin emas. Shunday bo'lsa-da, boshida "Uchrashuv yozib olinadi" deb aytib qo'yish to'g'ri. Mijozlar va tashqi hamkorlar bilan uchrashuvda bu ayniqsa muhim.

**Ruxsatlar.** Ba'zi tashkilotlarning Zoom, Meet yoki Teams sozlamalari tashqi qatnashchilarni xonaga kiritishni cheklaydi. Bunday holda tashkilotchi botni qo'lda qabul qilishi yoki sozlamani o'zgartirishi kerak.

**Ovoz sifati.** Transkripsiya sifati ovoz sifatiga bog'liq. Mikrofon yaqin bo'lsin, bir vaqtda ikki kishi gapirmasin, shovqinli joydan ulanmang.

**Tekshirish.** AI xulosa qoralama sifatida juda yaxshi, lekin raqamlar, ismlar va muddatlarni muhim hujjatga ko'chirishdan oldin o'zingiz tekshiring.

## Qachon bot, qachon desktop ilova

- **Bot:** havola bilan boshqa birovning uchrashuviga ham qo'shilish, kompyuteringiz band yoki o'chiq bo'lganda, jamoa uchrashuvlarini markazlashtirib yozish uchun qulay.
- **Desktop ilova** (macOS va Windows): uchrashuvlarni kompyuterning o'zida avtomatik yozib oladi. Agar siz botning uchrashuvga kirishini xohlamasangiz, bu variant mos.

## Bot qaysi uchrashuvlarda eng foydali

- haftalik jamoa yig'ilishlari va planerkalar;
- mijoz bilan sotuv va demo qo'ng'iroqlari;
- HR suhbatlari va onlayn intervyular;
- hamkorlar bilan muzokaralar;
- onlayn vebinar va treninglar (Dicta vebinarlari 600 ga yaqin ishtirokchigacha qo'llaydi).

## Xulosa

Uchrashuvni yozib olish endi alohida ish emas: havolani Dicta'ga bering, qolganini bot qiladi. Natijada sizda matn, qarorlar va topshiriqlar bo'ladi, "kim nima dedi" degan bahslar esa tugaydi. Keyingi Zoom yoki Google Meet uchrashuvingizda sinab ko'ring: Dicta'da ro'yxatdan o'tish bepul.
