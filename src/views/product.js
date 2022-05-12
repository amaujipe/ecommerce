import getHash from "../utils/getHash";
import { productList } from "../utils/productList";
import { categoryList } from "../utils/categoryList";
import createTag from "../utils/createTag";
import singleProduct from "../utils/singleProduct";
import Gallery from "../components/Gallery";
import cardsToShow from "../utils/cardsToShow";
import Card from "../components/Card";

function productView() {
    // Getting the product id, through the URL hash
    const id = getHash().slice(2);
    // Getting the product by its id
    const productData = productList[id];

    const fragment = new DocumentFragment,
        product = singleProduct(productData),
        categoryData = categoryList.filter(category => category.title === productData.category)[0],
        relatedProducts = Gallery(categoryData, true);
    let numberOfCards = cardsToShow();
    productList.map(product => {
        if(product.category === categoryData.title && numberOfCards > 0) {
            if(productData.id !== product.id) {
                const card = Card(product);
                relatedProducts.appendChild(card);
                numberOfCards--;
            }
        }
    })
    fragment.appendChild(product);
    fragment.appendChild(relatedProducts);

    return fragment;
}
export default productView;










/*
<section class="product">
    <div class="product__image-container">
        <img class="product__image" alt="Imagen del producto"
            srcset="
                assets/images/products/star-wars-mug-small.jpg 225w,
                assets/images/products/star-wars-mug-medium.jpg 768w,
                assets/images/products/star-wars-mug-large.jpg 1024w
            "
            src="assets/images/products/sources/star-wars-mug.jpg" 
        />
    </div>
    <div class="product__info container">
        <h1 class="product__title">Star Wars Mug</h1>
        <p class="product__price">$60.00</p>
        <p class="product__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatum molestiae reprehenderit sit suscipit voluptate, omnis temporibus nesciunt, inventore aperiam animi dolorem veniam harum facere ad non ducimus quidem expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
</section>
*/