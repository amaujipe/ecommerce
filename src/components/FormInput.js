import createTag from "../utils/createTag";

function FormInput(type, placeholder, ...classes) {
    console.log(type, placeholder, classes)
    const input = createTag('input',  null, 'form__input', ...classes);
    input.setAttribute('type', type);
    input.setAttribute('placeholder', placeholder);
    return input;
}

export default FormInput;

// <input class="form__input" type="password" placeholder="Escriba su contraseña" />