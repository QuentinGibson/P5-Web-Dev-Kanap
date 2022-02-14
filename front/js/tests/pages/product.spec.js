/**
 * @jest-environment jsdom
 */
import { createImageElement } from "../../src/generators/createImageElement";
import { handleproductImage } from "../../src/lib/product";

describe("product page", () => {
  beforeAll(() => {
    document.body.innerHTML = `
          <div class="item__img"> </div>
          <div class="item__content">
            <div class="item__content__titlePrice">
              <h1 id="title"> </h1>
              <p>Prix : <span id="price"> </span>€</p>
            </div>

            <div class="item__content__description">
              <p class="item__content__description__title">Description:</p>
              <p id="description"> </p>
            </div>

            <div class="item__content__settings">
              <div class="item__content__settings__color">
                <label for="color-select">Chose your color:</label>
                <select name="color-select" id="colors">
                  <option value="">--Please, select a color --</option>
                </select>
              </div>

              <div class="item__content__settings__quantity">
                <label for="itemQuantity">Number of articles (1-100):</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
              </div>
            </div>

            <div class="item__content__addButton">
              <button id="addToCart">Add to cart</button>
            </div>

          </div>
    `;
  });
  describe("on load", () => {
    test("product image added", () => {
      const image = createImageElement("testUrl", "test");
      handleproductImage(image);
      const img = document.getElementsByTagName("img")[0];
      expect(img).toBeTruthy();
    });
    test("product name added", () => {
      const name = document.getElementById("title");
      const length = name.length;
      expect(length).toBeGreaterThanOrEqual(1);
    });
    test("product price on load", () => {
      const price = document.getElementById("price");
    });
  });
});
