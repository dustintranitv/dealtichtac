import React, { useState } from "react";

const HomeApp = () => {
  const [introduceShop, setIntroduceShop] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [accessoriesPhone, setAccessoriesPhone] = useState([]);
  const [accessoriesProduct, setAccessoriesProduct] = useState([]);
  const [accessoriesLaptopProduct, setAccessoriesLaptopProduct] = useState([]);
  const [accessoriesEquipmentProduct, setAccessoriesEquipmentProduct] =
    useState([]);
  const [accessoriesHousewares, setAccessoriesHousewares] = useState([]);
  const [accessoriesHousewaresProduct, setAccessoriesHousewaresProduct] =
    useState([]);
  const [accessoriesStrange, setAccessoriesStrange] = useState([]);
  const [accessoriesLaptop, setAccessoriesLaptop] = useState([]);
  const [accessoriesStrangeProduct, setAccessoriesStrangeProduct] = useState(
    []
  );

  return (
    <div className="content_home">
      <div className="header_content_top">
        <div className="header_content_top_left">
          <img
            className="header_content_top_img"
            src="https://dealtichtac.com/product/hinhquangcao/cover%202.png"
            alt="image Shop"
          />
        </div>
        <div className="headerIntroduceShopp_right">
          <ul
            className="header_content_top_right_item"
            id="header_content_top_right_item_id"
          >
            {introduceShop.map((item, idx) => {
              return (
                <li class="header_content_top_right_item_small">
                  <div class="header_content_top_right_item_small_img">
                    <img
                      class="item_small_img"
                      src={
                        "https://dealtichtac.com/product/hinhquangcao/" +
                        item.hinhanh
                      }
                      alt=""
                    />
                  </div>
                  <div class="item_small_introduction">
                    <span class="item_small_introduction_title">
                      {item.ten}
                    </span>
                    <p class="item_small_introduction_centent">
                      {item.noidung}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="product">
        <div className="product_new">
          <span className="product_new_hot"> SẢN PHẨM MỚI NHẤT </span>
          <a
            className="product_new_all"
            href="https://www.dealtichtac.com/moi-nhat.html"
          >
            (Xem tất cả)
          </a>
        </div>
        <ul className="product_shop_all" id="new_product_list_id">
          {newProduct.map((item, idx) => {
            return (
              <li class="product_shop_all_item">
                <a
                  href="http://www.dealtichtac.com/?tukhoa=dtt021"
                  class="product_shop"
                >
                  <div class="product_shop_img">
                    <img
                      src={`http://www.dealtichtac.com/product/` + item.hinhanh}
                      alt="Balo"
                      class="product_shop-img_detail"
                    />
                  </div>
                  <div class="product_shop_information">{item.ten}</div>
                  <div class="product_shop_price">
                    {formatCurrency(item.giaban)}₫
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="accessories">
        <div className="accessories_left">
          <div className="accessories_left_header">
            <div className="accessories_left_header_contain_img">
              <i className="fa-solid fa-mobile-screen-button accessories_left_header_img"></i>
            </div>
            <div className="accessories_left_header_contain_arrow"></div>
            <a
              href="https://www.dealtichtac.com/phu-kien-dien-thoai.html"
              className="accessories_left_header_contain_font"
            >
              <div className="accessories_left_header_font">
                PHỤ KIỆN ĐIỆN THOẠI
              </div>
            </a>
          </div>
          <div className="accessories_left_content">
            <ul
              className="accessories_left_content_list"
              id="accessories_left_content_list_id"
            ></ul>
          </div>
          <div className="accessories_left_footer">
            <button className="accessories_left_footer_button">
              <a
                className="accessories_left_footer_button_link"
                href="https://www.dealtichtac.com/phu-kien-dien-thoai.html"
              >
                Xem tất cả
              </a>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="accessories_right">
          <ul className="accessories_right_all" id="accessories_right_all_id">
            {accessoriesPhone.map((item, idx) => {
              return (
                <li class="accessories_left_content_list_item">
                  <a
                    href={"./producttype.html?" + item.id}
                    class="accessories_left_content_list_product"
                  >
                    {item.ten}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="accessories_laptop">
        <div className="accessories_laptop_left">
          <div className="accessories_laptop_left_header">
            <div className="accessories_laptop_left_header_contain_img">
              <i className="fa-solid fa-laptop accessories_laptop_left_header_img"></i>
            </div>
            <div className="accessories_laptop_left_header_contain_arrow"></div>
            <a
              href="https://www.dealtichtac.com/phu-kien-laptop.html"
              className="accessories_laptop_left_header_contain_font"
            >
              <div className="accessories_laptop_left_header_font">
                PHỤ KIỆN LAPTOP
              </div>
            </a>
          </div>
          <div className="accessories_laptop_left_content">
            <ul
              className="accessories_laptop_left_content_list"
              id="accessories_laptop_left_content_id"
            >
              {accessoriesProduct.map((item, idx) => {
                return (
                  <li class="accessories_right_all_list">
                    <a
                      class="accessories_right_all_in"
                      href={"./product.html?" + item.id}
                    >
                      <div class="accessories_right_all_img">
                        <img
                          class="accessories_right_all_img_detail"
                          src={
                            "http://www.dealtichtac.com/product/" + item.hinhanh
                          }
                          alt=""
                        />
                      </div>
                      <div class="accessories_right_all_name">{item.ten}</div>
                      <div class="accessories_right_all_price">
                        {formatCurrency(item.giaban)}₫
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="accessories_laptop_left_footer">
            <button className="accessories_laptop_left_footer_button">
              <a
                className="accessories_laptop_left_footer_button_link"
                href="https://www.dealtichtac.com/phu-kien-laptop.html"
              >
                Xem tất cả
              </a>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="accessories_laptop_right">
          <ul
            className="accessories_laptop_right_all"
            id="accessories_laptop_right_all_id"
          >
            {accessoriesLaptopProduct.map((item, idx) => {
              return (
                <li class="accessories_right_all_list">
                  <a
                    class="accessories_right_all_in"
                    href={"./product.html?" + item.id}
                  >
                    <div class="accessories_right_all_img">
                      <img
                        class="accessories_right_all_img_detail"
                        src={
                          "http://www.dealtichtac.com/product/" + item.hinhanh
                        }
                        alt=""
                      />
                    </div>
                    <div class="accessories_right_all_name">{item.ten}</div>
                    <div class="accessories_right_all_price">
                      {formatCurrency(item.giaban)}₫
                    </div>
                  </a>
                </li>
              )``;
            })}
            {accessoriesLaptop.map((item, idx) => {
              return (
                <li class="accessories_laptop_left_content_list_item">
                  <a
                    href="https://www.dealtichtac.com/balo.html"
                    class="accessories_laptop_left_content_list_product"
                  >
                    {item.ten}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="accessories_equipment">
        <div className="accessories_equipment_left">
          <div className="accessories_equipment_left_header">
            <div className="accessories_equipment_left_header_contain_img">
              <i className="fa-solid fa-globe accessories_equipment_left_header_img"></i>
            </div>
            <div className="accessories_equipment_left_header_contain_arrow"></div>
            <a
              href="https://www.dealtichtac.com/thiet-bi-mang.html"
              className="accessories_equipment_left_header_contain_font"
            >
              <div className="accessories_equipment_left_header_font">
                THIẾT BỊ MẠNG
              </div>
            </a>
          </div>
          <div className="accessories_equipment_left_content">
            <ul
              className="accessories_equipment_left_content_list"
              id="accessories_equipment_left_content_list_id"
            ></ul>
          </div>
          <div className="accessories_equipment_left_footer">
            <button className="accessories_equipment_left_footer_button">
              <a
                className="accessories_equipment_left_footer_button_link"
                href="https://www.dealtichtac.com/thiet-bi-mang.html"
              >
                Xem tất cả
              </a>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="accessories_equipment_right">
          <ul
            className="accessories_equipment_right_all"
            id="accessories_equipment_right_all_id"
          >
            {accessoriesEquipmentProduct.map((item, idx) => {
              return (
                <li class="accessories_right_all_list">
                  <a
                    class="accessories_right_all_in"
                    href={"./product.html?" + item.id}
                  >
                    <div class="accessories_right_all_img">
                      <img
                        class="accessories_right_all_img_detail"
                        src={
                          "http://www.dealtichtac.com/product/" + item.hinhanh
                        }
                        alt=""
                      />
                    </div>
                    <div class="accessories_right_all_name">{item.ten}</div>
                    <div class="accessories_right_all_price">
                      {formatCurrency(item.giaban)}₫
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="accessories_housewares">
        <div className="accessories_housewares_left">
          <div className="accessories_housewares_left_header">
            <div className="accessories_housewares_left_header_contain_img">
              <i className="fa-solid fa-blender accessories_equipment_left_header_img"></i>
            </div>
            <div className="accessories_housewares_left_header_contain_arrow"></div>
            <a
              href="https://www.dealtichtac.com/do-gia-dung.html"
              className="accessories_housewares_left_header_contain_font"
            >
              <div className="accessories_housewares_left_header_font">
                PHỤ KIỆN ĐỒ GIA DỤNG
              </div>
            </a>
          </div>
          <div className="accessories_housewares_left_content">
            <ul
              className="accessories_housewares_left_content_list"
              id="accessories_housewares_left_content_list_id"
            >
              {accessoriesHousewares.map((item, idx) => {
                return (
                  <li class="accessories_laptop_left_content_list_item">
                    <a
                      href="https://www.dealtichtac.com/balo.html"
                      class="accessories_laptop_left_content_list_product"
                    >
                      {item.ten}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="accessories_housewares_left_footer">
            <button className="accessories_housewares_left_footer_button">
              <a
                className="accessories_housewares_left_footer_button_link"
                href="https://www.dealtichtac.com/do-gia-dung.html"
              >
                Xem tất cả
              </a>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="accessories_housewares_right">
          <ul
            className="accessories_housewares_right_all"
            id="accessories_housewares_right_all_id"
          >
            {accessoriesHousewaresProduct.map((item, idx) => {
              return (
                <li class="accessories_right_all_list">
                  <a
                    class="accessories_right_all_in"
                    href={"./product.html?" + item.id}
                  >
                    <div class="accessories_right_all_img">
                      <img
                        class="accessories_right_all_img_detail"
                        src={
                          "http://www.dealtichtac.com/product/" + item.hinhanh
                        }
                        alt=""
                      />
                    </div>
                    <div class="accessories_right_all_name">{item.ten}</div>
                    <div class="accessories_right_all_price"></div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="accessories_strange">
        <div className="accessories_strange_left">
          <div className="accessories_strange_left_header">
            <div className="accessories_strange_left_header_contain_img">
              <i className="fa-solid fa-gamepad accessories_strange_left_header_img"></i>
            </div>
            <div className="accessories_strange_left_header_contain_arrow"></div>
            <a
              href="https://www.dealtichtac.com/hang-doc-la.html"
              className="accessories_strange_left_header_contain_font"
            >
              <div className="accessories_strange_left_header_font">
                HÀNG ĐỘC LẠ
              </div>
            </a>
          </div>
          <div className="accessories_strange_left_content">
            <ul
              className="accessories_strange_left_content_list"
              id="accessories_strange_left_content_list_id"
            >
              {accessoriesStrange.map((item, idx) => {
                <li class="accessories_laptop_left_content_list_item">
                  <a
                    href="https://www.dealtichtac.com/balo.html"
                    class="accessories_laptop_left_content_list_product"
                  >
                    {item.ten}
                  </a>
                </li>;
              })}
            </ul>
          </div>
          <div className="accessories_strange_left_footer">
            <button className="accessories_strange_left_footer_button">
              <a
                className="accessories_strange_left_footer_button_link"
                href="https://www.dealtichtac.com/hang-doc-la.html"
              >
                Xem tất cả
              </a>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
        <div className="accessories_strange_right">
          <ul
            className="accessories_strange_right_all"
            id="accessories_strange_right_all_id"
          >
            {accessoriesStrangeProduct.map((item, idx) => {
              return (
                <li class="accessories_right_all_list">
                  <a
                    class="accessories_right_all_in"
                    href={"./product.html?" + item.id}
                  >
                    <div class="accessories_right_all_img">
                      <img
                        class="accessories_right_all_img_detail"
                        src={
                          "http://www.dealtichtac.com/product/" + item.hinhanh
                        }
                        alt=""
                      />
                    </div>
                    <div class="accessories_right_all_name"> {item.ten}</div>
                    <div class="accessories_right_all_price">
                      {formatCurrency(item.giaban)}₫
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;

const renderNewProduct = (newProduct) => {
  let contentNewProduct = "";

  document.getElementById("new_product_list_id").innerHTML = contentNewProduct;
};
const formatCurrency = (giaban) => {
  giaban = giaban.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return giaban;
};
fetch("https://www.dealtichtac.com/api/index.php?category=moinhat")
  .then((res) => res.json())
  .then((result) => {
    renderNewProduct(result.filter((item, idx) => idx < 8));
  });

const renderAccessoriesPhone = (accessoriesPhone) => {
  let contentAccessoriesPhone = "";
  document.getElementById("accessories_left_content_list_id").innerHTML =
    contentAccessoriesPhone;
};
fetch("https://www.dealtichtac.com/api/index.php?sub-category=PKDT")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesPhone(result);
  });
const renderAccessoriesProduct = (accessoriesProduct) => {
  let contentAccessoriesProduct = "";
  document.getElementById("accessories_right_all_id").innerHTML =
    contentAccessoriesProduct;
};
fetch("https://www.dealtichtac.com/api/index.php?category=phukiendienthoai")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesProduct(result.filter((item, idx) => idx < 10));
  });

const renderAccessoriesLaptop = (accessoriesLaptop) => {
  let contentAccessoriesLaptop = "";
  document.getElementById("accessories_laptop_left_content_id").innerHTML =
    contentAccessoriesLaptop;
};
fetch("https://www.dealtichtac.com/api/index.php?sub-category=PKL")
  .then((res) => res.json())
  .then((result) => {
    setTimeout(() => renderAccessoriesLaptop(result), 3000);
  });

const renderAccessoriesLaptopProduct = (accessoriesLaptopProduct) => {
  let contentAccessoriesLaptopProduct = "";
  document.getElementById("accessories_laptop_right_all_id").innerHTML =
    contentAccessoriesLaptopProduct;
};
fetch("https://www.dealtichtac.com/api/index.php?category=phukienlaptop")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesLaptopProduct(result.filter((item, idx) => idx < 10));
  });

const renderAccessoriesEquipment = (accessoriesEquipment) => {
  let contentAccessoriesEquipment = "";
  accessoriesEquipment.map((item, idx) => {
    contentAccessoriesEquipment =
      contentAccessoriesEquipment +
      `<li class="accessories_laptop_left_content_list_item">
                                <a href="https://www.dealtichtac.com/balo.html"
                                    class="accessories_laptop_left_content_list_product">
                                    ` +
      item.ten +
      `
                                </a>
                            </li>`;
  });
  document.getElementById(
    "accessories_equipment_left_content_list_id"
  ).innerHTML = contentAccessoriesEquipment;
};
fetch("https://www.dealtichtac.com/api/index.php?sub-category=TBM")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesEquipment(result);
  });

const renderAccessoriesEquipmentProduct = (accessoriesEquipmentProduct) => {
  let contentAccessoriesEquipmentProduct = "";
  document.getElementById("accessories_equipment_right_all_id").innerHTML =
    contentAccessoriesEquipmentProduct;
};
fetch("https://www.dealtichtac.com/api/index.php?category=thietbimang")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesEquipmentProduct(result.filter((item, idx) => idx < 10));
  });

const renderAccessoriesHousewares = (accessoriesHousewares) => {
  let contentAccessoriesHousewares = "";
  document.getElementById(
    "accessories_housewares_left_content_list_id"
  ).innerHTML = contentAccessoriesHousewares;
};
fetch("https://www.dealtichtac.com/api/index.php?sub-category=ĐGD")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesHousewares(result);
  });

const renderAccessoriesHousewaresProduct = (accessoriesHousewaresProduct) => {
  let contentAccessoriesHousewaresProduct = "";
  document.getElementById("accessories_housewares_right_all_id").innerHTML =
    contentAccessoriesHousewaresProduct;
};
fetch("https://www.dealtichtac.com/api/index.php?category=dogiadung")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesHousewaresProduct(result.filter((item, idx) => idx < 10));
  });

const renderAccessoriesStrange = (accessoriesStrange) => {
  let contentAccessoriesStrange = "";
  document.getElementById(
    "accessories_strange_left_content_list_id"
  ).innerHTML = contentAccessoriesStrange;
};
fetch("https://www.dealtichtac.com/api/index.php?sub-category=HĐL")
  .then((res) => res.json())
  .then((result) => {
    renderAccessoriesStrange(result);
  });
// const renderAccessoriesStrangeProduct = (accessoriesStrangeProduct) => {
//   let contentAccessoriesStrangeProduct = "";
//   `;
//   });
//   document.getElementById("accessories_strange_right_all_id").innerHTML =
//     contentAccessoriesStrangeProduct;
// };
// fetch("https://www.dealtichtac.com/api/index.php?category=hangdocla")
//   .then((res) => res.json())
//   .then((result) => {
//     renderAccessoriesStrangeProduct(result.filter((item, idx) => idx < 10));
//   });

// const renderMenuProduct = (menuProduct) => {
//   let contentMenuProduct = "";
//   // menuProduct.map((item, idx) => {
//   //   contentMenuProduct =
//   //     contentMenuProduct +

//   //                       <a class="product_menu_bottom_item_link"
//   //                           href="https://www.dealtichtac.com/phu-kien-dien-thoai.html">
//   //                           `;
  //     item +
  //     `
  //                       </a>
  //                   </li>`;
  // });
//   document.getElementById("product_menu_bottom_item_id").innerHTML =
//     contentMenuProduct;
// };
// fetch("https://www.dealtichtac.com/api/index.php?statistic")
//   .then((res) => res.json())
//   .then((result) => {
//     renderMenuProduct(result);
//   });

// const renderIntroduceShop = (introduceShop) => {
//   let contentIntroduceShop = "";
//   document.getElementById("header_content_top_right_item_id").innerHTML =
//     contentIntroduceShop;
// };
// fetch("https://www.dealtichtac.com/api/index.php?slider")
//   .then((res) => res.json())
//   .then((result) => {
//     renderIntroduceShop(result);
//   });
