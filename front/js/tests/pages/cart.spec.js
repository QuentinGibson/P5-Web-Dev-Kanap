/**
 * @jest-environment jsdom
 */
import displayError from "../../src/lib/cart/displayError";
import handleLoad from "../../src/lib/handleLoad";
import handleChange from "../../src/lib/cart/handleChange";
import handleDeleteButton from "../../src/lib/handleDeleteButton";
import ProductTable from "../../src/lib/productTable";
import handleSubmit from "../../src/lib/cart/handleSubmit";
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
      test("event handler for input should update table", () => {
        const productTable = new ProductTable();
        const event = { target: { value: 30 } };
        const index = 0;
        let table = productTable.table;
        const product = table[index];
        handleChange(event, index);
        productTable.fetch();
        table = product.table;
        const expected = Object.assign({}, { quantity: 30 }, product);
        expect(product).toEqual(expected);
      });

      test("event handler for delete button should delete element from product table", () => {
        const index = 0;
        handleDeleteButton(index);
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
    describe("submission", () => {
      test("should save number into localStorage", () => {
        handleSubmit();
        expect(window.localStorage.getItem("number")).toBeTruthy();
      });
    });
  });
});
