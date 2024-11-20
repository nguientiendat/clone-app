function Search() {
  return (
    <div className="searchMenu">
      <input type="search" placeholder="Nhập sản phẩm muốn tìm" />
      <div className="compositionsIconMenu">
        <a className="compositionIconMenu home" href="">
          <i className="fas fa-home"></i>
        </a>
        <a className="compositionIconMenu bag" href="">
          <i class="fa-solid fa-bag-shopping"></i>
        </a>
        <a className="compositionIconMenu user" href="">
          <i class="fa-solid fa-user"></i>
        </a>
      </div>
    </div>
  );
}
export default Search;
