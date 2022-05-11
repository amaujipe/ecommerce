import { categoryList } from "../utils/categoryList";
import { productList } from "../utils/productList";
import cardsToShow from "../utils/cardsToShow";
import Gallery from "./Gallery";
import Card from "./Card";

function AvailableProducts() {
    const fragment      = new DocumentFragment(),
    categories    = [...categoryList],
    products      = [...productList];
    categories.map(category => {
        const gallery = Gallery(category.title);
        let numberOfCards = cardsToShow();
        products.map(product => {
            if(category.title === product.category && numberOfCards > 0) {
                const card = Card(product);
                gallery.appendChild(card);
                numberOfCards--;
            }
        });
        fragment.appendChild(gallery);
    });
    return fragment;
}

export default AvailableProducts;