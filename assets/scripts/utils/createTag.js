// Creates an HTML tag which will be another elements container
// tagName: Must be a valid HTML sectioning tag name (div, section, article, etc.)
// id     : If you dont need the ID attribute, send null as argument
// classes: List of classes for CSS styles, y you dont need classes dont wrote anything
function createTag(tagName, id, ...classes) {
    const container = document.createElement(tagName);
    if(id)
        container.id = id;
    if(classes.length > 0)
        container.classList.add(...classes)
    return container;
}

export default createTag;