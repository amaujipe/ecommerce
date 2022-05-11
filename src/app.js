import "./assets/styles/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import createTag from "./utils/createTag";
import router from "./routes/index";

const app = document.getElementById('app'),
      header = Header(),
      main   = createTag('main', 'main', 'main'),
      footer = Footer();
      
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);

window.addEventListener('load', router);
window.addEventListener('hashchange', router);