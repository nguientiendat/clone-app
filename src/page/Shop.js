import React from "react";
import SideBar from "../components/body/SideBar.js";

import ListItem from "../components/body/ListItem";
function Shop() {
  return (
    <>
      <div className="body-page">
        <div className="banner-shop"></div>
        <div className="container">
          <SideBar />
          <div className="list-item">
            <ListItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
