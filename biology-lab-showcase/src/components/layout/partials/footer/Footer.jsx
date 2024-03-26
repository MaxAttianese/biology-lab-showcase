import React from 'react';
import image from "../../../../images/icons/attianese-logo.png";
import i18n from "i18next";
import { resources } from "../../../../i18n";
import { useTranslation } from 'react-i18next';
import { MdPhoneAndroid } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import en from '../../../../images/icons/flags/united-kingdom-flag-icon.png'
import it from "../../../../images/icons/flags/italy-flag-icon.png";
import style from "./footer.module.css";


const Footer = ({lng, setLng}) => {

  const {t} = useTranslation();
  const switchLanguage = (lng)=>{
    i18n.changeLanguage(lng);
    sessionStorage.setItem("lng", lng);
    setLng(lng)
  }

  return (
    <>
      <footer className={`${style.footer} ${style.container}`}>
        <div className={style.section}>
          <div>
            <div className={style.footer_title}>
              <img
                src={image}
                alt="Logo Attianese Lab"
                className={`${style.footer_img} ${style.img}`}
              />
              <hgroup>
                <h4 className={style.blue_hover}>Attianese Lab.</h4>
                <h5 className={style.red_hover}>
                  {t(resources[lng].traslation.Ruolo)} Yvonne Attianese
                </h5>
              </hgroup>
            </div>
            <div className={style.footer_flags}>
              <button
                type="click"
                className={
                  lng === "it"
                    ? `${style.button_flag} ${style.selected_language}`
                    : `${style.button_flag}`
                }
                onClick={() => {
                  switchLanguage("it");
                }}
              >
                <img
                  src={it}
                  alt="Bandiera Italiana / It Flag"
                  className={style.flag_icon}
                />
              </button>
              <button
                type="click"
                className={
                  lng === "en"
                    ? `${style.button_flag} ${style.selected_language}`
                    : `${style.button_flag}`
                }
                onClick={() => {
                  switchLanguage("en");
                }}
              >
                <img
                  src={en}
                  className={style.flag_icon}
                  alt="Bandiera Inghilterra / En Flag"
                />
              </button>
            </div>
          </div>

          <address>
            <h5>{t(resources[lng].traslation.Contatti)}</h5>
            <p>
              <MdPhoneAndroid className={style.icon} />{" "}
              <a href="tel:+393922241233">(+39) 392 224 1233</a>
            </p>
            <p>
              <MdAttachEmail className={style.icon} />{" "}
              <a href="mailto:yvonneattianese@gmail.com">
                yvonneattianese@gmail.com
              </a>
            </p>
            <p>
              <IoMailUnreadSharp className={style.icon} />
              <a href="mailto:yvonneattianese@pec.it">yvonneattianese@pec.it</a>
            </p>
            <p>
              <FaMapPin className={style.icon} />{" "}
              <span>
                {t(resources[lng].traslation.Via)} Cutro, 129 - Crotone (Kr)
              </span>
            </p>
          </address>
        </div>
      </footer>
    </>
  );
}

export default Footer
