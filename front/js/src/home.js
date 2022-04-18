import { fetchProducts } from "./lib";
import { handleError, handleProducts } from "./lib/home";

export function startHome() {
  fetchProducts()
    .then((products) => handleProducts(products))
    .catch((error) => handleError(error));
}
window.addEventListener("load", startHome);
