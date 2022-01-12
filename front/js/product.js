const url = new URL(document.URL)
const apiUrl = 'https://' + url.hostname.replace('5500', '3000')
document.addEventListener("DOMContentLoaded", index)

async function index() {
  const searchParams = new URLSearchParams(url.search)
  const currentId = searchParams.get('id')

  await fetch(`${apiUrl}/api/products/${currentId}`)

    .then(response => response.json())
    .then(product => {
      function appendImage() {
        const img_container = document.getElementsByClassName("item__img")[0]
        const img = document.createElement('img')
        img.src = `${product.imageUrl}`
        img.alt = `${product.altTxt}`
        img_container.appendChild(img)
      }
      function appendName() {
        const name_container = document.getElementById('title')
        const name = document.createElement('h1')
        name.innerHTML = `${product.name}`
        name_container.append(name)
      }
      function appendPrice() {
        const price = document.getElementById('price')
        price.innerHTML = `${product.price}`
      }
      function appendDescription() {
        const description = document.getElementById('description')
        description.innerHTML = `${product.description}`
      }
      function appendColors() {
        const selectInput = document.getElementById('colors')
        const options = product.colors.map(color => {
          return document.createRange().createContextualFragment(`<option value="${color}">${color}</option>`)
        })
        options.forEach(option => selectInput.appendChild(option))
      }
      appendImage()
      appendName()
      appendPrice()
      appendDescription()
      appendColors()
    })
    .catch("There was an unknown issue while getting the products. Please check the server and try again!")

  const cartElement = document.getElementById('addToCart');
  cartElement.addEventListener('click', function () {

    function getCart() {
      const data = localStorage.getItem("cart")
      if (data === '' || data === null || data === undefined) {
        return []
      }
      return JSON.parse(data)
    }

    function updateCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }

    function addToCart(order) {
      function indexCart({ _id, color }) {
        return order._id === _id && order.color === color
      }

      const existsInCart = currentCart.some(product => indexCart(product))
      if (order.quantity > 0) {
        if (existsInCart) {
          return currentCart.map(product => {
            if (indexCart(product)) {
              product.quantity = Number.parseInt(product.quantity) + Number.parseInt(order.quantity)
            }
            return product
          })
        } else {
          return [...currentCart, order]
        }
      } else {
        return currentCart
      }
    }

    function deleteFromCart(id) {
      return currentCart.filter(item => id !== item._id)
    }


    const currentCart = getCart() || []
    const order = {
      "color": document.getElementById("colors").value,
      "quantity": document.getElementById("quantity").value,
      "_id": currentId
    }

    const newCart = addToCart(order)
    console.log(newCart)
    updateCart(newCart)
  })
}
