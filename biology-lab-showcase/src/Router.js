import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Analisi from "./pages/analisi/Analisi";
import Prelievo from "./pages/prelievo/Prelievo";
import Nutrizione from "./pages/nutrizione/Nutrizione";
import Ricerca from "./pages/ricerca/Ricerca";
import Error from "./pages/error/Error";

const Router = () => {

  const [lng, setLng] = useState(sessionStorage.getItem("lng") || "it");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/analisi" />} />
        <Route
          path="/analisi"
          element={
            <Analisi
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/prelievo"
          element={
            <Prelievo
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/nutrizione"
          element={
            <Nutrizione
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/ricerca"
          element={
            <Ricerca
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="*"
          element={<Error lng={lng} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
