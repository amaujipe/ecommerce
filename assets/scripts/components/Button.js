import createTag from "../utils/createTag.js";

function Button(url, ...classes) {
    const button = createTag('a', null, 'button', ...classes);
    button.setAttribute('href', url);
    return button
}

export default Button;