import banner from "./banner.js";
import categories from "./categories.js";
import products from "./products.js";

function main() {
    const main = document.getElementById('main');

    const bannerSection = banner();
    main.appendChild(bannerSection);

    const categoriesSection = categories();
    main.appendChild(categoriesSection);

    // Capturing the HTML element which will be the product container. In this case, each category has the
    // class 'gallery'. This will be the selector to get the product containers available in the website.
    const productContainers = Array.from(document.querySelectorAll('.gallery'));
    products(productContainers)
}

export default main;