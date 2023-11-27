import React from "react";
import { useTranslation } from "react-i18next";
import "../Header.scss";

const Language: React.FC = () => {
  const { t, i18n } = useTranslation();
  enum Locales {
    EE = "ee",
    RU = "ru",
    EN = "en",
  }
  const changeLanguage = (language: Locales): void => {
    i18n.changeLanguage(language);
  };
  const languageItems: { id: number; label: Locales }[] = [
    { id: 1, label: Locales.EE },
    { id: 2, label: Locales.RU },
    { id: 3, label: Locales.EN },
  ];
  const getLanguages = (): JSX.Element[] =>
    languageItems.map((lang) => (
      <li key={lang.id} data-bs-dismiss="offcanvas">
        <button
          className="dropdown-item"
          type="button"
          onClick={() => changeLanguage(lang.label)}
        >
          <img
            className="icon"
            src={process.env.PUBLIC_URL + `/images/${lang.label}.png`}
            alt={lang.label}
          />{" "}
          {t(lang.label)}
        </button>
      </li>
    ));

  return (
    <div className="dropdown mt-1">
      <button
        className="btn dropdown-toggle fs-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="language_icon"
          src={process.env.PUBLIC_URL + `/images/language.png`}
          alt="Language icon"
        />
        {t("language")}
      </button>
      <ul className="dropdown-menu fs-5">{getLanguages()}</ul>
    </div>
  );
};

export default Language;
