import createCartElement from "../generators/createCartElement";
import handleChange from "../lib/cart/handleChange";
import handleDeleteButton from "./handleDeleteButton";
export default function handleLoad(productTable) {
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
