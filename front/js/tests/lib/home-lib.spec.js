/**
 * @jest-environment jsdom
 */
import { handleProducts, handleError } from "../../src/lib/home";

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
  handleProducts(products);
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
