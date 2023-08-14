import React from "react";
// lấy Id của sản phẩm
let producttypeId;
producttypeId = window.location.search.replace("?", "");
// gọi api để lấy thông tin sản phẩm
fetch(
  "https://www.dealtichtac.com/api/index.php?productByCategory=" + producttypeId
)
  .then((res) => res.json())
  .then((result) => {
    console.log("🚀 ~ file: product.html ~ line 54 ~ .then ~ result", result);
    renderProducttype(result);
  });
const renderProducttype = (producttype) => {
  let contentProducttype = "";
  producttype.map((item, idx) => {
    contentProducttype =
      contentProducttype +
      `<li className="producttype_header_rice_all_item">
                   <div className="producttype_header_rice_all_item_img">
                       <img className="producttype_header_rice_all_item_img_title" 
                       src="http://www.dealtichtac.com/product/` +
      item.hinhanh +
      `" 
                       alt="">
                   </div>
                   <div className="producttype_header_rice_all_item_name">` +
      item.ten +
      `</div>
                   <div className="producttype_header_rice_all_item_rice">` +
      item.giaban +
      `</div>
               </li>`;
  });
  document.getElementById("producttype_header_rice_all_id").innerHTML =
    contentProducttype;
};
const ProductRelated = () => {
  return (
  <div className="producttype">
    <div className="producttype_header" id="producttype_header_id">
      <div className="producttype_header_type">
        <div className="producttype_header_type_kind">
          <div className="producttype_header_type_kind_name">
            <p className="producttype_header_type_kind_name_item">CHUỘT CÁC LOẠI</p>
          </div>
          <div className="producttype_header_type_kind_right"></div>
        </div>
        <div className="producttype_header_type_kind_rice">
          <ul className="producttype_header_type_kind_rice_search">
            <li className="producttype_header_type_kind_rice_search_item">
              Giá bán:
            </li>
            <li className="producttype_header_type_kind_rice_search_item">
              <a
                href="###"
                className="producttype_header_type_kind_rice_search_item_link"
              >
                Từ cao đến thấp
              </a>
            </li>
            <li className="producttype_header_type_kind_rice_search_item">
              <a
                href="###"
                className="producttype_header_type_kind_rice_search_item_link"
              >
                Từ thấp đến cao
              </a>
            </li>
            <li className="producttype_header_type_kind_rice_search_input">
              <input
                type="text"
                className="producttype_header_type_kind_rice_search_input_item"
                placeholder="Tìm kiếm..."
              />
              <button className="producttype_header_type_kind_rice_search_button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="producttype_header_rice">
        <ul
          className="producttype_header_rice_all"
          id="producttype_header_rice_all_id"
        ></ul>
      </div>
    </div>
  </div>
  )
};
export default ProductRelated;
