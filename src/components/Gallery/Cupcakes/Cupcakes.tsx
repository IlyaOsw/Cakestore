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
    cupcakes
      .reverse()
      .map((item) => (
        <img
          src={
            process.env.PUBLIC_URL + `/images/gallerycupcake/${item.label}.jpg`
          }
          alt={item.label}
          key={item.id}
          data-bs-toggle="modal"
          data-bs-target={`#cupcakeModal${item.id}`}
        />
      ));
  const getCupcakesModal = () =>
    cupcakes.map((item) => (
      <div
        className="modal fade"
        id={`cupcakeModal${item.id}`}
        tabIndex={-1}
        aria-hidden="true"
        key={`cupcakeModal${item.id}`}
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
                  `/images/gallerycupcake/${item.label}.jpg`
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
      <h2 className="gallery-title fs-1">{t("cupcake")}</h2>
      <div className="gallery-images">{getCupcakes()}</div>
      {getCupcakesModal()}
    </div>
  );
};

export default Cupcakes;
