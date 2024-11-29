// import Header from "../components/header/Header";
import "../styles/main.css";
import "../styles/submenu.css";
// import Body from "../components/body/Body";
// import Footer from "../components/footer/Footer";
import "../assets/css/bootstrap.min.css";
import "../styles/carousel.css";
import "../styles/ListItem.css";
import "../styles/pagination.css";
import "../styles/brand.css";
import "../styles/footer.css";
import Layout from "./Layout.js";
import { Routes, Route } from "react-router";
import Uudai from "../page/Uudai.js";
import Shop from "../page/Shop.js";

import { ToastContainer, toast } from "react-toastify";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import PageRoot from "../page/PageRoot.js";
import "../styles/uudai.css";
import Productdetail from "../page/Productdetail.js";
import "../styles/productdetail.css";
import Dragonball from "../page/Dragonball.js";
import Aboutus from "../page/Aboutus.js";
// import Search from "../components/header/SearchMenu.js";
import LoginUser from "../page/LoginUser.js";
import "../styles/loginuser.css";
import Bag from "../page/Bag.js";

// import {}
const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      toast(
        <div className="pop-up">
          <div className="pop-up-img">
            <img src="https://bizweb.dktcdn.net/100/369/010/products/1-fcf0bd22-079f-4ae0-9b78-02af66124504.jpg?v=1726824429843" />
          </div>
          <div className="pop-up-text">
            <p>
              {" "}
              <strong>DC | DBZ GOKU SS KEYCHAIN</strong>
              <br />
              Vừa được bán cách đây 5 phút 🎉
            </p>
          </div>
        </div>,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }, 10000000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageRoot />} />
          <Route path="uu-dai" element={<Uudai />} />
          <Route path=":id/product" element={<Productdetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="dragonball" element={<Dragonball />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="user" element={<LoginUser />} />
          <Route path="bag" element={<Bag />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
