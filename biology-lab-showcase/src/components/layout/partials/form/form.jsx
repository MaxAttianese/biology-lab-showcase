import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { resources } from "../../../../i18n";
import { useTranslation } from "react-i18next";
import style from './form.module.css';

const Form = ({ lng }) => {
  const { t } = useTranslation();
  const [isEmailSended, setIsEmailSended] = useState(false);
  const [isErrorInEmailSended, setIsErrorInEmailSended] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(t(resources[lng].traslation.Campo_Obbligatorio))
      .email(t(resources[lng].traslation.Email_Formato_Errato))
      .matches(
        /\.com$|\.it$/,
        t(resources[lng].traslation.Email_Formato_Errato)
      ),
    subject: yup
      .string()
      .required(t(resources[lng].traslation.Campo_Obbligatorio)),
    text: yup
      .string()
      .required(t(resources[lng].traslation.Campo_Obbligatorio)),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:8080/invio-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setIsEmailSended(true);
          setTimeout(() => {
            setIsEmailSended(false);
          }, 3000);
          reset();
        } else {
          console.error("Errore nell'invio dell'email!");
          setIsErrorInEmailSended(true);
          setTimeout(() => {
            setIsErrorInEmailSended(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Errore di rete o di server!");
        setIsErrorInEmailSended(true);
        setTimeout(() => {
          setIsErrorInEmailSended(false);
        }, 3000);
      });
  };
  return (
    <>
      <div className={style.form_border}></div>
      <section className={style.form_section}>
        <div className={style.overlay}>
          {isEmailSended && (
            <p className={style.form_success}>
              {t(resources[lng].traslation.Successo_Invio_Email)}
            </p>
          )}
          {isErrorInEmailSended && (
            <p className={style.form_error}>
              {t(resources[lng].traslation.Errore_Invio_Email)}
            </p>
          )}
          <div className={style.form_container}>
            <h2>{t(resources[lng].traslation.Contattaci)}</h2>
            <div>
              <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.input_flex}>
                  <div>
                    {" "}
                    <label htmlFor="email">Email</label>
                    {errors.email && (
                      <span className={style.input_error}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <input
                    id="email"
                    {...register("email")}
                    placeholder={t(resources[lng].traslation.Placeholder_Email)}
                    autoComplete="off"
                  />
                </div>
                <div className={style.input_flex}>
                  <div>
                    <label htmlFor="subject">
                      {t(resources[lng].traslation.Oggetto)}
                    </label>{" "}
                    {errors.subject && (
                      <span className={style.input_error}>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <input
                    id="subject"
                    {...register("subject")}
                    placeholder={t(
                      resources[lng].traslation.Placeholder_Oggetto
                    )}
                    autoComplete="off"
                  />
                </div>
                <div className={style.input_flex}>
                  <div>
                    <label htmlFor="text">
                      {" "}
                      {t(resources[lng].traslation.Testo)}
                    </label>{" "}
                    {errors.text && (
                      <span className={style.input_error}>
                        {errors.text.message}
                      </span>
                    )}
                  </div>
                  <textarea
                    id="text"
                    {...register("text")}
                    autoComplete="off"
                    rows={5}
                    placeholder={t(resources[lng].traslation.Placeholder_Testo)}
                  />
                </div>
                <button type="submit">
                  {t(resources[lng].traslation.Invia)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className={style.form_border}></div>
    </>
  );
};

export default Form;
