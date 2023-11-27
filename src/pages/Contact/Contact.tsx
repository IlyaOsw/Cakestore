import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import Animation from "../../common/Animation";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [state] = useForm("xrgwkbqk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className="block-contact container">
        <Animation />
        <div className="contact-info z-2">
          <form
            method="POST"
            id="form"
            action="https://formspree.io/f/xrgwkbqk"
          >
            <div className="contact-about fs-4 mt-5">
              <div className="name-email-container animation_item item">
                <p className="fw-bolder item-name">
                  {t("name")}
                  <br />
                  <label htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="line"
                      placeholder={t("your_name")}
                    />
                  </label>
                </p>
                <p className="fw-bolder item-mail">
                  {t("email")}
                  <br />
                  <label htmlFor="email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="line"
                      placeholder={t("your_mail")}
                    />
                  </label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </p>
              </div>
              <div className="phone-container">
                <p className="fw-bolder item-phone animation_item item">
                  {t("phone")}
                  <br />
                  <label htmlFor="phone">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="line"
                      placeholder={t("your_phone")}
                    />
                  </label>
                </p>
              </div>
            </div>
            <div className="contact-textarea fs-4 mt-5 fw-bolder">
              <p className="animation_item item">{t("message")}</p>
              <label htmlFor="formText"></label>
              <textarea
                id="message"
                name="message"
                className="line animation_item item"
                placeholder={t("your_message")}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="contact-send mt-5">
              <button
                type="submit"
                disabled={state.submitting}
                value="Send Email"
                className="fw-bold animation_item item"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
        <div className="image mt-5 z-1">
          <img
            src={process.env.PUBLIC_URL + `/images/ContactImage.jpg`}
            alt="Cake image"
            className="animation_item"
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
