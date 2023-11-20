import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Particle from "./common/Particle";
import translationEN from "./locales/en/translation.json";
import translationEE from "./locales/ee/translation.json";
import translationRU from "./locales/ru/translation.json";
import { HashRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ee: { translation: translationEE },
    ru: { translation: translationRU },
  },
  lng: "ee",
  fallbackLng: "ee",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Particle />
    </HashRouter>
  </React.StrictMode>
);
