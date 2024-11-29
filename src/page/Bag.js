import React from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import myImage from "../assets/images/noitembag.webp"; // Đường dẫn tương đối
function Bag() {
  return (
    <div className="container">
      <div className="process">
        <h1>Giỏ hàng</h1>
      </div>
      <div className="processimg">
        <img src={myImage} />
      </div>
      <div className="box-btn-return">
        <Link className="returnindex" to="/">
          <Button variant="dark" className="btn-return">
            Tiếp Tục Mua Hàng{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Bag;
