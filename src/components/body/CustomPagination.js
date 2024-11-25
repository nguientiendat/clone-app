import Pagination from "react-bootstrap/Pagination";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListItem() {
  const [products, setProducts] = useState([]); // State lưu danh sách sản phẩm
  const [loading, setLoading] = useState(true); // State để hiển thị trạng thái loading
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage] = useState(8); // Số mục hiển thị trên mỗi trang

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    fetch("http://localhost:3000/item")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Hiển thị Loading khi chưa tải xong dữ liệu
  if (loading) return <p>Loading...</p>;

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Lấy danh sách sản phẩm của trang hiện tại
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="product-list">
        {/* Hiển thị sản phẩm của trang hiện tại */}
        {currentProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.src} alt={product.name} />
            <p className="nameItem">{product.name}</p>
            <span>
              <p className="price-item">{product.price}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <Pagination className="justify-content-center mt-3">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </>
  );
}

export default ListItem;
