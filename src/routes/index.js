import addProductView from "../views/add-product.js";
import adminView from "../views/admin.js";
import error404 from "../views/error-404.js";
import indexView from "../views/index.js";
import loginView from "../views/login.js";
import productView from "../views/product.js";
import getHash from "../utils/getHash.js"
import resolveRoutes from "../utils/resolveRoutes.js";

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