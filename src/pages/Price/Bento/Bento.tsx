import React from "react";
import "../Price.scss";
import { useTranslation } from "react-i18next";

const Bento: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bento-title animation_item item hr mt-5">
        <h1 className="fs-1">{t("bento")}</h1>
      </div>
      <div className="bento mt-5">
        <div className="bento_description">
          <div>
            <div className="animation_item item">
              <h2 className="fs-2 subtitle">{t("fill")}</h2>
              <ul className="fs-3">
                <li>{t("berry")}</li>
                <ul className="fs-4">{t("berries")}</ul>
                <li>{t("peach")}</li>
                <li>{t("snikers")}</li>
                <li>{t("nutella")}</li>
                <li>{t("cherry")}</li>
                <li>{t("banana")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bento_price">
          <div>
            <div className="animation_item item">
              <h2 className="fs-2 subtitle">{t("price")}</h2>
              <ul className="fs-3">
                <li>{t("bento10")}</li>
                <li>{t("bento13")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bento;
