import createCartElement from "../generators/createCartElement";
import handleChange from "./handleChange";
import handleDeleteButton from "./handleDeleteButton";
export default function handleLoad(productTable) {
  if (productTable) {
    const container = document.getElementById("cart__items");
    for (let index of productTable) {
      console.log(index);
      const product = productTable[index];
      const element = createCartElement(product);
      const inputElement = element.getElementsByName("itemQuantity")[0];
      const deleteButton = element.getElementByClassName("deleteItem")[0];
      inputElement.addEventListener("change", (event) =>
        handleChange(event, index)
      );
      deleteButton.addEventListener("click", (event) =>
        handleDeleteButton(event, index)
      );
      container.insertAdjacentHTML("beforeend", element);
    }
  } else {
    throw new Error("ProductTable is undedined. Cannot make elements");
  }
}
