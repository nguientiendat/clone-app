import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Body from "../components/body/Body.js";

const Layout = () => {
  return (
    <div>
      <Header />

      <Body>
        <Outlet />
      </Body>

      <Footer />
    </div>
  );
};

export default Layout;
