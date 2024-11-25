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
import PageRoot from "../page/PageRoot.js";
// import {}
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageRoot />} />
          <Route path="uu-dai" element={<Uudai />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
