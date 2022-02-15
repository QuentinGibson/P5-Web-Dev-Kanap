import createCartElement from "../generators/createCartElement";
import { handleChange } from "./cart/";
import { handleDeleteButton } from "./cart";

export async function fetchProducts(id) {
  const url = "https://localhost:3000/api/products/";
  return id
    ? await fetch(url + id).then((data) => data.json())
    : await fetch(url).then((data) => data.json());
}

export function handleLoad(productTable) {
  if (productTable) {
    const container = document.getElementById("cart__items");
    for (let index in productTable) {
      const product = productTable[index];
      const element = createCartElement(product);
      container.appendChild(element);
      const inputElement = document.getElementsByName("itemQuantity")[0];
      const deleteButton = document.getElementsByClassName("deleteItem")[0];
      inputElement.addEventListener("change", (event) =>
        handleChange(event, index)
      );
      deleteButton.addEventListener("click", (event) =>
        handleDeleteButton(event, index)
      );
    }
  } else {
    throw new Error("ProductTable is undedined. Cannot make elements");
  }
}
