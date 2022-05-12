import createTag from "../utils/createTag";

function error404() {
    const notFound = createTag('h1', null, 'main', 'container');
    notFound.textContent = 'Error 404.';

    return notFound;
}

export default error404;