import React from "react";
import { Button } from "react-bootstrap";
function LoginUser() {
  return (
    <div className="container">
      <div className="form-user">
        <form className="login">
          <div className="login-account">
            <p className="tittle-login"></p>
            <input type="text" placeholder="&#xf007; Nhập tên người dùng" />
            <input type="password" placeholder="Nhập mật khẩu" />
            <div className="link-detail">
              <Button variant="dark" className="btn-login">
                Đăng nhập
              </Button>
            </div>
          </div>
          <div className="create-account"></div>
        </form>
        <form className="create">
          <div className="create-account">
            <p className="tittle-create"></p>
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Họ" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Số điện thoại" />
            <input type="password" placeholder="Nhập mật khẩu" />
            <Button variant="light" className="btn-create">
              Đăng Ký
            </Button>
          </div>
          <div className="create-account"></div>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
