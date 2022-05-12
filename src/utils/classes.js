export class Category {
    static createdCategories = 0;
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.asociatedProducts = [];
        this.id = Category.createdCategories;
        Category.createdCategories++;
    }
}

export class Product {
    static createdProducts = 0;
    constructor(title, description, price, imageSlug, category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageSlug = imageSlug;
        this.category = category;
        this.id = Product.createdProducts;
        Product.createdProducts++;
    }
}