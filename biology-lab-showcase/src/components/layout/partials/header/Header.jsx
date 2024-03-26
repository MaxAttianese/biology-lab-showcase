import React from "react";
import image from "../../../../images/icons/attianese-logo.png";
import { resources } from "../../../../i18n";
import { useTranslation } from "react-i18next";

const Header = ({lng}) => {
  const {t} = useTranslation();
  return (
    <>
      <header className="container">
        <div className="overlay">
          <div className="section">
            <img src={image} alt="Logo Attianese Lab." className="header-img img" />
            <hgroup>
              <h1 className="blue-hover">Attianese Lab.</h1>
              <h5 className="red-hover">{t(resources[lng].traslation.Ruolo)} Yvonne Attianese</h5>
            </hgroup>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
