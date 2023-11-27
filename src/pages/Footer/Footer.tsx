import React from "react";
import "./Footer.scss";
import Follow from "./Follow/Follow";
import FooterContacts from "./FooterContacts/FooterContacts";
import Animation from "../../common/Animation";

const Footer: React.FC = () => {
  return (
    <div className="block-footer fs-4">
      <Animation />
      <div className="container d-sm-flex justify-content-between footer-contact mb-3 animation_item item">
        <FooterContacts />
        <Follow />
      </div>
      <div className="footer-copyright pb-4 z-3">
        <a
          href="https://www.linkedin.com/in/ilyaosw/"
          target="_blank"
          className="line animation_item item"
        >
          2023 Made by Ilja Ossipov. ©
        </a>
      </div>
    </div>
  );
};

export default Footer;
