import createTag from "../utils/createTag";

function Logo(...classes) {
    const logo      = createTag('div', null, 'logo', ...classes),
          logoImage = createTag('img', null, 'logo__image'),
          logoText  = createTag('p', null, 'logo__brand'),
          textSpan1 = createTag('span', null, 'logo__brand--alt'),
          textSpan2 = createTag('span', null,);
    logoImage.src = "assets/images/icon-logo.svg";
    logoImage.alt = "Logo de AluraGeek";
    textSpan1.textContent = 'Alura';
    textSpan2.textContent = 'Geek';
    logoText.appendChild(textSpan1);
    logoText.appendChild(textSpan2);
    logo.appendChild(logoImage);
    logo.appendChild(logoText);
    return logo;
}

export default Logo;