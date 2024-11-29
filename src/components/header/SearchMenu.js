import { Link } from "react-router";
function Search() {
  return (
    <div className="searchMenu">
      <input type="search" placeholder="Nhập sản phẩm muốn tìm" />
      <div className="compositionsIconMenu">
        <Link className="compositionIconMenu bag" to="bag">
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        <Link className="compositionIconMenu user" to="user">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
export default Search;
