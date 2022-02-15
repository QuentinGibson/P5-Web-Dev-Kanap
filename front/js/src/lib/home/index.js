import { createProductElement } from "../../generators/createProductElement";

export function handleProducts(products) {
  const container = document.getElementById("items");
  if (products) {
    for (let product of products) {
      const element = createProductElement(product);
      container.insertAdjacentHTML("beforeend", element);
    }
  } else {
    throw new Error("Pass in products to handleProducts");
  }
}

export function handleError(_error) {
  const container = document.getElementById("items");
  container.insertAdjacentHTML(
    "beforeend",
    `<h3 id="errormsg">Sorry there was a problem fetching the couches</h3>`
  );
}
