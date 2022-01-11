function checkString(string) {
  return typeof string === "string" && Number.isNaN(string)
}

const cartItemsElement = document.getElementById('cart__items')
const cartPriceElement = document.getElementById('totalQuantity')

const firstNameValue = document.getElementById('firstName')
const lastNameValue = document.getElementById('lastName')
const addressValue = document.getElementById('address')
const cityValue = document.getElementById('city')
const email = document.getElementById('email')

const firstNameErrorMsgElement = document.getElementById('firstNameErrorMsg')
const lastNameErrorMsgElement = document.getElementById('lastNameErrorMsg')
const addressErrorMsgElement = document.getElementById('addressErrorMsg')
const cityErrorMsgElement = document.getElementById('cityErrorMsg')
const emailErrorMsgElement = document.getElementById('emailErrorMsg')

const total = (price, quantity) => price * quantity
const newProductElementString = (product, order) =>
  `<article class="cart__item" data-id="${product._id}" data-color="${order.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${order.color}</p>
        <p>€${order.price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${order.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Delete</p>
        </div>
      </div>
    </div>
  </article>`