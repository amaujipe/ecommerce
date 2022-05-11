import createTag from "../utils/createTag";

function ContactForm(...classes) {
    const contactForm   = createTag('section', null, 'contact', ...classes),
          title         = createTag('h2', null, 'form__title'),
          form          = createTag('form', null, 'contact__form', 'form'),
          input         = createTag('input', null, 'form__input'),
          textarea      = createTag('textarea', null, 'form__textarea'),
          button        = createTag('button', null, 'form__button', 'button', 'button--primary');
    title.textContent = 'Hable con nosotros';
    input.type = 'text';
    input.placeholder = 'Nombre';
    textarea.placeholder = 'Escribe tu mensaje';
    button.textContent = 'Enviar Mensaje';
    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(button);
    contactForm.appendChild(title);
    contactForm.appendChild(form);
    return contactForm;
}

export default ContactForm;