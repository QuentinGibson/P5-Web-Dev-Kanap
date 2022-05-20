import createCartElement from "./generators/createCartElement";
import {
  addEventListenersForCart,
  getTotalPrice,
  getTotalQuantitiy,
  updateTotal,
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
  const form = document.getElementsByClassName("cart__order__form")[0];

  updateTotal();
  addEventListenersForCart(inputElements, deleteButtons);
  form.addEventListener("submit", (event) => {
    const firstName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementsByName("lastName")[0].value;
    const address = document.getElementsByName("address")[0].value;
    const city = document.getElementsByName("city")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const body = JSON.stringify({
      products: productTable.table.map((product) => product._id),
      contact: {
        firstName,
        lastName,
        address,
        email,
        city,
      },
    });

    event.preventDefault();
    fetch("http://localhost:3000/api/products/order/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .then((res) => {
        const { orderId } = res;
        window.location.href =
          window.location.origin +
          `/front/html/confirmation.html?orderId=${orderId}`;
      })
      .catch((_error) =>
        console.log("Could not fetch order number: " + _error)
      );
  });
});
