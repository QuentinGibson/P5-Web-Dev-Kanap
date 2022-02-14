import fetchProducts from "./lib/fetchProducts";

document.addEventListener("load", () => {
  fetchProducts()
    .then((products) => handleProducts(products))
    .catch((error) => handleError(error));
});
