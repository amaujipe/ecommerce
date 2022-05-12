import createTag from "../utils/createTag";
import Button from "./Button";

function Gallery({ title, id }, seeAll) {
    const gallery       = createTag('section', title, 'gallery', 'container'),
          header        = createTag('div', null, 'gallery__header'),
          galleryTitle  = createTag('h2', null, 'gallery__title');

    galleryTitle.textContent = title;
    header.appendChild(galleryTitle);
    if(seeAll) {
        const link = Button(`#/category/${id}`, 'Ver todo', 'gallery__link');
        header.appendChild(link);
    }
    gallery.appendChild(header);
    return gallery;
}

export default Gallery;