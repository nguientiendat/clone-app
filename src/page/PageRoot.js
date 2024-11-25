import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Body from "../components/body/Body.js";
function PageRoot() {
  return (
    <>
      <div className="pageroot-header">
        <Header />
      </div>
      <div className="pageroot-body">
        <Body />
      </div>
      <div className="pageroot-footer">
        <Footer />
      </div>
    </>
  );
}
export default PageRoot;
