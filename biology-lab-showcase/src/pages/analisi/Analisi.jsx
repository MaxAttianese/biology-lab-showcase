import React from 'react';
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main';
import analisi from "../../images/analisi/analisi.jpg";
import { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

const Analisi = ({lng, setLng}) => {
  const {t} = useTranslation();
  return (
    <Layout
      lng={lng}
      setLng={setLng}
    >
      <Main
        title={t(resources[lng].traslation.Analisi)}
        servicesTitle={t(resources[lng].traslation.Servizi_Titolo)}
        services={[
          t(resources[lng].traslation.Servizi.Analisi.Uno),
          t(resources[lng].traslation.Servizi.Analisi.Due),
          t(resources[lng].traslation.Servizi.Analisi.Tre),
          t(resources[lng].traslation.Servizi.Analisi.Quattro),
          t(resources[lng].traslation.Servizi.Analisi.Cinque),
        ]}
        imgUrl={analisi}
        imgAlt="Immagine Sezione Analisi / Analyses Section Image"
        variant="left"
      />
    </Layout>
  );
}

export default Analisi