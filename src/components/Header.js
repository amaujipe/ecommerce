import createTag from "../utils/createTag";
import Logo from "./Logo";
import Button from "./Button";
import Search from "./Search";

function Header() {
    const header    = createTag('header', 'header', 'header'),
          container = createTag('div', null, 'container'),
          actions   = createTag('div', null, 'header__actions'),
          logo      = Logo('header__logo'),
          button    = Button('#/login', 'Login', 'button--secondary', 'header__button'),
          search    = Search('header__search');
    actions.appendChild(button);
    actions.appendChild(search);
    container.appendChild(logo);
    container.appendChild(actions);
    header.appendChild(container);
    return header;
}

export default Header;