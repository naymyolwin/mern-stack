import React from "react";
import HeaderComp from "./partial/HeaderComp";
import FooterComp from "./partial/FooterComp";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <HeaderComp />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <FooterComp />
      </footer>
    </div>
  );
};

export default DefaultLayout;
