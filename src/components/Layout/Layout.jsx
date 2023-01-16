import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
