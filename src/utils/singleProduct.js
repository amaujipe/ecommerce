import createTag from "./createTag";
import ImageTag from "../components/ImageTag";

function singleProduct({ title, price, description, imageSlug }) {
    const product = createTag('section', null, 'product'),
        imageContainer   = createTag('div', null, 'product__image-container'),
        image = ImageTag({
            'src': `assets/images/products/${imageSlug}.jpg`,
            'srcset': `assets/images/products/${imageSlug}.webp`,
            'alt': `Imagen de ${title}`,
            'classes': ['product__image']
        }),
        productInfo  = createTag('div', null, 'product__info', 'container'),
        productTitle = createTag('h1', null, 'product__title'),
        productPrice = createTag('p', null, 'product__price'),
        productDescription = createTag('p', null, 'product__description');
    
    productTitle.textContent = title;
    productPrice.textContent = `$ ${price}`;
    productDescription.textContent = description;

    imageContainer.appendChild(image);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productDescription);

    product.appendChild(imageContainer);
    product.appendChild(productInfo);

    return product;
}

export default singleProduct;