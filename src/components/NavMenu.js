import createTag from "../utils/createTag";
import MenuItem from "./MenuItem";

function NavMenu(itemList ,...classes) {
    const items     = [...itemList],
          navMenu   = createTag('nav', null, 'nav', ...classes),
          menuList  = createTag('ul', null, 'menu'); 
    items.map(item => {
        const [ text, url ] = item;
        const menuItemTag = MenuItem(text, url);
        menuList.appendChild(menuItemTag);
    });
    navMenu.appendChild(menuList);
    return navMenu;
}

export default NavMenu;


/* <nav class="aside__nav nav">
    <ul class="menu">
        <li class="menu__item"><a href="#" class="menu__link">Quienes Somos</a></li> */