import createCartElement from "./generators/createCartElement";
import {
  addEventListenersForCart,
  getTotalPrice,
  getTotalQuantitiy,
} from "./lib/cart";
import ProductTable from "./lib/productTable";

export default function startCart() {
  const productTable = new ProductTable();
  const products = productTable.all();
  const container = document.getElementById("cart__items");
  const cartProducts = products.map((product, index) =>
    createCartElement(product, index)
  );
  for (let index in cartProducts) {
    const cartProduct = cartProducts[index];
    container.appendChild(cartProduct);
  }
}
window.addEventListener("load", () => {
  startCart();
  const inputElements = [...document.getElementsByName("itemQuantity")];
  const deleteButtons = [...document.getElementsByClassName("deleteItem")];
  const productTable = new ProductTable();
  const totalQuantityElement = document.querySelector("#totalQuantity");
  const totalPriceElement = document.querySelector("#totalPrice");
  addEventListenersForCart(inputElements, deleteButtons, productTable);
  totalQuantityElement.insertAdjacentText(
    "beforeend",
    getTotalQuantitiy(productTable)
  );
  totalPriceElemement.insertAdjacentText(
    "beforeend",
    getTotalPrice(productTable)
  );
});
