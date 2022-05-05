class Category {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.asociatedProducts = [];
    }
}

class Product {
    constructor(title, description, price, imageSlug, category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageSlug = imageSlug;
        this.category = category;
    }
}