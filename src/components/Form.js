import createTag from "../utils/createTag";
import Button from "./Button";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

function Form({ inputs, textarea, button, classes } ) {
    const form = createTag('form', null, 'form', ...classes);
    if(inputs.length > 0) {
        inputs.map(singleInput => {
            const { type, placeholder } = singleInput;
            const input = FormInput(type, placeholder);
            form.appendChild(input);
        });
    }

    if(textarea) {
        const { placeholder } = textarea;
        const textArea = FormTextarea(placeholder);
        form.appendChild(textArea);
    }

    form.appendChild(button);
    return form;
}

export default Form;





// form = Form(inputs, textarea, button, classes);
/*
<form class="login__form form" action="#">
    <input class="form__input" type="text" placeholder="Escriba su correo electronico" />
    <input class="form__input" type="password" placeholder="Escriba su contraseña" />
    <button class="form__button button button--primary" type="submit">Entrar</button>
</form>
*/