
    const renderAccessoriesStrange = (accessoriesStrange) => {
        let contentAccessoriesStrange = "";
        accessoriesStrange.map((item, idx) => {
            contentAccessoriesStrange =
                contentAccessoriesStrange +
                `<li class="accessories_laptop_left_content_list_item">
                                <a href="https://www.dealtichtac.com/balo.html"
                                    class="accessories_laptop_left_content_list_product">
                                    ` + item.ten + `
                                </a>
                            </li>`;
        });
        document.getElementById("accessories_strange_left_content_list_id").innerHTML = contentAccessoriesStrange;
    };
    fetch("https://www.dealtichtac.com/api/index.php?sub-category=HĐL")
        .then((res) => res.json())
        .then((result) => {
            renderAccessoriesStrange(result);
        });
    const renderAccessoriesStrangeProduct = (accessoriesStrangeProduct) => {
        let contentAccessoriesStrangeProduct = "";
        accessoriesStrangeProduct.map((item, idx) => {
            contentAccessoriesStrangeProduct =
                contentAccessoriesStrangeProduct +
                `<li class="accessories_right_all_list">
                        <a class="accessories_right_all_in"
                            href="https://www.dealtichtac.com/1014-cap-vga-trang-15-met.htm">
                            <div class="accessories_right_all_img">
                                <img class="accessories_right_all_img_detail"
                                    src="http://www.dealtichtac.com/product/` + item.hinhanh + `" alt="">
                            </div>
                            <div class="accessories_right_all_name">
                                ` + item.ten + `
                            </div>
                            <div class="accessories_right_all_price">
                                ` + item.giaban + `
                            </div>
                        </a>
                    </li>`;
        });
        document.getElementById("accessories_strange_right_all_id").innerHTML = contentAccessoriesStrangeProduct;
    };
    fetch("https://www.dealtichtac.com/api/index.php?category=hangdocla")
        .then((res) => res.json())
        .then((result) => {
            renderAccessoriesStrangeProduct(result.filter((item, idx) => idx < 10))
        });