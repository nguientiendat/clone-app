import Pagination from "react-bootstrap/Pagination";

import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListItem() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerpage] = useState(8);
  const listRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  useEffect(() => {
    // Cuộn đến phần tử danh sách
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  // tinh tong so trang
  const totalPages = Math.ceil(products.length / itemPerpage);

  // xu ly khi chuyen trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //hien thi danh sach sản phẩm ở trang hiện tại
  const currentProducts = products.slice(
    (currentPage - 1) * itemPerpage,
    currentPage * itemPerpage
  );
  console.log(setCurrentPage);
  return (
    <>
      <div ref={listRef} className="product-list">
        {currentProducts.map((product) => {
          return (
            <div className="product-item" key={product.id}>
              <img src={product.src} alt={product.name} />
              <p className="nameItem">{product.name}</p>
              <span>
                <p className="price-item">{product.price}</p>
              </span>
            </div>
          );
        })}
      </div>

      <Pagination className="justify-content-center mt-3">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages - 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </>
  );
}

export default ListItem;
