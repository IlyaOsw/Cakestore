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
    <div className="container gallery">
      <img
        src={process.env.PUBLIC_URL + `/images/coverContent.jpg`}
        alt="Cover"
        className="cover_image"
      />
      <Animation />
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
