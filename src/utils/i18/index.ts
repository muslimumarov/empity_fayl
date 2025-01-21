// utils/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from "../locales/en.json";
import frLang from "../locales/fr.json";
import uzLang from "../locales/uz.json";

// Tarjima fayllari
const resources = {
  en: {
    translation: enLang
  },
  fr: {
    translation: frLang
  },
  uz: {
    translation: uzLang
  }
};

i18n
  .use(initReactI18next) // React uchun i18nextni integratsiya qilish
  .init({
    resources,
    fallbackLng: 'fr', // Agar til mavjud bo'lmasa, fransuz tilini tanlash
    lng: "fr", // Boshlang'ich tilni fransuzcha qilish

    interpolation: {
      escapeValue: false // React XSS hujumlariga qarshi xavfsiz
    }
  });

export default i18n;
