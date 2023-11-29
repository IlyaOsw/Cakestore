import React from "react";
import "./Price.scss";
import Cake from "./Cake/Cake";
import Bento from "./Bento/Bento";
import Delivery from "./Delivery/Delivery";
import Cupcake from "./Cupcake/Cupcake";
import Animation from "../../common/Animation";

const Price: React.FC = () => {
  return (
    <div className="container-fluid background_price">
      <img
        src={process.env.PUBLIC_URL + `/images/coverGallery.jpg`}
        alt="Cover"
        className="cover_image"
      />
      <div className="container">
        <Animation />
        <Cake />
        <Bento />
        <Cupcake />
        <Delivery />
      </div>
    </div>
  );
};

export default Price;
