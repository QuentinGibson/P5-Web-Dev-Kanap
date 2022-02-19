export default function createProductElement(product) {
  const { _id, name, description, imageUrl, altTxt } = product;
  const anchorTag = document.createElement("a");
  anchorTag.href = `product.html?id=${_id}`;
  const article = document.createElement("article");
  article.innerHTML = `
      <img src="${imageUrl}" alt="${altTxt}" />
      <h3 class="productName">${name}</h3>
      <p class="productDescription">${description}</p>
  `;
  anchorTag.appendChild(article);
  return anchorTag;
}
