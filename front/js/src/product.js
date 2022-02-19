import { createProductColorElement } from "./generators/createProductColorElement";
import { fetchProducts } from "./lib";
import { createImageElement } from "./generators/createImageElement";
import {
  handleColors,
  handleProductDescription,
  handleProductName,
  handleProductPrice,
  handleProductImage,
  handleCartButtonClick,
} from "./lib/product";

export function startProduct() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  fetchProducts(id).then((product) => {
    const { colors, description, name, price, imageUrl, altTxt } = product;
    const colorOptions = colors.map((color) =>
      createProductColorElement(color)
    );
    const imageElement = createImageElement(imageUrl, altTxt);
    handleColors(colorOptions);
    handleProductDescription(description);
    handleProductName(name);
    handleProductPrice(price);
    handleProductImage(imageElement);
    handleCartButtonClick();
  });
}
window.addEventListener("load", startProduct);
