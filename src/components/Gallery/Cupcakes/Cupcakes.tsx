import React from "react";
import "../Gallery.scss";
import { useTranslation } from "react-i18next";

const Cupcakes: React.FC = () => {
  const { t } = useTranslation();
  enum Cupcake {
    CUPCAKE = "cupcake1",
    CUPCAKE2 = "cupcake2",
    CUPCAKE3 = "cupcake3",
    CUPCAKE4 = "cupcake4",
  }
  const cupcakes: { id: number; label: Cupcake }[] = [
    { id: 1, label: Cupcake.CUPCAKE },
    { id: 2, label: Cupcake.CUPCAKE2 },
    { id: 3, label: Cupcake.CUPCAKE3 },
    { id: 4, label: Cupcake.CUPCAKE4 },
  ];
  const getCupcakes = () =>
    cupcakes.map((item) => (
      <img
        src={
          process.env.PUBLIC_URL + `/images/gallerycupcake/${item.label}.jpg`
        }
        alt={item.label}
        key={item.id}
      />
    ));
  return (
    <div className="gallery-block">
      <h2 className="gallery-title fs-1">{t("cupcake")}</h2>
      <div className="gallery-images">{getCupcakes()}</div>
    </div>
  );
};

export default Cupcakes;
