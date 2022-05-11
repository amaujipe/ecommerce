import createTag from "../utils/createTag";

function Search(...classes) {
    const form  = createTag('form', null, 'search', ...classes),
          input = createTag('input', null, 'search__input'),
          icon  = createTag('img', null, 'search__icon');
    input.type = 'text';
    input.placeholder = '¿Que deseas buscar?';
    icon.src = "assets/images/search.svg"
    icon.alt = "Icono de lupa"
    form.appendChild(input);
    form.appendChild(icon);
    return form;
}

export default Search;