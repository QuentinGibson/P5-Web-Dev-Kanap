jest.mock("../../src/fetchProducts");
import fetchProducts from "../../src/fetchProducts";
test("Index Page should have products appended on load", () => {
  document.body.innerHTML = `
      <div id="items">
      </div>
    `;
  dispatchEvent(new Event("load"));
  expect(fetchProducts).toBeCalled();
  expect(document.getElementById("item")).toBe(true);
});
