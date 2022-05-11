import createTag from "../utils/createTag";

function Developer(...classes) {
    const developer = createTag('section', null, 'container', 'developer', ...classes),
          title     = createTag('h2', null, 'developer__title'),
          link      = createTag('a', null, 'developer__link', 'link'),
          text      = createTag('p', null, 'developer__description');
    title.textContent   = 'Desarrollado por ';
    link.target         = '_blank';
    link.href           = 'https://www.linkedin.com/in/amaujipe/';
    link.textContent    = 'Andres Jimenez';
    text.textContent    = '2022';
    title.appendChild(link);
    developer.appendChild(title);
    developer.appendChild(text);
    return developer;
}

export default Developer;