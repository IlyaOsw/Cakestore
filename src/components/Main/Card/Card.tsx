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
      <NavLink to={"/gallery"} className="card mt-3" key={el.id}>
        <div className="card-body">
          <p className="card-title fs-3">{t(el.label)}</p>
          <p className="card-text fs-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + `/images/${el.label}.jpg`}
          className="card-img-top"
          alt={el.label}
        />
      </NavLink>
    ));

  return <div className="items-card d-sm-flex mb-5">{getCards()}</div>;
};

export default Card;
