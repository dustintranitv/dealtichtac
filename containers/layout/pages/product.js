import React from "react";

const HomePage = () => {
  // dùm để load js sau khi đã load html
  $(document).ready(function () {
    $("#heading").load("./content/heading.html");
    $("#contentproduct").load("./content/contentproduct.html");
    $("#samekind").load("./content/samekind.html");
    $("#gowith").load("./content/gowith.html");
    $("#product").load("./content/product.html");
    $("#footer").load("./content/footer.html");
    const formatCurrency = (giaban) => {
      giaban = giaban.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return giaban;
    };
    // lấy Id của sản phẩm
    let productId;
    productId = window.location.search.replace("?", "");
    // gọi api để lấy thông tin sản phẩm
    fetch("https://www.dealtichtac.com/api/index.php?product=" + productId)
      .then((res) => res.json())
      .then((result) => {
        console.log(
          "🚀 ~ file: product.html ~ line 54 ~ .then ~ result",
          result
        );
        renderProduct(result);
        console.log(result);
      });
    // hàm để set dữ liệu sản phẩm
    const renderProduct = (result) => {
      document.getElementById(
        "header_product_content_right_introduce_id"
      ).innerHTML = result.ten;
      document.getElementById(
        "header_product_content_right_price_number_id"
      ).innerHTML = formatCurrency(result.giaban);
      document.getElementById(
        "header_product_content_content_img_id"
      ).innerHTML =
        ` <img class="header_product_content_content_img" 
            src="https://www.dealtichtac.com/product/` +
        result.hinhanh +
        `" alt="">`;
    };
  });
  return (
    <div class="app">
      <header class="header">
        <div id="heading"></div>
        <div class="grid">
          <div id="contentproduct"></div>
          <div id="samekind"></div>
          <div id="gowith"></div>
          <div id="product"></div>
        </div>
        <div id="footer"></div>
      </header>
      <div class="app"></div>
    </div>
  );
};
export default HomePage;
