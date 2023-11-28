import React from "react";
import "../Price.scss";
import { useTranslation } from "react-i18next";

const Cupcake: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="cupcake-title animation_item item">
        <h1 className="fs-1">{t("cupcake")}</h1>
      </div>
      <div className="cupcake mt-5">
        <div className="cupcake_description">
          <div>
            <div className="animation_item item">
              <h2 className="fs-2 subtitle">{t("fill")}</h2>
              <ul className="fs-3">
                <li>{t("berry")}</li>
                <ul className="fs-4">{t("berries")}</ul>
                <li>{t("chocolate")}</li>
                <li>{t("vanilla")}</li>
                <li>{t("snikers")}</li>
                <li>{t("banana")}</li>
                <li>{t("caramel")}</li>
                <li>{t("lemon")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cupcake_price">
          <div>
            <div className="animation_item item">
              <h2 className="fs-2 subtitle">{t("price")}</h2>
              <ul className="fs-3">
                <li>{t("piece")}</li>
                <li>{t("min4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cupcake;
