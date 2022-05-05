import { createContainerTag } from "../helpers.js";

function banner() {
    const banner = createContainerTag(
        'section',
        null,
        'banner'
    );
    const bannerContainer = createContainerTag(
        'div',
        null,
        'container'
    );
    bannerContainer.innerHTML = `
        <h1 class="banner__title">Mayo Promocional</h1>
        <p class="banner__description">Productos seleccionados con 33% de descuento</p>
        <a class="banner__button button button--primary" href="#">Ver Consolas</a>
    `;
    banner.appendChild(bannerContainer);
    return banner;
}

export default banner;