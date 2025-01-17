export default function createCartElement(product, index) {
  const { _id, color, imageUrl, altTxt, name, price, quantity } = product;
  const article = document.createElement("article");
  article.className = "cart__item";
  article.setAttribute("data-id", _id);
  article.setAttribute("data-color", color);
  article.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cart__item__img">
      <img src=${imageUrl} alt=${altTxt}>
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${name}</h2>
        <p>${color}</p>
        <p>€${price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${quantity} table-index="${index}" />
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem" table-index="${index}">Delete</p>
        </div>
      </div>
    </div>
  `
  );
  return article;
}
