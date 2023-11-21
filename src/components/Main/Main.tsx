import React from "react";
import "./Main.scss";
import Card from "./Card/Card";

const Main: React.FC = () => {
  return (
    <div className="container-fluid">
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
