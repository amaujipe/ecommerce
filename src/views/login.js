import createTag from "../utils/createTag";
import Form from "../components/Form";
import Button from "../components/Button";

function loginView() {
    const login = createTag('div', null, 'main__container'),
        formContainer = createTag('section', null, 'main__form'),
        title = createTag('h2', null, 'form__title'),
        form = Form({
            'inputs': [
                { 'type': 'email', 'placeholder': 'Escriba su correo electronico' },
                { 'type': 'password', 'placeholder': 'Escriba su contraseña' }
            ],
            'textarea': null,
            'button': Button('#', 'Entrar', 'button--primary', 'form__button'),
            'classes': ['login__form']
        });
    title.textContent = 'Iniciar Sesion';
    formContainer.appendChild(title);
    formContainer.appendChild(form);
    login.appendChild(formContainer);
    return login;
}

export default loginView;




/*
<div class="main__container">
    <section class="main__form">
        <h2 class="form__title">Iniciar Sesion</h2>
        <form class="login__form form" action="#">
            <input class="form__input" type="email" placeholder="Escriba su correo electronico" />
            <input class="form__input" type="password" placeholder="Escriba su contraseña" />
            <button class="form__button button button--primary" type="submit">Entrar</button>
        </form>
    </section>
</div>
*/