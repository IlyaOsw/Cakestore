import i18n, { InitOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const detectionOptions = {
  order: ["queryString", "cookie"],
  caches: ["cookie"],
};

// const initOptions: InitOptions = {
//   fallbackLng: "en",
//   // debug: true,
//   detection: detectionOptions,
//   interpolation: {
//     escapeValue: false,
//   },
// };

i18n.use(Backend).use(LanguageDetector).use(initReactI18next);

export default i18n;
