import React from "react";
import "./Price.scss";
import Cake from "./Cake/Cake";
import Bento from "./Bento/Bento";
import Delivery from "./Delivery/Delivery";
import Cupcake from "./Cupcake/Cupcake";

const Price: React.FC = () => {
  return (
    <div className="container">
      <Cake />
      <Bento />
      <Cupcake />
      <Delivery />
    </div>
  );
};

export default Price;
