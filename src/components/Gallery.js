import createTag from "../utils/createTag";
import Button from "./Button";

function Gallery(title) {
    const gallery       = createTag('section', null, 'gallery', 'container'),
          header        = createTag('div', null, 'gallery__header'),
          galleryTitle  = createTag('h2', null, 'gallery__title'),
          link          = Button('#', 'Ver todo', 'gallery__link');
    galleryTitle.textContent = title;
    header.appendChild(galleryTitle);
    header.appendChild(link);
    gallery.appendChild(header);
    return gallery;
}

export default Gallery;