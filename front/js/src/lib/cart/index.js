export function postProductTable() {}
export function handleDeleteButton(event, productTable) {
  const index = event.target.getAttribute("table-index");
  productTable.remove(index);
  const element = event.target.closest("article");
  if (element) {
    element.remove();
  }
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
export function handleChange(event, productTable) {
  const index = event.target.getAttribute("table-index");
  const newValue = event.target.value;
  const product = productTable.table[index];
  product.quantity = newValue;
  productTable.update(index, product);
}

export function addEventListenersForCart(
  inputElements,
  deleteButtons,
  productTable
) {
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("change", (event) =>
      handleChange(event, productTable)
    );
  });
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) =>
      handleDeleteButton(event, productTable)
    );
  });
}

export function getTotalQuantitiy(productTable) {
  const returnValue = productTable.table.reduce((a, b) => {
    console.log(`a:${JSON.stringify(a)}`);
    console.log(`b:${JSON.stringify(b)}`);
    return a + b.quantity;
  });
  console.log(`returnValue: ${JSON.stringify(returnValue)}`);
}

export function getTotalPrice(productTable) {
  return productTable.table.reduce((a, b) => {
    return a + b.price;
  });
}
