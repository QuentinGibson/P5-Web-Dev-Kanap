export function createProductElement(product) {
  const { id, name, description, imageUrl, altTxt } = product;
  const anchorTag = document.createElement("a");
  anchorTag.href = `product.html?id=${id}`;
  const article = document.createElement("article");
  article.innerHTML = `
      <img href="${imageUrl} alt=${altTxt} />
      <h3 class="productName">${name}</h3>
      <p class="productDescription">${description}</p>
  `;
  anchorTag.appendChild(article);
  return anchorTag;
}
