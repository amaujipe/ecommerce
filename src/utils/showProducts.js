import createTag from "./createTag.js";

// Render the available products for each category
// container: HTML element captured by JS which will act as product container (category)
// products: Array whit the available products
function showProducts(container, products) {
    const productsToShow = [...products];
    productsToShow.map(product => {
        const { title, price, imageSlug } = product;
        const productContainer = createTag(
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

export default showProducts;