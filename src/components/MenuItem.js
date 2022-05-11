import createTag from "../utils/createTag.js";

function MenuItem(text, url) {
    const menuItem = createTag('li', null, 'menu__item'),
          menuLink = createTag('a', null, 'menu__link');
    menuLink.href = url;
    menuLink.textContent = text;
    menuItem.appendChild(menuLink);
    return menuItem;
}

export default MenuItem;