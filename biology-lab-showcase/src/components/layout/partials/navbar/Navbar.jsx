import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinksModel from "../../../../models/NavLinksModel";
import { resources } from "../../../../i18n";
import { useTranslation } from "react-i18next";

const Navbar = ({ currentPage, setCurrentPage, lng }) => {
  const { t } = useTranslation();
  
  const links = [
    new NavLinksModel("Analisi", "/analisi"),
    new NavLinksModel("Prelievo", "/prelievo"),
    new NavLinksModel("Nutrizione", "/nutrizione"),
    new NavLinksModel("Ricerca","/ricerca"),
  ];

  useEffect(() => {
    if (!sessionStorage.getItem("page")) {
      let link = links.find(
        (element) => element.link === window.location.pathname
      );
      changeCurrentPage(link ? link.name : "");
    }
  }, []);

  const changeCurrentPage = (link) => {
    sessionStorage.setItem("page", link);
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
                currentPage === link.name
                  ? "nav-link link-current-page"
                  : "nav-link"
              }
              id={link.name}
              to={link.link}
              onClick={() => {
                changeCurrentPage(link.name);
              }}
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
