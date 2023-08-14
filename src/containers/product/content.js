import React from "react";
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  console.log("tabcontent", tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const ContentProduct = () => {
  return (
    <div>
      <div className="header_product_content">
        <ul className="header_product_content_left">
          <li className="header_product_content_left_img">
            <a
              className="header_product_content_left_link"
              href="https://www.dealtichtac.com/1078-ba-lo-cong-so-dtt022.htm"
            >
              <img
                className="header_product_content_left_img_link"
                src="https://www.dealtichtac.com/product/Ba lô Hara shop HR200.jpg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <div
          className="header_product_content_content"
          id="header_product_content_content_img_id"
        ></div>
        <div className="header_product_content_right">
          <div className="header_product_content_right_content">
            <span
              className="header_product_content_right_introduce"
              id="header_product_content_right_introduce_id"
            ></span>
            <br />
            <p
              className="header_product_content_right_price"
              style="font-weight: 700;"
            >
              Giá bán:
              <span
                className="header_product_content_right_price_number"
                id="header_product_content_right_price_number_id"
              ></span>
            </p>
            <p className="header_product_content_right_insurance">
              <i className="fa-regular fa-star header_product_content_right_insurance_star"></i>
              <span className="header_product_content_right_insurance_title">
                Bảo hành: Test tại chỗ
              </span>
            </p>
            <i className="fa-regular fa-star header_product_content_right_insurance_star_promotion"></i>
            <span className="header_product_content_right_insurance_promotion">
              KHUYẾN MÃI
            </span>
            <div className="header_product_content_right_strikethrough"></div>
            <span className="header_product_content_right_delivery">
              Giao hàng tận nơi trên toàn quốc!
            </span>
            <div className="header_product_content_right_cart">
              <a
                className="header_product_content_right_cart_link"
                href="https://www.dealtichtac.com/cart1179"
              >
                THÊM VÀO GIỎ HÀNG
              </a>
            </div>
            <span className="header_product_content_right_contact">
              Gọi đặt mua:
              <a className="header_product_content_right_contact_phone" href="">
                0886.00.77.99
              </a>
              (7:30-22:00)
            </span>
          </div>
          <div className="header_product_introduce">
            <div className="header_product_introduce_list">
              <div className="header_product_introduce_list_item">
                <div className="tab">
                  <button
                    className="tablinks active"
                    onclick="openCity(event, 'vietnam')"
                  >
                    GIỚI THIỆU SẢN PHẨM
                  </button>
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'London')"
                  >
                    THÔNG SỐ KĨ THUẬT
                  </button>
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'Paris')"
                  >
                    BẢO HÀNH
                  </button>
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'Tokyo')"
                  >
                    BÌNH LUẬN
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="London" className="tabcontent">
            <span className="header_product_introduce_content_parameter_content">
              Chất liệu vải bền chắc, ít bám bụi
              <br />
              Đường may tỉ mỉ, chắc chắn
              <br />
              Thiết kế balo có nhiều ngăn tiện lợi
              <br />
              Màu xám hài hòa, trẻ trung
              <br />
              Dây đeo và tay xách được may vững chắc
            </span>
          </div>
        </div>
      </div>
      <div id="Paris" className="tabcontent">
        <p className="header_product_introduce_content_insurance_content">
          Xin quý khách vệ sinh sản phẩm và mang theo những phụ kiện có liên
          quan khi đến bảo hành.
          <br />
          Thời gian nhận bảo hành:
          <strong className="header_product_introduce_content_insurance_title">
            09h đến 18h
          </strong>
          từ thứ 2 đến 7 (Chủ nhật và các ngày lễ nghỉ).
        </p>
      </div>

      <div id="vietnam" className="tabcontent" style="display: block;">
        <div className="header_product_introduce_content_introduce">
          <p></p>
        </div>
      </div>

      <div id="Tokyo" className="tabcontent">
        <div className="header_product_introduce_content_comment_header">
          <span className="header_product_introduce_content_comment_header_left">
            0 bình luận
          </span>
          <span className="header_product_introduce_content_comment_header_right">
            Sắp xếp theo
            <a
              className="header_product_introduce_content_comment_header_right_button"
              href=""
            >
              Mới nhất
              <i className="fa-solid fa-up-down"></i>
            </a>
          </span>
        </div>
        <div className="header_product_introduce_content_comment_header_strikethrough"></div>
        <div>
          <input
            className="header_product_introduce_content_comment_header_input"
            type="text"
            placeholder="Thêm bình luận..."
          />
        </div>
        <div className="header_product_introduce_content_comment_header_strikethrough"></div>
        <div>
          <i
            className="fa-brands fa-facebook-square 
          header_product_introduce_content_comment_header_icon_facebook"
          ></i>
          <a href="">Plugin bình luận trên Facebook</a>
        </div>
      </div>
      <div className="header_product_introduce">
        <div className="header_product_introduce_list"></div>
      </div>
    </div>
  );
};
export default ContentProduct;
