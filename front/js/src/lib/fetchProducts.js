export async function fetchProducts(id) {
  const url = "https://localhost:3000/api/products/";
  return id
    ? await fetch(url + id).then((data) => data.json())
    : await fetch(url).then((data) => data.json());
}
