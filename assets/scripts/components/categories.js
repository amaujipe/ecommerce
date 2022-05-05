import { showCategories, createContainerTag } from "../helpers.js";
import { categoryList } from "../categoryList.js";

function categories() {
    const categories = createContainerTag(
        'section',
        null,
        'categories'
    );
    const categoriesContainer = createContainerTag(
        'div',
        'categoriesContainer',
        'container'
    );
    showCategories(categoriesContainer, categoryList);
    categories.appendChild(categoriesContainer);
    return categories;
}    

export default categories;