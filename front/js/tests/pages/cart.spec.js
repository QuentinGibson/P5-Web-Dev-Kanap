/**
 * @jest-environment jsdom
 */
import handleLoad from "../../src/lib/handleLoad";
test("should display products from the productTable", () => {
  const productTable = [
    {
      name: "test",
      id: "test",
      color: "test",
      altTxt: "test",
      price: 100,
      quantity: 10,
      imageUrl: "test",
    },
  ];
  document.body.innerHTML = `<div class="cart__items"></div>`;
  handleLoad(productTable);
  const cart = document.getElementsByClassName("cart__item");
  expect(cart.length).toBeGreaterThan(0);
});
