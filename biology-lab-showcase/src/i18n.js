import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import traslationIT from "./locales/it/translation.json";
import traslationEn from "./locales/en/translation.json";


export const resources = {
  it: {
    traslation: traslationIT,
  },
  en: {
    traslation: traslationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem("lng") || "it",
  fallback: sessionStorage.getItem("lng") || "it",
  interpolation: {
    escapeValue: false,
  },
});

sessionStorage.setItem("lng", i18n.language);


export default i18n;
