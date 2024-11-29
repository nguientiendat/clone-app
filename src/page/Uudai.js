import SideBar from "../components/body/SideBar.js";

import ListItem from "../components/body/ListItem";
function Uudai() {
  return (
    <>
      <div className="body-page">
        <div className="banner-uudai"></div>
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

export default Uudai;
