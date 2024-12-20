import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Body from "../components/body/Body.js";

const Layout = () => {
  return (
    <>
      <div clssName="layout-header">
        <Header />
      </div>
      <div clssName="layout-body">
        <Outlet />
      </div>
      <div clssName="layout-footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
