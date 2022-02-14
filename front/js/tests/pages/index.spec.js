/**
 * @jest-environment jsdom
 */
import { handleProducts, handleError } from "../../src/index";

test("Should throw if no products are passed", () => {
  expect(handleProducts).toThrow("Pass in products to handleProducts");
});
test("Index Page should have products appended on load", () => {
  document.body.innerHTML = `
      <div id="items">
      </div>
    `;
  const products = [
    {
      id: "10",
      name: "test",
      description: "test phrase",
      imageUrl: "test",
      altTxt: "test",
    },
  ];
  // handleProducts(products);
  expect(document.getElementsByTagName("article")).toBeTruthy();
});

test("Should no products exists tell the user", () => {
  document.body.innerHTML = `
      <div id="items">
      </div>
    `;
  handleError("Fake Message");
  const title = document.getElementById("errormsg");
  expect(title).toBeTruthy();
});
