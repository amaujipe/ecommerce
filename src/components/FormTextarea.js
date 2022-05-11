import createTag from "../utils/createTag";

function FormTextarea(placeholder, ...classes) {
    const textArea = createTag('textarea', null, 'form__textarea', ...classes);
    textArea.setAttribute('placeholder', placeholder);
    return textArea;
}

export default FormTextarea;