import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Analisi from "./pages/analisi/Analisi";
import Prelievo from "./pages/prelievo/Prelievo";
import Nutrizione from "./pages/nutrizione/Nutrizione";
import Ricerca from "./pages/ricerca/Ricerca";
import Error from "./pages/error/Error";

const Router = () => {
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("page")
  );

  const [lng, setLng] = useState(sessionStorage.getItem("lng") || "it");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/analisi" />} />
        <Route
          path="/analisi"
          element={
            <Analisi
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/prelievo"
          element={
            <Prelievo
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/nutrizione"
          element={
            <Nutrizione
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="/ricerca"
          element={
            <Ricerca
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lng={lng}
              setLng={setLng}
            />
          }
        />
        <Route
          path="*"
          element={<Error setCurrentPage={setCurrentPage} lng={lng} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
