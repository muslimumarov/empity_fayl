import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from "../locales/en.json";
import frLang from "../locales/fr.json";
import uzLang from "../locales/uz.json";

// Tarjima fayllari
const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
  uz: {
    translation: uzLang,
  },
};

i18n
  .use(initReactI18next) // React uchun i18nextni integratsiya qilish
  .init({
    resources,
    lng: "en", // Boshlang'ich tilni inglizcha qilish
    fallbackLng: "en", // Agar til mavjud bo'lmasa, ingliz tilini tanlash
    interpolation: {
      escapeValue: false, // React XSS hujumlariga qarshi xavfsiz
    },
  });

export default i18n;
