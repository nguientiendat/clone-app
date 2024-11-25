// Footer.js
import React from "react";

const FooterAddress = () => {
  const style = {
    // size: "20px",
    backgroundColor: "white",
    width: "100%",
    height: "300px",
  };
  return (
    <>
      <div style={style} className="composition-footer">
        <div className="address">
          <h3>Hệ Thống Cửa Hàng</h3>
          <ul className="detail-address">
            <li className="icon-location">
              <i className="fa-solid fa-location-dot"></i>
            </li>
            <ul className="name-address">
              <li className="name-city">
                <p>Chi Nhánh Hồ Chí Minh</p>
              </li>
              <li className="location-shop">
                <p>
                  {" "}
                  <span className="bold">TP.Thủ Đức </span>Quận 9 - Tầng 2 TTTM
                  Vincom Mega Mall Vinhomes Grand Park.
                </p>
              </li>
              <li className="location-shop">
                <p>
                  {" "}
                  <span className="bold">Quận 1</span> - 160 Nguyễn Cư Trinh,
                  Phường Nguyễn Cư Trinh.
                </p>
              </li>
              <li className="location-shop">
                <p>
                  {" "}
                  <span className="bold">Quận 10 </span> - 561 Sư Vạn Hạnh,
                  Phường 13
                </p>
              </li>
            </ul>
          </ul>
        </div>
        <div className="social-network">
          <h3>Mạng Xã Hội</h3>
          <ul className="icon-social-network">
            <li className="composition-social-network">
              <i class="fa-brands fa-youtube"></i>
            </li>
            <li className="composition-social-network">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className="composition-social-network">
              <i class="fa-brands fa-tiktok"></i>
            </li>
          </ul>
          <div className="policy">
            <ul className="list-policy">
              <li className="composition-policy">
                <p>Chính sách bảo mật</p>
              </li>
              <li className="composition-policy">
                <p>FAQ</p>
              </li>
              <li className="composition-policy">
                <p>Chính sách thẻ sinh viên</p>
              </li>
              <li className="composition-policy">
                <p>Chính sách bảo hành & Đổi trả</p>
              </li>
              <li className="composition-policy">
                <p>Chính sách giao hàng hỏa tốc</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="fanpage">
          <h3>Fanpage</h3>
        </div>
      </div>
    </>
  );
};

export default FooterAddress;
