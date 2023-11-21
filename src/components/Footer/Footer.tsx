import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import Follow from "./Follow/Follow";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="block-footer fs-4">
      <div className="d-sm-flex justify-content-around footer-contact mb-2">
        <div className="info z-3">
          <img
            src={process.env.PUBLIC_URL + `/images/Location.png`}
            alt="Location"
          />
          <a
            href="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%80%D1%82%D1%83/@58.3752523,26.6503333,12z/data=!4m6!3m5!1s0x46eb36d8d55d3df7:0x400b36d18fc6d10!8m2!3d58.377983!4d26.7290383!16zL20vMDdzYjE?entry=ttu"
            target="_blank"
            className="line"
          >
            {t("location")}
          </a>
        </div>
        <div className="info z-3 ms-1">
          <img
            src={process.env.PUBLIC_URL + `/images/Phone.png`}
            alt="Phone"
            className="mb-1"
          />
          <a href="tel:+37256268892" className="line phone_link">
            +372-5626-8892
          </a>
        </div>
        <Follow />
      </div>
      <div className="footer-copyright pb-4 z-3">
        <a
          href="https://www.linkedin.com/in/ilyaosw/"
          target="_blank"
          className="line"
        >
          2023 Made by Ilja Ossipov. ©
        </a>
      </div>
    </div>
  );
};

export default Footer;
