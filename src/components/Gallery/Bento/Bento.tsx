import React from "react";
import "../Gallery.scss";
import { useTranslation } from "react-i18next";

const Bento: React.FC = () => {
  const { t } = useTranslation();
  enum Bento {
    BENTO1 = "bento1",
    BENTO2 = "bento2",
    BENTO3 = "bento3",
    BENTO4 = "bento4",
    BENTO5 = "bento5",
    BENTO6 = "bento6",
    BENTO7 = "bento7",
    BENTO8 = "bento8",
  }
  const bento: { id: number; label: Bento }[] = [
    { id: 1, label: Bento.BENTO1 },
    { id: 2, label: Bento.BENTO2 },
    { id: 3, label: Bento.BENTO3 },
    { id: 4, label: Bento.BENTO4 },
    { id: 5, label: Bento.BENTO5 },
    { id: 6, label: Bento.BENTO6 },
    { id: 7, label: Bento.BENTO7 },
    { id: 8, label: Bento.BENTO8 },
  ];
  const getBento = () =>
    bento
      .reverse()
      .map((item) => (
        <img
          src={
            process.env.PUBLIC_URL + `/images/gallerybento/${item.label}.jpg`
          }
          alt={item.label}
          key={item.id}
          data-bs-toggle="modal"
          data-bs-target={`#bentoModal${item.id}`}
        />
      ));
  const getBentoModal = () =>
    bento.map((item) => (
      <div
        className="modal fade"
        id={`bentoModal${item.id}`}
        tabIndex={-1}
        aria-hidden="true"
        key={`bentoModal${item.id}`}
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
                  `/images/gallerybento/${item.label}.jpg`
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
      <h2 className="gallery-title fs-1">{t("bento")}</h2>
      <div className="gallery-images">{getBento()}</div>
      {getBentoModal()}
    </div>
  );
};

export default Bento;
