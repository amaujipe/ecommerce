// Capturing the HTML element which will be the categories container
const categoriesContainer = document.getElementById('categoriesContainer');
// Rendering each category in its container
showCategories(categoriesContainer, categories);

// Capturing the HTML element which will be the product container. In this case, each category has the
// class 'gallery'. This will be the selector to get all the product containers available in the website.
const productContainers = Array.from(document.querySelectorAll('.gallery'));
// Rendering each product on its category
productContainers.map(productContainer => {
    const category = productContainer.id;
    // I need to know when the website is been used on a Desktop Browser.
    const desktopMediaQuery = matchMedia('(min-width: 1024px)');
    // This will show 6 products on desktop and 4 products on phones and tablets.
    const productsToShow = desktopMediaQuery.matches ? 6 : 4; 
    const productsList = filterProductsByCategory(category, products).slice(0, productsToShow);
    showProducts(productContainer, productsList);
});