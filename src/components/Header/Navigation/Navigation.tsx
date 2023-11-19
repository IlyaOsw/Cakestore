import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  enum Links {
    ABOUT = "about",
    GALLERY = "gallery",
    PRICE = "price",
    CONTACT = "contact",
  }
  const headerItems: { id: number; label: Links }[] = [
    { id: 1, label: Links.ABOUT },
    { id: 2, label: Links.GALLERY },
    { id: 3, label: Links.PRICE },
    { id: 4, label: Links.CONTACT },
  ];
  const getHeaders = (): JSX.Element[] =>
    headerItems.map((item) => (
      <li className="nav-item ms-3" key={item.id}>
        <NavLink className="nav-link" to={`/${item.label}`}>
          {t(item.label)}
        </NavLink>
      </li>
    ));

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      {getHeaders()}
      <li className="nav-item ms-3">
        <NavLink className="nav-link" to="/">
          {t("main")}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
