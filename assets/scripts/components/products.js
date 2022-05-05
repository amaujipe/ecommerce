import { showProducts, filterProductsByCategory } from "../helpers.js"
import { productList } from "../productList.js"

function products(productContainers) {
    console.log(productContainers);
    
    // Rendering each product on its category
    productContainers.map(productContainer => {
        const category = productContainer.id;
        // I need to know when the website is been used on a Desktop Browser.
        const desktopMediaQuery = matchMedia('(min-width: 1024px)');
        // This will show 6 products on desktop and 4 products on phones and tablets.
        const productsToShow = desktopMediaQuery.matches ? 6 : 4; 
        const productsList = filterProductsByCategory(category, productList).slice(0, productsToShow);
        showProducts(productContainer, productsList);
    });
}

export default products;

