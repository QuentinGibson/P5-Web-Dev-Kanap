const url = new URL(document.URL)
const apiUrl = 'https://' + url.hostname.replace('5500', '3000')

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

function addProduct(order) {
  let cart = getCart();
  function indexCart({ _id, color }) {
    return order._id === _id && order.color === color
  }
  const combineLikeItems = product => {
    if (indexCart(product)) {
      product.quantity = Number.parseInt(product.quantity) + Number.parseInt(order.quantity)
    }
    return product
  }

  const existsInCart = cart.some(product => indexCart(product))
  if (order.quantity > 0) {
    if (existsInCart) {
      return cart.map(combineLikeItems)
    } else {
      cart = [...cart, order]
    }
  }
  updateCart(cart)
}

function updateProduct(id, data) {
  cart = getCart();
  for (let product of cart) {
    let { _id } = product;
    if (id === _id) {
      cart[i] = data
    }
  }
  updateCart(cart)
}
