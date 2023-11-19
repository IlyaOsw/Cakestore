import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
// import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  // const [state] = useForm("xrgwkbqk");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <>
      <div className="block-contact container">
        <div className="contact-info z-2">
          <form
            method="POST"
            id="form"
            action="https://formspree.io/f/xrgwkbqk"
          >
            <div className="contact-about fs-4">
              <p className="mt-3 fw-bolder item-name">
                {t("name")}
                <br></br>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="line"
                  placeholder={t("your_name")}
                ></input>
              </p>
              <p className="mt-3 fw-bolder item-mail">
                {t("email")}
                <br></br>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="line"
                  placeholder={t("your_mail")}
                ></input>
                {/* <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                /> */}
              </p>
            </div>
            <div className="contact-textarea fs-4 mt-5 fw-bolder">
              <p className="item">{t("message")}</p>
              <label htmlFor="formText"></label>
              <textarea
                id="message"
                name="message"
                className="line item"
                placeholder={t("your_message")}
              ></textarea>
              {/* <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              /> */}
            </div>
            <div className="contact-send mt-5">
              <button
                type="submit"
                // disabled={state.submitting}
                value="Send Email"
                className="fw-bold"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
        <div className="image z-1">
          <img
            src={process.env.PUBLIC_URL + `/images/ContactImage.jpg`}
            alt="Cake image"
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
