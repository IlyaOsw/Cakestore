import React from "react";
import "../Price.scss";
import { useTranslation } from "react-i18next";

const Cake: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="test">
      <div className="cake-title">
        <h1 className="fs-1">{t("cake")}</h1>
      </div>
      <div className="cakes mt-5">
        <div className="cakes_description">
          <div>
            <div>
              <h2 className="fs-2 subtitle">{t("choco")}</h2>
              <ul className="fs-3">
                <li>{t("snikers")}</li>
                <li>{t("mars")}</li>
                <li>{t("coffee")}</li>
                <li>{t("cherry")}</li>
              </ul>
            </div>
            <div>
              <h2 className="fs-2 subtitle mt-5">{t("FruitsBerries")}</h2>
              <ul className="fs-3">
                <li>{t("lemon")}</li>
                <li>{t("coconut")}</li>
                <li>{t("banana")}</li>
                <li>{t("carrot")}</li>
              </ul>
            </div>
            <div>
              <h2 className="fs-2 subtitle mt-5">{t("classic")}</h2>
              <ul className="fs-3">
                <li>{t("truffle")}</li>
                <li>{t("honey")}</li>
                <li>{t("kyiv")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cakes_price">
          <div>
            <div>
              <h2 className="fs-2 subtitle">{t("price")}</h2>
              <ul className="fs-3">
                <li>{t("cake1")}</li>
                <li>{t("cake2")}</li>
                <li>{t("cake3")}</li>
                <li>{t("cake4")}</li>
              </ul>
              <div className="fs-3 mt-5">
                <p>{t("cakePrice")}</p>
                <p>
                  {t("decor")}
                  <br />
                  {t("decor2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cake;
