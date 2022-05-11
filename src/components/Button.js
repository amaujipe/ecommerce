import createTag from "../utils/createTag.js";

function Button(url, text, ...classes) {
    const button = createTag('a', null, 'button', ...classes);
    button.setAttribute('href', url);
    button.textContent = text;
    return button
}

export default Button;