import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import Language from "./Language/Language";
import Navigation from "./Navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container z-1">
        <NavLink to="/Cakestore" className="navbar-brand fs-3">
          <img
            className="logo_img me-3"
            src={process.env.PUBLIC_URL + `/images/AnnyCakestoreLogo.jpg`}
            alt="Logo"
          />
          <span>Anny Cakestore</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              {t("menu")}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fs-3">
            <Navigation />
            <Language />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
