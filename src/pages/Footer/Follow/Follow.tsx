import React from "react";
import { useTranslation } from "react-i18next";
import "../Footer.scss";

const Follow: React.FC = () => {
  const { t } = useTranslation();
  enum SocialLinks {
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    TELEGRAM = "Telegram",
  }
  const links: { id: number; url: string; label: SocialLinks }[] = [
    {
      id: 2,
      url: "https://www.facebook.com/annycakestore",
      label: SocialLinks.FACEBOOK,
    },
    {
      id: 3,
      url: "https://www.instagram.com/anny_cakestore/",
      label: SocialLinks.INSTAGRAM,
    },
    {
      id: 4,
      url: "https://t.me/ann4ous",
      label: SocialLinks.TELEGRAM,
    },
  ];
  const getLinks = (): JSX.Element[] =>
    links.map((link) => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3"
        key={link.id}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/${link.label}.svg`}
          alt={`${link.label} icon`}
          className="social_icon"
        />
      </a>
    ));
  return <div className="links z-3">{getLinks()}</div>;
};

export default Follow;
