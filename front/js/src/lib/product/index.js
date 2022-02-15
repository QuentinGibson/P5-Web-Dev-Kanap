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
    nameElement.insertAdjacentText("beforebegin", name);
  }
}

export function handleProductPrice(price) {
  const priceElement = document.getElementById("price");
  if (priceElement) {
    priceElement.insertAdjacentText("beforebegin", price);
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
  selector.insertAdjacentHTML("beforebegin", colorElementArray);
}

export function handleCartButtonClick() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  const button = document.getElementById("addToCart");
  button.addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    const color = document.getElementById("colors").value;
    const product = Object.assign(
      {},
      { quantity, color },
      productTable.get(id)
    );
    const productTable = new ProductTable();
    productTable.write(product);
  });
}
