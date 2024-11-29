import React from "react";
import SideBar from "../components/body/SideBar.js";
import ListItem from "../components/body/ListItem";
function Dragonball() {
  return (
    <>
      <div className="body-page">
        <div className="banner-dragonball"></div>
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

export default Dragonball;
