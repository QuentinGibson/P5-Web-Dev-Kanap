import ProductTable from "../productTable";

export function postProductTable() {}
export function handleDeleteButton() {}
export function handleSubmit() {
  const number = postProductTable();
  localStorage.setItem("number", number);
}

export function displayError(element_id, message) {
  const element = document.getElementById(element_id);
  element.innerHTML = message;
}

export function handleError() {
  const container = document.getElementById("cart__items");
  const errorMsg = `<h3>Please add items to your cart</h3>`;
  container.insertAdjacentHTML("beforeend", errorMsg);
}
export function handleChange(event, index) {
  const productTable = new ProductTable();
  const newValue = event.target.value;
  const product = productTable.table[index];
  product.quantity = newValue;
  productTable.update(index, product);
}
