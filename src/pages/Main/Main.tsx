import React from "react";
import "./Main.scss";
import Card from "./Card/Card";
import { useTranslation } from "react-i18next";
import Animation from "../../common/Animation";

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <Animation />
      <div className="block-title z-2">
        <p className="fs-1 animation_item item">{t("mainTitle")}</p>
        <br />
        <p className="fs-1 animation_item item">{t("mainTitle2")}</p>
      </div>
      <div className="block-image">
        <img
          src={process.env.PUBLIC_URL + `/images/cover.jpg`}
          className="main_image z-1"
          alt="Cover"
        />
      </div>
      <div className="container">
        <Card />
      </div>
    </div>
  );
};

export default Main;
