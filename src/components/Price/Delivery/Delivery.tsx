import React from "react";
import "../Price.scss";
import { useTranslation } from "react-i18next";

const Delivery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="information mt-5">
        <div className="fs-4">
          <p className="fs-2 subtitle">{t("order")}</p>
          <p>{t("myself")}</p>
          <p>{t("deliveryPrice")}</p>
          <br />
        </div>
        <div className="fs-4 red">
          <p>{t("PS")}</p>
          <p>
            {t("prepayment1")}
            <br />
            {t("prepayment2")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Delivery;
