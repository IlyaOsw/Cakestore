import React from "react";
import "../Gallery.scss";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinks: React.FC = () => {
  const { t } = useTranslation();
  enum ScrollLinks {
    CAKE = "cake",
    BENTO = "bento",
    CUPCAKE = "cupcake",
  }
  const Links: { id: number; label: ScrollLinks }[] = [
    { id: 1, label: ScrollLinks.CAKE },
    { id: 2, label: ScrollLinks.BENTO },
    { id: 3, label: ScrollLinks.CUPCAKE },
  ];
  const getLinks = () =>
    Links.map((el) => (
      <ScrollLink
        key={el.id}
        to={`${el.label}`}
        smooth={true}
        duration={200}
        className="gallery_links fs-4 animation_item item"
      >
        <img
          src={process.env.PUBLIC_URL + `/images/arrowRight.png`}
          alt="Arrow right"
        />
        {t(`${el.label}`)}
      </ScrollLink>
    ));
  return (
    <div className="fs-2 d-flex justify-content-around mb-4 animation_item item">
      {getLinks()}
    </div>
  );
};

export default ScrollLinks;
