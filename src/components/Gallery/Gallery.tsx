import React from "react";
import "./Gallery.scss";
import Cakes from "./Cakes/Cakes";
import Bento from "./Bento/Bento";
import Cupcakes from "./Cupcakes/Cupcakes";

const Gallery: React.FC = () => {
  return (
    <div className="container">
      <Cakes />
      <Bento />
      <Cupcakes />
    </div>
  );
};

export default Gallery;
