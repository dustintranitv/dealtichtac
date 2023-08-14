import React from "react";

const HomePage = () => {
  $(document).ready(function () {
    $("#heading").load("./content/heading.html");
    $("#contenthome").load("./content/contenthome.html");
    $("#product").load("./content/product.html");
  });
  return (
    <div class="app">
      <header class="header">
        <div id="heading"></div>
        <div class="grid">
          <div id="contenthome"></div>
          <div id="product"></div>
        </div>
      </header>
    </div>
  );
};
export default HomePage;
