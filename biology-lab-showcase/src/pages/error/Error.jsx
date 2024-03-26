import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../images/icons/attianese-logo.png";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

const Error = ({ setCurrentPage, lng }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("page", "Analisi");
      setCurrentPage("Analisi");
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <section className="container error">
      <div className="overlay">
        <div className="section error-content">
          <img
            src={image}
            alt="Logo Attianese Lab"
            className="error-img img"
          />
          <hgroup>
            <h1 className="blue-hover">Attianese Lab.</h1>
            <h5 className="red-hover">
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
