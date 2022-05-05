function footer() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <section class="aside">
            <div class="container">
                <div class="aside__brand">
                    <div class="aside__logo logo">
                        <img class="logo__image"src="assets/images/icon-logo.svg" alt="Logo de AluraGeek" />
                        <span class="logo__brand logo__brand--alt">Alura</span><span class="logo__brand">Geek</span>
                    </div>
                    <nav class="aside__nav nav">
                        <ul class="menu">
                            <li class="menu__item"><a href="#" class="menu__link">Quienes Somos</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Política de privacidad</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Programa de fidelidad</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Nuestras tiendas</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Quiero ser franquiciado</a></li>
                            <li class="menu__item"><a href="#" class="menu__link">Anúnie aquí</a></li>
                        </ul>
                    </nav>
                </div>
                <section class="aside__contact contact">
                    <h2 class="form__title">Hable con nosotros</h2>
                    <form class="contact__form form" action="#">
                        <input class="form__input" type="text" placeholder="Nombre" />
                        <textarea class="form__textarea" placeholder="Escribe tu mensaje"></textarea>
                        <button class="form__button button button--primary" type="submit">Enviar mensaje</button>
                    </form>
                </section>
            </div>
        </section>
        <section class="container">
            <h2 class="footer__title">Desarrollado por <a class="footer__link" href="#">Andres Jimenez</a></h2>
            <p class="footer__description">2022</p>
        </section>
    `;
}

export default footer;