// Creates an HTML tag which will be another elements container
// tagName: Must be a valid HTML sectioning tag name (div, section, article, etc.)
// id     : If you dont need the ID attribute, send null as argument
// classes: List of classes for CSS styles, y you dont need classes dont wrote anything
export function createContainerTag(tagName, id, ...classes) {
    const container = document.createElement(tagName);
    if(id)
        container.id = id;
    if(classes.length > 0)
        container.classList.add(...classes)
    return container;
}

// Render the available categories in the web
// container: [object] HTML element captured by JS which will act as categories container
// categories: Array whit the available categories
export function showCategories(container, categoryList) {
    const categories = [...categoryList];
    categories.map(category => {
        const { title } = category;
        const categoryContainer = createContainerTag(
            'section',
            `${title.toLowerCase().replaceAll(' ', '-')}`,
            'gallery'
        );
        categoryContainer.innerHTML = `
            <div class="gallery__header">
                <h2 class="gallery__title">${title}</h2>
                <a href="#" class="gallery__link">Ver todo</a>
            </div>
        `;
        container.appendChild(categoryContainer);
        return container;
    });
}

// Render the available products for each category
// container: HTML element captured by JS which will act as product container (category)
// products: Array whit the available products
export function showProducts(container, products) {
    const productsToShow = [...products];
    productsToShow.map(product => {
        const { title, price, imageSlug } = product;
        const productContainer = createContainerTag(
            'article',
            title.replaceAll(' ', '-'),
            'card'
        );
        productContainer.innerHTML = `
            <div class="card__image-container">
                <img 
                    class="card__image"
                    alt="Imagen de ${title}"
                    src="assets/images/products/sources/${imageSlug}.jpg" 
                />
            </div>
            <h3 class="card__title">${title}</h3>
            <p class="card__price"><strong>$ ${price}</strong></p>
            <p class="card__link">Ver producto</p>
        `;
        container.appendChild(productContainer);
    });
}

// Recieves an array of products and returnd the ones who matches with the specified category 
// category: The category container id, captured by JS
// products: Array whit the available products
export function filterProductsByCategory(category, products){
    const productList = products.filter(
        product => product.category.toLowerCase().replaceAll(' ', '-') === category
    )
    return productList;
}
