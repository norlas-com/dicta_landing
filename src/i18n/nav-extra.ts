// Labels for the multi-page nav (features, use cases, blog, developers).
// Kept out of ui.ts so the page modules under i18n/pages/ can grow without
// touching the shared dictionary.
import type { Locale } from "./locales";

export interface NavExtra {
  features: string;
  useCases: string;
  pricing: string;
  blog: string;
  developers: string;
  product: string;
  resources: string;
  company: string;
  ucOffline: string;
  ucOnline: string;
  ucBot: string;
  /** Mobile header: the hamburger button and the sheet's close button. */
  menu: string;
  closeMenu: string;
}

export const navExtra: Record<Locale, NavExtra> = {
  uz: {
    features: "Imkoniyatlar",
    useCases: "Qo'llanilishi",
    pricing: "Narxlar",
    blog: "Blog",
    developers: "Dasturchilar uchun",
    product: "Mahsulot",
    resources: "Resurslar",
    company: "Kompaniya",
    ucOffline: "Oflayn uchrashuvlar",
    ucOnline: "Onlayn uchrashuvlar",
    ucBot: "Uchrashuv boti",
    menu: "Menyu",
    closeMenu: "Menyuni yopish",
  },
  ru: {
    features: "Возможности",
    useCases: "Сценарии",
    pricing: "Цены",
    blog: "Блог",
    developers: "Разработчикам",
    product: "Продукт",
    resources: "Ресурсы",
    company: "Компания",
    ucOffline: "Офлайн-встречи",
    ucOnline: "Онлайн-встречи",
    ucBot: "Бот для встреч",
    menu: "Меню",
    closeMenu: "Закрыть меню",
  },
  en: {
    features: "Features",
    useCases: "Use cases",
    pricing: "Pricing",
    blog: "Blog",
    developers: "Developers",
    product: "Product",
    resources: "Resources",
    company: "Company",
    ucOffline: "Offline meetings",
    ucOnline: "Online meetings",
    ucBot: "Meeting bot",
    menu: "Menu",
    closeMenu: "Close menu",
  },
  ar: {
    features: "الميزات",
    useCases: "حالات الاستخدام",
    pricing: "الأسعار",
    blog: "المدونة",
    developers: "للمطورين",
    product: "المنتج",
    resources: "الموارد",
    company: "الشركة",
    ucOffline: "الاجتماعات الحضورية",
    ucOnline: "الاجتماعات عبر الإنترنت",
    ucBot: "روبوت الاجتماعات",
    menu: "القائمة",
    closeMenu: "إغلاق القائمة",
  },
};
