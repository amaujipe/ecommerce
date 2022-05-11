import addProductView from "../views/add-product";
import adminView from "../views/admin";
import error404 from "../views/error-404";
import indexView from "../views/index";
import loginView from "../views/login";
import productView from "../views/product";
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
    '/': indexView,
    '/:id': productView,
    '/add-product': addProductView,
    '/admin': adminView,
    '/login': loginView
};

// This router will return the content to show in the main tag
async function router() {
    const main = null || document.getElementById('main');
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let renderView = routes[route] ? routes[route] : error404;
    main.appendChild(renderView);
    console.log(hash);
};
export default router;