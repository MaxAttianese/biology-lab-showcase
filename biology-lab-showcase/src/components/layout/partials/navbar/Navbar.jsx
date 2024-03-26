import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLinksModel from "../../../../models/NavLinksModel";
import { resources } from "../../../../i18n";
import { useTranslation } from "react-i18next";
import style from './navbar.module.css'

const Navbar = ({ lng }) => {
  const { t } = useTranslation();
  
  const links = [
    new NavLinksModel("Analisi", "/analisi"),
    new NavLinksModel("Prelievo", "/prelievo"),
    new NavLinksModel("Nutrizione", "/nutrizione"),
    new NavLinksModel("Ricerca","/ricerca"),
  ];

  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    let path = location.pathname;
    changeCurrentPage(path);
  }, [location.pathname]);

  const changeCurrentPage = (link) => {
    setCurrentPage(link);
  };

  return (
    <nav>
      <div>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              className={
                currentPage === link.link
                  ? `${style.nav_link} ${style.link_current_page}`
                  : `${style.nav_link}`
              }
              id={link.name}
              to={link.link}
            >
              {t(resources[lng].traslation[link.name])}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
