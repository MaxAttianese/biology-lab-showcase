import React from 'react';
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main';
import prelievo from "../../images/prelievo/prelievo.jpg";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

const Prelievo = ({ lng, setLng }) => {
  const { t } = useTranslation();
  return (
    <Layout
      lng={lng}
      setLng={setLng}
    >
      <Main
        title={t(resources[lng].traslation.Prelievo)}
        servicesTitle={t(resources[lng].traslation.Servizi_Titolo)}
        services={[
          t(resources[lng].traslation.Servizi.Prelievo.Uno),
          t(resources[lng].traslation.Servizi.Prelievo.Due),
        ]}
        imgUrl={prelievo}
        imgAlt="Immagine Sezione Prelievo / Sample Section Image"
        variant="right"
      />
    </Layout>
  );
};

export default Prelievo
