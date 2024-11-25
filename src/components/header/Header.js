import logo from "../../assets/images/logo.png"; // Import logo
import BarMenu from "./BarMenu";
import Search from "./SearchMenu";
import { Link } from "react-router";
function MainHeader() {
  return (
    <div id="main-header">
      <div className="main-header">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" id="logoHeader" />
          </Link>
        </div>
        <div className="navbar-bars">
          <BarMenu />
        </div>
        <div className="navbar-search">
          <Search />
        </div>
      </div>
    </div>
  );
}
export default MainHeader;
