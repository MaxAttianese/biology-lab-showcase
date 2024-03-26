import React from "react";
import image from "../../../../images/icons/attianese-logo.png";
import { resources } from "../../../../i18n";
import { useTranslation } from "react-i18next";
import style from './header.module.css';


const Header = ({lng}) => {
  const {t} = useTranslation();
  return (
    <>
      <header className={style.container}>
        <div className={style.overlay}>
          <div className={style.section}>
            <img
              src={image}
              alt="Logo Attianese Lab."
              className={`${style.header_img} ${style.img}`}
            />
            <hgroup>
              <h1 className={style.blue_hover}>Attianese Lab.</h1>
              <h5 className={style.red_hover}>
                {t(resources[lng].traslation.Ruolo)} Yvonne Attianese
              </h5>
            </hgroup>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
