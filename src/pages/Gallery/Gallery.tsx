import React from "react";
import "./Gallery.scss";
import Cakes from "./Cakes/Cakes";
import Bento from "./Bento/Bento";
import Cupcakes from "./Cupcakes/Cupcakes";
import { useTranslation } from "react-i18next";
import ScrollLinks from "./ScrollLinks/ScrollLinks";
import Animation from "../../common/Animation";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Animation />
      <div className="gallery-title">
        <h1 className="animation_item item">{t("gallery")}</h1>
      </div>
      <ScrollLinks />
      <div id="cake">
        <Cakes />
      </div>
      <div id="bento">
        <Bento />
      </div>
      <div id="cupcake">
        <Cupcakes />
      </div>
    </div>
  );
};

export default Gallery;
