import React, {useState} from "react";
import Header from "./partials/header/Header";
import Navbar from "./partials/navbar/Navbar";
import Footer from "./partials/footer/Footer";
import Form from "./partials/form/form";

const Layout = ({ currentPage, setCurrentPage , lng, setLng, children }) => {

  return (
    <>
      <Header lng={lng} />
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lng={lng}
      />
      {children}
      <Form lng={lng} />
      <Footer lng={lng} setLng={setLng} />
    </>
  );
};

export default Layout;
