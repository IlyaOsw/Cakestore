import React from "react";
import "./Price.scss";
import Cake from "./Cake/Cake";
import Bento from "./Bento/Bento";
import Delivery from "./Delivery/Delivery";
import Cupcake from "./Cupcake/Cupcake";
import Animation from "../../common/Animation";

const Price: React.FC = () => {
  return (
    <div className="container">
      <Animation />
      <Cake />
      <Bento />
      <Cupcake />
      <Delivery />
    </div>
  );
};

export default Price;
