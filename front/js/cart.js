function checkString(string) {
  return typeof string === "string" && Number.isNaN(string)
}

const cartItemsElement = document.getElementsById('cart__items')
const cartPriceElement = document.getElementsById('totalQuantity')

const firstNameValue = document.getElementsById('firstName')
const lastNameValue = document.getElementsById('lastName')
const addressValue = document.getElementsById('address')
const cityValue = document.getElementsById('city')
const email = document.getElementsById('email')

const firstNameErrorMsgElement = document.getElementsById('firstNameErrorMsg')
const lastNameErrorMsgElement = document.getElementsById('lastNameErrorMsg')
const addressErrorMsgElement = document.getElementsById('addressErrorMsg')
const cityErrorMsgElement = document.getElementsById('cityErrorMsg')
const emailErrorMsgElement = document.getElementsById('emailErrorMsg')

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