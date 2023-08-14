import React from "react";
const HeaderApp = () => {
  return (
    <div className="heading">
      <div className="header_logo">
        <a href="/index.html" className="logo">
          <img
            src="https://www.dealtichtac.com/img/logo.png"
            alt="logo Dealtichtac"
            className="header_logo_img"
          />
        </a>
      </div>
      <div className="header_search">
        <input
          type="text"
          className="header_search_input"
          placeholder="Bạn muốn tìm gì?"
        />
        <button className="header_button_search">
          <i className="fa-solid fa-magnifying-glass logo_search"></i>
        </button>
      </div>
      <div className="header_navbar">
        <ul className="header_app" id="header_app_id">
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/moi-nhat.html"
              className="header_icon_add header_icon_add_hot"
            >
              <i className="icon icon_hot"></i>
              Hot
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/khuyen-mai.html"
              className="header_icon_add header_icon_add_sale"
            >
              <i className="icon icon_sale"></i>
              Khuyến mãi
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/chuot-cac-loai.html"
              className="header_icon_add header_icon_add_mouse"
            >
              <i className="icon icon_mouse"></i>
              Chuột
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/headphone.html"
              className="header_icon_add header_icon_add_headphone"
            >
              <i className="icon icon_headphone"></i>
              Headphone
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/loa-nghe-nhac.html"
              className="header_icon_add header_icon_add_loudspeaker"
            >
              <i className="icon icon_loudspeaker"></i>
              Loa
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/thiet-bi-mang.html"
              className="header_icon_add header_icon_add_equiqment"
            >
              <i className="icon icon_equiqment"></i>
              Thiết bị mạng
            </a>
          </li>
          <li className="header_icon">
            <a
              href="/producttype.html?38"
              className="header_icon_add header_icon_add_Cable"
            >
              <i className="icon icon_Cable"></i>
              Cáp sạc
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/pin-du-phong.html"
              className="header_icon_add header_icon_add_battery"
            >
              <i className="icon icon_battery"></i>
              Pin dự phòng
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/tai-nghe.html"
              className="header_icon_add header_icon_add_wireless"
            >
              <i className="icon icon_wireless"></i>
              Tai nghe
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/ban-phim.html"
              className="header_icon_add header_icon_add_keyboarb"
            >
              <i className="icon icon_keyboarb"></i>
              Bàn phím
            </a>
          </li>
          <li className="header_icon">
            <a
              href="https://www.dealtichtac.com/usb-the-nho.html"
              className="header_icon_add header_icon_add_USB"
            >
              <i className="icon icon_USB"></i>
              USB
            </a>
          </li>
        </ul>
      </div>
      <div className="header_recruitment">
        <a
          href="https://www.dealtichtac.com/tuyendung.html"
          className="header_icon_recruitment"
        >
          <i className="icon icon_recruitment"></i>
        </a>
      </div>
    </div>
  );
};
export default HeaderApp;
