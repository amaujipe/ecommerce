import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import createTag from "./utils/createTag.js";
import router from "./routes/index.js";

const app = document.getElementById('app'),
      header = Header(),
      main   = createTag('main', 'main', 'main'),
      footer = Footer();
      
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);

window.addEventListener('load', router);
window.addEventListener('hashchange', router);