// Recieves an array of products and returnd the ones who matches with the specified category 
// category: The category container id, captured by JS
// products: Array whit the available products
function filterProductsByCategory(category, products){
    const productList = products.filter(
        product => product.category.toLowerCase().replaceAll(' ', '-') === category
    )
    return productList;
}

export default filterProductsByCategory;