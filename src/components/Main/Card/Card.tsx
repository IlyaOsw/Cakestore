import React from "react";
import "../Main.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Card: React.FC = () => {
  const { t } = useTranslation();
  enum Cards {
    CAKE = "cake",
    BENTO = "bento",
    CUPCAKE = "cupcake",
  }
  const cards: { id: number; label: Cards }[] = [
    { id: 1, label: Cards.CAKE },
    { id: 2, label: Cards.BENTO },
    { id: 3, label: Cards.CUPCAKE },
  ];
  const getCards = (): JSX.Element[] =>
    cards.map((el) => (
      <div className="card me-5 mt-4" key={el.id}>
        <h2 className="card-title pt-3">{t(el.label)} </h2>
        <div className="card-image">
          <NavLink to="/gallery">
            <img
              src={process.env.PUBLIC_URL + `/images/${el.label}.jpg`}
              alt={el.label}
            />
          </NavLink>
        </div>
      </div>
    ));

  return <div className="items-card d-sm-flex mb-5">{getCards()}</div>;
};

export default Card;
