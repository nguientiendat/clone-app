import { Carousel } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import ListItem from "../components/body/ListItem";
import { useParams } from "react-router";
function Productdetail() {
  const [products, setProduct] = useState([]);
  const [selectedImgSrc, setSelectedImgSrc] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const { id } = useParams();
  const valueid = id;
  console.log(typeof +valueid);

  const handleClick = (index) => {
    console.log(`da click ${index}`);
    setActiveButton(index);
  };
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  const product = products.find((value) => {
    return value.id === +valueid;
  });
  function handleSelectImg() {
    const srcimg = document.querySelector(".img-src");
    // return
    srcimg?.addEventListener("click", () => {
      const valuesrcimg = srcimg.src;
      console.log(`da lay duoc src ${valuesrcimg}`);
      setSelectedImgSrc(valuesrcimg); // Lưu vào state
    });
  }
  handleSelectImg();
  console.log(selectedImgSrc);

  // cuon len dau trnag khi chon sản phẩm khác
  useEffect(() => {
    // Cuộn đến phần tử danh sách
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [valueid]);

  return (
    <>
      <div className="container">
        <div className="detail-product">
          <div className="detail-product-img" ref={listRef}>
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              indicators={true}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product?.src}
                  alt="Product"
                />
              </Carousel.Item>
            </Carousel>
            <div>
              <div className="list-img">
                <div className="list-img-src">
                  <img className="img-src" src={product?.src} />
                </div>
                <div className="list-img-src">
                  <img className="img-src" src={product?.src} />
                </div>
                <div className="list-img-src">
                  <img className="img-src" src={product?.src} />
                </div>
                <div className="list-img-src">
                  <img className="img-src" src={product?.src} />
                </div>
                <div className="list-img-src">
                  <img className="img-src" src={product?.src} />
                </div>
              </div>
            </div>
          </div>
          <div className="product-item product-item-detail">
            <p className="nameItem product product-name name-price">
              {product?.name}
            </p>
            <span>
              <p className="price-item product-price name-price">
                {product?.price}
              </p>
            </span>
            <div className="btn-size">
              <Button
                variant={activeButton === 0 ? "secondary" : "light"} // Nếu nút 0 được nhấn, dùng variant "primary"
                onClick={() => handleClick(0)}
              >
                Light
              </Button>
              <Button
                variant={activeButton === 1 ? "secondary" : "light"} // Nếu nút 1 được nhấn, dùng variant "primary"
                onClick={() => handleClick(1)}
              >
                Light
              </Button>
              <Button
                variant={activeButton === 2 ? "secondary" : "light"} // Nếu nút 1 được nhấn, dùng variant "primary"
                onClick={() => handleClick(2)}
              >
                Light
              </Button>
            </div>
            <div className="link-detail">
              <Button variant="light">THÊM VÀO GIỎ HÀNG</Button>
              <Button variant="dark">MUA HÀNG</Button>
            </div>
            <div className="location-detect">
              <div className="name-location">
                <p className="location-ship">Khu vực giao hàng</p>
                <p className="infor-location-ship">Giao tại Hà Nội </p>
              </div>
              <div className="line"></div>
              <div className="infor-store">
                <p className="infor-store-hn">
                  Quận Đống Đa: 49-51 Hồ Đắc Di, Phường Nam Đồng
                </p>
              </div>
            </div>
            <div className="detail-item">
              <p className="location-ship"> Chi tiết sản phẩm</p>
              <p className="infor-item">
                • Kích thước: M - L - XL <br />
                • Chất liệu: vải mesh lỗ lớn (Polyester).
                <br />
                • Relaxed Fit.
                <br />
                • Hình in mặt trước và mặt sau áo áp dụng kĩ thuật in lụa.
                <br />
                • Nhãn thương hiệu được may ở sườn áo.
                <br />• Nhãn Jersey trang trí được may ở góc dưới thân trước.
              </p>
            </div>
            <img src="//bizweb.dktcdn.net/100/369/010/files/sc-dc-x-dbz-goku-football-jersey-2024-cc72f957-c5f3-40e7-a28a-8126e6225507.png?v=1731309587896" />
          </div>
        </div>
        <div className="row">
          <a>CÁC SẢN PHẨM KHÁC</a>
        </div>
        <div className="list-item-more">
          <ListItem className="another-world" />
        </div>
      </div>
      ;
    </>
  );
}
export default Productdetail;
