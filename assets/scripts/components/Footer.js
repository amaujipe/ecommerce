import createTag from "../utils/createTag.js";
import { footerMenu } from "../utils/menuData.js";
import Logo from "./Logo.js";
import NavMenu from "./NavMenu.js";
import ContactForm from "./ContactForm.js";
import Developer from "./Developer.js";

function Footer(...classes) {
    const footer        = createTag('footer', 'footer', 'footer'),
          footerTopArea = createTag('section', null, 'footer__top-area'),   
          container     = createTag('div', null, 'container'),
          brand         = createTag('div', null, 'footer__brand'),          
          logo          = Logo('footer__logo'),                             
          menu          = NavMenu(footerMenu, 'footer__nav'),               
          contactForm   = ContactForm('footer__contact'),                   
          developer     = Developer()
    brand.appendChild(logo);
    brand.appendChild(menu);
    container.appendChild(brand);
    container.appendChild(contactForm);
    footerTopArea.appendChild(container);
    footer.appendChild(footerTopArea);
    footer.appendChild(developer);
    return footer;
}

export default Footer;