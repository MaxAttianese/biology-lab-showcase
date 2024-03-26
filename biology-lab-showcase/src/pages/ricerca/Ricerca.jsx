import React from "react";
import Layout from "../../components/layout/Layout";
import Main from "../../components/main/Main";
import ricerca from "../../images/ricerca/ricerca.jpg";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

const Ricerca = ({ currentPage, setCurrentPage, lng, setLng }) => {
  const { t } = useTranslation();
  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lng={lng}
      setLng={setLng}
    >
      <Main
        title={t(resources[lng].traslation.Ricerca)}
        servicesTitle={t(resources[lng].traslation.Servizi_Titolo)}
        services={[
          t(resources[lng].traslation.Servizi.Ricerca.Uno),
          t(resources[lng].traslation.Servizi.Ricerca.Due),
          t(resources[lng].traslation.Servizi.Ricerca.Tre),
          t(resources[lng].traslation.Servizi.Ricerca.Quattro),
        ]}
        imgUrl={ricerca}
        imgAlt="Foto Sezione Ricerca / Research Section Image"
        variant="right"
      />
    </Layout>
  );
};

export default Ricerca;
