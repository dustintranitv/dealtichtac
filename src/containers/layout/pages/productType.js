import React from "react";

const HomePage = () => {
  // dùm để load js sau khi đã load html
  $(document).ready(function () {
    $("#heading").load("./content/heading.html");
    $("#producttype").load("./content/producttype.html");
    $("#product").load("./content/product.html");
    $("#footer").load("./content/footer.html");
  });
  return (
    <div class="app">
      <header class="header">
        <div id="heading"></div>
        <div class="grid">
          <div id="producttype"></div>
          <div id="product"></div>
        </div>
        <div id="footer"></div>
      </header>
      <div class="app"></div>
    </div>
  );
};
export default HomePage;
