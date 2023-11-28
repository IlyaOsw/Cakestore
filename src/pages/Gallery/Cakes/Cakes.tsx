import React from "react";
import "../Gallery.scss";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";

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
    CAKE13 = "cake13",
    CAKE14 = "cake14",
    CAKE15 = "cake15",
    CAKE16 = "cake16",
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
    { id: 13, label: Cakes.CAKE13 },
    { id: 14, label: Cakes.CAKE14 },
    { id: 15, label: Cakes.CAKE15 },
    { id: 16, label: Cakes.CAKE16 },
  ];
  const getCakes = () =>
    cakes
      .reverse()
      .map((item) => (
        <img
          src={process.env.PUBLIC_URL + `/images/gallerycake/${item.label}.jpg`}
          alt={item.label}
          key={item.id}
          data-bs-toggle="modal"
          data-bs-target={`#cakeModal${item.id}`}
          className="animation_item"
        />
      ));
  const getCakesModal = () =>
    cakes.map((item) => (
      <div
        className="modal fade"
        id={`cakeModal${item.id}`}
        tabIndex={-1}
        aria-hidden="true"
        key={`cakeModal${item.id}`}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-2 shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img
                className="d-block w-100 h-100"
                src={
                  process.env.PUBLIC_URL +
                  `/images/gallerycake/${item.label}.jpg`
                }
                alt={item.label}
              />
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <div className="gallery-block">
      <h2 className="gallery-title fs-1 animation_item item">{t("cake")}</h2>
      <div className="gallery-images">{getCakes()}</div>
      {getCakesModal()}
    </div>
  );
};

export default Cakes;
