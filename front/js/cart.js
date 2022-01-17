let cart = getCart();
const productElementPromises = cart.map(createProductElement)
const cartItemsElement = document.getElementById('cart__items')
const cartPriceElement = document.getElementById('totalQuantity')

function generateProductElement(product, order) {
  return `<article class="cart__item" data-id="${product._id}" data-color="${order.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${order.color}</p>
        <p>€${total(product.price, order.quantity)}</p>
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
}
async function createProductElement() {
  const { _id } = order
  return await fetch(`${apiUrl}/api/products/${_id}`)
    .then(response => {
      if (response.status === 200) {
        return response.json()
          .then(product => {
            const productElement = generateProductElement(product, order)
            return [productElement, index]
          })
      } else {
        console.log(response.status)
        console.error("There was a problem with the server")
      }
    })
}
function total(price, quantity) {
  return price * quantity
}
function checkString(string) {
  return typeof string === "string" && Number.isNaN(string)
}
Promise.all(productElementPromises)
  .then(response => {
    for (data of response) {
      const element = data[0]
      const index = data[1]

      function handleDeleteButtonClick(event) {
        const articleElement = event.target.closest('article.cart__item')
        articleElement.remove()
        deleteOrder(index)
      }
      function handleQuantityChange(event) {
        const newValue = event.target.value
        cart[index].quantity = newValue
        updateOrder(index, cart[index])
      }

      function appendFragToDocument() {
        const frag = document.createRange().createContextualFragment(element)
        //TODO: When I add these line all the products do not show on the cart page
        frag.querySelector('.itemQuantity').addEventListener('change', handleQuantityChange)
        frag.querySelector('.deleteItem').addEventListener('click', handleDeleteButtonClick)
        cartItemsElement.appendChild(frag)
      }

      appendFragToDocument()
    }
  })