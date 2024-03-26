import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../images/icons/attianese-logo.png";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";
import style from './error.module.css'

const Error = ({ lng }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <section className={`${style.error}`}>
      <div className={style.overlay}>
        <div className={`${style.section} ${style.error_content}`}>
          <img
            src={image}
            alt="Logo Attianese Lab"
            className={`${style.error_img} ${style.img}`}
          />
          <hgroup>
            <h1 className={style.blue_hover}>Attianese Lab.</h1>
            <h5 className={style.red_hover}>
              {t(resources[lng].traslation.Ruolo)} Yvonne Attianese
            </h5>
          </hgroup>
          <p>{t(resources[lng].traslation.Error_Page)}</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
