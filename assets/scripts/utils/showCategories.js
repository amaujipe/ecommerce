import createTag from "./createTag.js";

// Render the available categories in the web
// container: [object] HTML element captured by JS which will act as categories container
// categories: Array whit the available categories
function showCategories(container, categoryList) {
    const categories = [...categoryList];
    categories.map(category => {
        const { title } = category;
        const categoryContainer = createTag(
            'section',
            `${title.toLowerCase().replaceAll(' ', '-')}`,
            'gallery'
        );
        categoryContainer.innerHTML = `
            <div class="gallery__header">
                <h2 class="gallery__title">${title}</h2>
                <a href="#" class="gallery__link">Ver todo</a>
            </div>
        `;
        container.appendChild(categoryContainer);
        return container;
    });
}

export default showCategories;