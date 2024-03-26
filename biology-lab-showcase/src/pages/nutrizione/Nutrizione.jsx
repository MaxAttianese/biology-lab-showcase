import React from 'react';
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main';
import nutrizione from "../../images/nutrizione/nutrizione.jpg";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

const Nutrizione = ({ currentPage, setCurrentPage, lng, setLng }) => {
  const { t } = useTranslation();
  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lng={lng}
      setLng={setLng}
    >
      <Main
        title={t(resources[lng].traslation.Nutrizione)}
        servicesTitle={t(resources[lng].traslation.Servizi_Titolo)}
        services={[
          t(resources[lng].traslation.Servizi.Nutrizione.Uno),
          t(resources[lng].traslation.Servizi.Nutrizione.Due),
          t(resources[lng].traslation.Servizi.Nutrizione.Tre),
          t(resources[lng].traslation.Servizi.Nutrizione.Quattro)
        ]}
        imgUrl={nutrizione}
        imgAlt="Foto Sezione Nutrizione/ Nutrition Section Image"
        variant="left"
      />
    </Layout>
  );
};

export default Nutrizione
