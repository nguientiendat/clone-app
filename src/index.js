// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./views/index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <BrowserRouter>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
