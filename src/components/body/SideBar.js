import { Container, Dropdown, ButtonGroup, Button } from "react-bootstrap";
function SideBar() {
  return (
    <div className="side-bar">
      <Container className="d-flex justify-content-between align-items-center mt-4">
        {/* Dropdown Lọc giá */}
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-secondary">Lọc giá</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-price"
          />
          <Dropdown.Menu>
            <Dropdown.Item>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price1"
                />
                <label className="form-check-label" htmlFor="price1">
                  Giá dưới 100.000đ
                </label>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price2"
                />
                <label className="form-check-label" htmlFor="price2">
                  100.000đ - 200.000đ
                </label>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="price3"
                />
                <label className="form-check-label" htmlFor="price3">
                  200.000đ - 300.000đ
                </label>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown Loại */}
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-secondary">Loại</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-type"
          />
          <Dropdown.Menu>
            <Dropdown.Item>Loại 1</Dropdown.Item>
            <Dropdown.Item>Loại 2</Dropdown.Item>
            <Dropdown.Item>Loại 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown Kích thước */}
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-secondary">Kích thước</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-size"
          />
          <Dropdown.Menu>
            <Dropdown.Item>Nhỏ</Dropdown.Item>
            <Dropdown.Item>Vừa</Dropdown.Item>
            <Dropdown.Item>Lớn</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown Màu sắc */}
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-secondary">Màu sắc</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-color"
          />
          <Dropdown.Menu>
            <Dropdown.Item>Đỏ</Dropdown.Item>
            <Dropdown.Item>Xanh</Dropdown.Item>
            <Dropdown.Item>Vàng</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown Sắp xếp */}
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-secondary">Mới nhất</Button>
          <Dropdown.Toggle
            split
            variant="outline-secondary"
            id="dropdown-sort"
          />
          <Dropdown.Menu>
            <Dropdown.Item>Mới nhất</Dropdown.Item>
            <Dropdown.Item>Cũ nhất</Dropdown.Item>
            <Dropdown.Item>Giá tăng dần</Dropdown.Item>
            <Dropdown.Item>Giá giảm dần</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  );
}
export default SideBar;
