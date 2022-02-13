import { fetchProducts } from "./fetchProducts";
import { createProductElement } from "./createProductElement.js";

export const handleProducts = (products) => {
  const container = document.getElementById("items");
  if (products) {
    for (let product of products) {
      const element = createProductElement(product);
      container.insertAdjacentHTML("beforeend", element);
    }
  } else {
    throw new Error("Pass in products to handleProducts");
  }
};

export const handleError = (error) => {
  const container = document.getElementById("items");
  container.insertAdjacentHTML(
    "beforeend",
    `<h3 id="errormsg">Sorry there was a problem fetching the couches</h3>`
  );
  console.log(error);
};

document.addEventListener("load", () => {
  fetchProducts()
    .then((products) => handleProducts(products))
    .catch((error) => handleError(error));
});
