import createTag from "../utils/createTag.js";
import Logo from "./Logo.js";
import Button from "./Button.js";
import Search from "./Search.js";

function Header() {
    const header    = createTag('header', 'header', 'header'),
          container = createTag('div', null, 'container'),
          actions   = createTag('div', null, 'header__actions'),
          logo      = Logo('header__logo'),
          button    = Button('/login', 'button--secondary', 'header__button'),
          search    = Search('header__search');
    button.textContent = 'Login';
    actions.appendChild(button);
    actions.appendChild(search);
    container.appendChild(logo);
    container.appendChild(actions);
    header.appendChild(container);
    return header;
}

export default Header;