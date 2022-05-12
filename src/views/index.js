import Banner from "../components/Banner";
import AvailableProducts from "../components/AvailableProducts";

function indexView(container) {
    const fragment = new DocumentFragment(),
          mainBanner = Banner(),
          availableProducts = AvailableProducts();
    fragment.appendChild(mainBanner);
    fragment.appendChild(availableProducts);
    return fragment;
}

export default indexView;