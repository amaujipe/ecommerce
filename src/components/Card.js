import createTag from "../utils/createTag";
import Button from "./Button";

function Card(product) {
    const card  = createTag('article', null, 'card'),
          image = createTag('img', null, 'card__image'),
          title = createTag('h3', null, 'card__title'),
          price = createTag('p', null, 'card__price'),
          link  = Button(`#/${product.id}`, 'Ver producto', 'card__link');
    image.setAttribute('src', `assets/images/products/${product.imageSlug}.jpg`);
    image.setAttribute('alt', product.title);
    title.textContent = product.title;
    price.textContent = `$ ${product.price}`;
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(link);
    return card;
}

export default Card;


/*
<article class="card">
    <img class="card__image" alt="Imagen del producto"
        srcset="
            assets/images/products/star-wars-mug-small.jpg 225w,
            assets/images/products/star-wars-mug-medium.jpg 768w,
            assets/images/products/star-wars-mug-large.jpg 1024w
        "
        src="assets/images/products/sources/star-wars-mug.jpg" 
    />
    <h3 class="card__title">Star Wars Mug</h3>
    <p class="card__price"><strong>$60.00</strong></p>
    <a class="card__link" href="#">Ver producto</a>
</article>
*/