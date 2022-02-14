import createCartElement from "../../generators/createCartElement";
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
