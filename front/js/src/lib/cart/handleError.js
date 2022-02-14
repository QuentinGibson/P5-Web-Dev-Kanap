export default function handleError() {
  const container = document.getElementById("cart__items");
  const errorMsg = `<h3>Please add items to your cart</h3>`;
  container.insertAdjacentHTML("beforeend", errorMsg);
}
