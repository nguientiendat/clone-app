import logo from "../../assets/images/logo.png"; // Import logo
import BarMenu from "./BarMenu";
import Search from "./SearchMenu";
function MainHeader() {
  return (
    <div id="main-header">
      <div class="main-header">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" id="logoHeader" />
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
