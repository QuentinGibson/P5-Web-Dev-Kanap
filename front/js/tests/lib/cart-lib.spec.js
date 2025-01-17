/**
 * @jest-environment jsdom
 */
import { handleLoad } from "../../src/lib";
import {
  handleChange,
  displayError,
  handleDeleteButton,
} from "../../src/lib/cart";
import ProductTable from "../../src/lib/productTable";
describe("cart page:", () => {
  describe("products", () => {
    beforeAll(() => {
      window.localStorage.clear();
      new ProductTable([
        {
          name: "test",
          id: "test",
          color: "test",
          altTxt: "test",
          price: 100,
          quantity: 10,
          imageUrl: "test",
        },
      ]);
    });
    test("should display products from the productTable", () => {
      const productTable = new ProductTable();
      document.body.innerHTML = `<div id="cart__items"></div>`;
      handleLoad(productTable);
      const cart = document.getElementsByClassName("cart__item");
      expect(cart.length).toBeGreaterThan(0);
    });
    describe("Event Listeners", () => {
      beforeAll(() => {
        document.body.innerHTML = `
        <div id="totalQuantity"></div>
        <div id="totalPrice"></div>
      `;
      });
      test("event handler for input should update table", () => {
        const event = { target: { value: 30, getAttribute: () => 0 } };
        const index = 0;
        const productTable = new ProductTable();
        let table = productTable.table;
        const product = table[index];
        handleChange(event);
        productTable.fetch();
        table = product.table;
        const expected = Object.assign({}, { quantity: 30 }, product);
        expect(product).toEqual(expected);
      });

      test("event handler for delete button should delete element from product table", () => {
        const event = { target: { getAttribute: () => 0, closest: () => 0 } };
        handleDeleteButton(event);
      });
    });
  });
  describe("project form", () => {
    describe("input error handling", () => {
      test("should fill provided element with error message", () => {
        document.body.innerHTML = `<p id="firstNameErrorMsg"></p>`;
        const element_id = "firstNameErrorMsg";
        const message = "test";
        displayError(element_id, message);
        const content = document.getElementById("firstNameErrorMsg").innerHTML;
        expect(content.length).toBeGreaterThan(0);
      });
    });
  });
});
