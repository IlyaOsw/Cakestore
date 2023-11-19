import React from "react";
import "../Gallery.scss";
import { useTranslation } from "react-i18next";

const Cakes: React.FC = () => {
  const { t } = useTranslation();
  enum Cakes {
    CAKE1 = "cake1",
    CAKE2 = "cake2",
    CAKE3 = "cake3",
    CAKE4 = "cake4",
    CAKE5 = "cake5",
    CAKE6 = "cake6",
    CAKE7 = "cake7",
    CAKE8 = "cake8",
    CAKE9 = "cake9",
    CAKE10 = "cake10",
    CAKE11 = "cake11",
    CAKE12 = "cake12",
  }
  const cakes: { id: number; label: Cakes }[] = [
    { id: 1, label: Cakes.CAKE1 },
    { id: 2, label: Cakes.CAKE2 },
    { id: 3, label: Cakes.CAKE3 },
    { id: 4, label: Cakes.CAKE4 },
    { id: 5, label: Cakes.CAKE5 },
    { id: 6, label: Cakes.CAKE6 },
    { id: 7, label: Cakes.CAKE7 },
    { id: 8, label: Cakes.CAKE8 },
    { id: 9, label: Cakes.CAKE9 },
    { id: 10, label: Cakes.CAKE10 },
    { id: 11, label: Cakes.CAKE11 },
    { id: 12, label: Cakes.CAKE12 },
  ];
  const getCakes = () =>
    cakes.map((item) => (
      <img
        src={process.env.PUBLIC_URL + `/images/gallerycake/${item.label}.jpg`}
        alt={item.label}
        key={item.id}
      />
    ));
  return (
    <div className="gallery-block">
      <h2 className="gallery-title fs-1">{t("cake")}</h2>
      <div className="gallery-images">{getCakes()}</div>
    </div>
  );
};

export default Cakes;
