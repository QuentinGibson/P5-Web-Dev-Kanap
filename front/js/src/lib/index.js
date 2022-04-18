import createCartElement from "../generators/createCartElement";

export async function fetchProducts(id) {
  const url = "http://localhost:3000/api/products/";
  return id
    ? await fetch(url + id).then((data) => data.json())
    : await fetch(url).then((data) => data.json());
}

export function handleLoad(productTable) {
  if (productTable) {
    const container = document.getElementById("cart__items");
    const cartProducts = productTable.table.map((product, index) =>
      createCartElement(product, index)
    );
    cartProducts.forEach((element) => {
      container.insertAdjacentElement("beforeend", element);
    });
  } else {
    throw new Error("ProductTable is undefined. Cannot make elements");
  }
}
