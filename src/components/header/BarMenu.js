import { Link } from "react-router";
function BarMenu() {
  return (
    <ul id="subMenu">
      <li className="navbar offer">
        <Link to="uu-dai" className="compostitionParentmenu">
          ƯU ĐÃI
        </Link>
        <ul className="submenu">
          <li className="compostitionSubmenu">
            <Link to="mua-2-tang-1">Mua 2 tặng 1</Link>
          </li>
        </ul>
      </li>
      <li className="navbar shop">
        <Link to="shop" className="compostitionParentmenu">
          SHOP
        </Link>
        <ul className="submenu">
          <li className="compostitionSubmenu">
            <Link to="tops">TOPS</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="bottoms">BOTTOMS</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="accessories">ACCESSORIES</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="bags">BAGS</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="womenswear">WOMENSWEAR</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="restock">RESTOCKS</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="combo">COMBO</Link>
          </li>
        </ul>
      </li>
      <li className="navbar ft">
        <Link to="dragonball" className="compostitionParentmenu">
          DRAGON BALL'Z
        </Link>
        <ul className="submenu">
          <li className="compostitionSubmenu">
            <Link to="dbz-tops">DBZ-TOPS</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="dbz-outerwear">DBZ-OUTERWEAR</Link>
          </li>
          <li className="compostitionSubmenu">
            <Link to="dbz-goku">DBZ-GOKU</Link>
          </li>
        </ul>
      </li>
      <li className="navbar contact">
        <Link to="contact" className="compostitionParentmenu">
          CONTACT
        </Link>
      </li>
      <li className="navbar aboutus">
        <Link to="aboutus" className="compostitionParentmenu">
          ABOUT US
        </Link>
      </li>
    </ul>
  );
}

export default BarMenu;
