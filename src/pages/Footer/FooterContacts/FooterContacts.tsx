import React from "react";
import "../Footer.scss";
import { useTranslation } from "react-i18next";

const FooterContacts: React.FC = () => {
  const { t } = useTranslation();
  enum Contacts {
    LOCATION = "location",
    PHONE = "phone",
    MAIL = "mail",
  }
  const contacts: {
    id: number;
    label: Contacts;
    name: string;
    link: string;
  }[] = [
    {
      id: 1,
      label: Contacts.LOCATION,
      name: "location",
      link: "https://www.google.com/maps/place/%D0%A2%D0%B0%D1%80%D1%82%D1%83/@58.3752523,26.6503333,12z/data=!4m6!3m5!1s0x46eb36d8d55d3df7:0x400b36d18fc6d10!8m2!3d58.377983!4d26.7290383!16zL20vMDdzYjE?entry=ttu",
    },
    {
      id: 2,
      label: Contacts.PHONE,
      name: "+372-5626-8892",
      link: "tel:+37256268892",
    },
    {
      id: 3,
      label: Contacts.MAIL,
      name: "annalevina@gmail.com",
      link: "mailto: annalevina1803@gmail.com",
    },
  ];
  const getContacts = () =>
    contacts.map((el) => (
      <div className="info z-3 ms-1" key={el.id}>
        <img
          src={process.env.PUBLIC_URL + `/images/${el.label}.png`}
          alt={el.label}
          className="me-2"
        />
        <a href={el.link} className="line">
          {t(el.name)}
        </a>
      </div>
    ));
  return <>{getContacts()}</>;
};

export default FooterContacts;
