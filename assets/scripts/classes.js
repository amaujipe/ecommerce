export class Category {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.asociatedProducts = [];
    }
}

export class Product {
    constructor(title, description, price, imageSlug, category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageSlug = imageSlug;
        this.category = category;
    }
}