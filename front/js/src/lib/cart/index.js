import ProductTable from "../productTable";

export function handleDeleteButton(event) {
  const productTable = new ProductTable();
  const index = event.target.getAttribute("table-index");
  productTable.remove(index);
  const element = event.target.closest("article");
  if (element) {
    element.remove();
  }
  updateTotal();
}
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
export function handleChange(event) {
  const productTable = new ProductTable();
  const index = event.target.getAttribute("table-index");
  const newValue = event.target.value;
  const product = productTable.table[index];
  product.quantity = newValue;
  productTable.update(index, product);
  updateTotal();
}

export function addEventListenersForCart(inputElements, deleteButtons) {
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("change", (event) => handleChange(event));
  });
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) =>
      handleDeleteButton(event)
    );
  });
}

export function getTotalQuantitiy() {
  const productTable = new ProductTable();
  const quantityMap = productTable.table.map((product) => product.quantity);
  return quantityMap.reduce((a, b) => Number(a) + Number(b));
}

export function getTotalPrice() {
  const productTable = new ProductTable();
  const quantityMap = productTable.table.map(
    (product) => product.price * product.quantity
  );
  return quantityMap.reduce((a, b) => Number(a) + Number(b));
}

export function updateTotal() {
  const totalQuantityElement = document.querySelector("#totalQuantity");
  const totalPriceElement = document.querySelector("#totalPrice");
  const totalQuantity = getTotalQuantitiy();
  const totalPrice = getTotalPrice();
  totalQuantityElement.innerHTML = totalQuantity;
  totalPriceElement.innerHTML = totalPrice;
}
