import ListItem from "./ListItem.js";
import UncontrolledExample from "./Carousels.js";
import Row from "./Row.js";
import CustomPagination from "./CustomPagination.js";

function Body() {
  const style_container = {
    boxSizing: "border-box",
    width: "100%",
  };
  return (
    <div>
      <UncontrolledExample />
      <div className="container" style={style_container}>
        <div>
          <Row />
        </div>
        <div>
          <ListItem />
        </div>
        {/* <div>
          <div>
            <CustomPagination />
          </div>
        </div> */}
        <div>
          <div className="container">
            <div className="product-list-two">
              <div>
                <a href="">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/xxx_6.jpg?1732267102456" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/xxx_7.jpg?1732267102456" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Row />
          </div>
          <div className="container">
            <div>
              <div class="product-list">
                <div className="product-item brand">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/brand1.png?1732330303615" />
                </div>
                <div className="product-item brand">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/brand4.png?1732330303615" />
                </div>
                <div className="product-item brand">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/brand6.png?1732330303615" />
                </div>
                <div className="product-item brand">
                  <img src="//bizweb.dktcdn.net/100/369/010/themes/914385/assets/brand7.png?1732330303615" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotline">
        <i class="fa-solid fa-phone"></i>
        <h4 className="line-hotline">
          Hỗ trợ / Mua hàng <a href="">0933 800 190</a>
        </h4>
      </div>
    </div>
  );
}
export default Body;
