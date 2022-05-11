import createTag from "../utils/createTag";
import Button from "./Button";

function Banner() {
    const banner    = createTag('section', null, 'banner'),
          container = createTag('div', null, 'container'),
          title     = createTag('h1', null, 'banner__title'),
          text      = createTag('p', null, 'banner__description'),
          button    = Button('#Consolas', 'Ver consolas', 'button--primary', 'banner__button');
    title.textContent   = 'Mayo Promocional';
    text.textContent    = 'Productos seleccionados con 33% de descuento';
    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(button);
    banner.appendChild(container);
    return banner;
}

export default Banner;