import { fetchProducts } from "..";
import ProductTable from "../productTable";

export function handleProductImage(imageElement) {
  const imageContainer = document.getElementsByClassName("item__img")[0];
  if (imageContainer) {
    imageContainer.insertAdjacentHTML("beforeend", imageElement);
  }
}

export function handleProductName(name) {
  const nameElement = document.getElementById("title");
  if (nameElement) {
    nameElement.insertAdjacentText("beforeend", name);
  }
}

export function handleProductPrice(price) {
  const priceElement = document.getElementById("price");
  if (priceElement) {
    priceElement.insertAdjacentText("beforeend", price);
  }
}
export function handleProductDescription(description) {
  const descriptionElement = document.getElementById("description");
  if (descriptionElement) {
    descriptionElement.innerHTML = description;
  }
}

export function handleColors(colorElementArray) {
  const selector = document.getElementById("colors");
  selector.insertAdjacentHTML("beforeend", colorElementArray);
}

export function handleCartButtonClick() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  const button = document.getElementById("addToCart");
  button.addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    const color = document.getElementById("colors").value;
    const productTable = new ProductTable();
    fetchProducts(id).then((currentProduct) => {
      const product = Object.assign({}, { quantity, color }, currentProduct);
      delete product.colors;
      productTable.write(product);
    });
  });
}
