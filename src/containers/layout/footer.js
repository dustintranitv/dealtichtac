import React from "react";
const FooterApp = () => {
  return (
    <div className="footer">
      <div className="header_footer">
        <div className="header_footer_left">
          <img
            className="header_footer_left_img"
            src="https://www.dealtichtac.com/img/qua-tang.png"
            alt=""
          />
        </div>
        <div className="header_footer_center">
          <h3 className="header_footer_center_title">
            Đăng kí nhận MÃ giảm giá - Chương trình CSKH của chúng tôi!
          </h3>
          <h2 className="header_footer_center_contact">
            Bằng cách nào chúng tôi có thể liên lạc với bạn?.
          </h2>
          <div className="header_footer_center_login">
            <input
              className="header_footer_center_login_email"
              type="text"
              name="email"
              placeholder="Nhập Email hoặc Số điện thoại"
            />
            <input
              className="header_footer_center_login_registration"
              type="submit"
              name="registration"
              value="Đăng ký"
            />
          </div>
        </div>
        <div className="header_footer_right">
          <img
            className="header-footer_right_img"
            src="https://www.dealtichtac.com/img/cskh.png"
            alt=""
          />
          <div className="header_footer_right_hotline">
            HOTLINE: 0886.00.77.99
          </div>
        </div>
      </div>
      <div className="footer_center">
        <div className="footer_center_right">
          <ul className="footer_center_right_support">
            <h2 className="footer_center_right_support_title">
              HỖ TRỢ - 0886.00.77.99
            </h2>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/huongdanmuahang.kh"
              >
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/huongdanthanhtoan.kh"
              >
                Hướng dẫn thanh toán
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/chinhsachbaohanh.kh"
              >
                Chính sách bảo hành
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/chinhsachdoitra.kh"
              >
                Chính sách đổi trả
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/chinhsachbaomat.kh"
              >
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/chinhsachvanchuyen.kh"
              >
                Chính sách vận chuyển
              </a>
            </li>
          </ul>
          <ul className="footer_center_right_introduce">
            <h2 className="footer_center_right_support_title">
              DEALTICHTAC.COM
            </h2>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/gioithieucongty.kh"
              >
                Giới thiệu công ty
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/tuyendungnhansu.kh"
              >
                Tuyển dụng nhân sự
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/#"
              >
                Quy chế hoạt động
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/#"
              >
                Tuyển dụng nhân tài
              </a>
            </li>
          </ul>
          <ul className="footer_center_right_information">
            <h2 className="footer_center_right_support_title">
              NHỮNG THÔNG TIN CẦN BIẾT
            </h2>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/#"
              >
                Bảo mật thông tin
              </a>
            </li>
            <li>
              <a
                className="footer_center_right_support_link"
                href="https://www.dealtichtac.com/#"
              >
                Điều khoản và điều kiện
              </a>
            </li>
            <h2 className="footer_center_right_support_title">
              KẾT NỐI VÀ NHẬN TIN MỚI NHẤT
            </h2>
          </ul>
        </div>
        <div className="footer_center_left"></div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <h2 className="footer_bottom_left_title">CHỨNG NHẬN ĐĂNG KÝ</h2>
          <a
            className="footer_bottom_left_link"
            href="http://online.gov.vn/Home/WebDetails/30833"
          >
            <img
              src="https://www.dealtichtac.com/img/20150827110756-dathongbao.png"
              alt=""
            />
          </a>
        </div>
        <div className="footer_bottom_center"></div>
        <div className="footer_bottom_right">
          <strong>
            PHỤ KIỆN SỐ HÓA – THẾ GIỚI PHỤ KIỆN ĐIỆN THOẠI CẦN THƠ
            <br />
            MST: 8079166199 Do UBND quận Ninh Kiều cấp ngày 04/09/2013
            <br />
            Email: minhphuong.vnb@gmail.com
          </strong>
          <br />
          <strong>Chi nhánh 1:</strong>
          Số 268/10 Nguyễn Văn Linh, P.Hưng Lợi, Q.Ninh Kiều, TP.Cần Thơ
        </div>
      </div>
    </div>
  );
};
export default FooterApp;
