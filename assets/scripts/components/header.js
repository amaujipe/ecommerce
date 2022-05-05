import { createContainerTag } from "../helpers.js";

function header() {
    const header = document.getElementById('header');
    const headerContainer = createContainerTag(
        'div',
        null,
        'container'
    );
    headerContainer.innerHTML = `
        <div class="header__logo logo">
            <img class="logo__image"src="assets/images/icon-logo.svg" alt="Logo de AluraGeek" />
            <span class="logo__brand logo__brand--alt">Alura</span><span class="logo__brand">Geek</span>
        </div>
        <div class="header__actions">
            <a class="header__button button button--secondary" href="#">Login</a>
            <div class="header__search">
                <span class="header__search-text">¿Que deseas buscar?</span>
                <img class="header__search-icon" src="assets/images/search.svg" alt="Icono de lupa" />
            </div>
        </div>
    `;
    header.appendChild(headerContainer);
    return header;
}

export default header;