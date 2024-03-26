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

const Footer = ({lng, setLng}) => {

  const {t} = useTranslation();
  const switchLanguage = (lng)=>{
    i18n.changeLanguage(lng);
    sessionStorage.setItem("lng", lng);
    setLng(lng)
  }

  return (
    <>
      <footer className="container">
        <div className="section">
          <div>
            <div className="footer-title">
              <img
                src={image}
                alt="Logo Attianese Lab"
                className="footer-img img"
              />
              <hgroup>
                <h4 className="blue-hover">Attianese Lab.</h4>
                <h5 className='red-hover'>{t(resources[lng].traslation.Ruolo)} Yvonne Attianese</h5>
              </hgroup>
            </div>
            <div className="footer-flags">
              <button
                type="click"
                className={
                  lng === "it" ? "button-flag selected-language" : "button-flag"
                }
                onClick={() => {
                  switchLanguage("it");
                }}
              >
                <img
                  src={it}
                  alt="Bandiera Italiana / It Flag"
                  className="flag-icon"
                />
              </button>
              <button
                type="click"
                className={
                  lng === "en" ? "button-flag selected-language" : "button-flag"
                }
                onClick={() => {
                  switchLanguage("en");
                }}
              >
                <img
                  src={en}
                  className="flag-icon"
                  alt="Bandiera Inghilterra / En Flag"
                />
              </button>
            </div>
          </div>

          <address>
            <h5>{t(resources[lng].traslation.Contatti)}</h5>
            <p>
              <MdPhoneAndroid className="icon" />{" "}
              <a href="tel:+393922241233">(+39) 392 224 1233</a>
            </p>
            <p>
              <MdAttachEmail className="icon" />{" "}
              <a href="mailto:yvonneattianese@gmail.com">
                yvonneattianese@gmail.com
              </a>
            </p>
            <p>
              <IoMailUnreadSharp className="icon" />
              <a href="mailto:yvonneattianese@pec.it">yvonneattianese@pec.it</a>
            </p>
            <p>
              <FaMapPin className="icon" />{" "}
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
