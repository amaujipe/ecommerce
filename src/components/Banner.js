import createTag from "../utils/createTag.js";
import Button from "./Button.js";

function Banner() {
    const banner    = createTag('section', null, 'banner'),
          container = createTag('div', null, 'container'),
          title     = createTag('h1', null, 'banner__title'),
          text      = createTag('p', null, 'banner__description'),
          button    = Button('#Consolas', 'button--primary', 'banner__button');
    title.textContent   = 'Mayo Promocional';
    text.textContent    = 'Productos seleccionados con 33% de descuento';
    button.textContent  = 'Ver consolas'; 
    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(button);
    banner.appendChild(container);
    return banner;
}

export default Banner;