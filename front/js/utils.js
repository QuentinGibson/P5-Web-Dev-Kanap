const url = new URL(document.URL)
const apiUrl = 'https://' + url.hostname.replace('5500', '3000')

function getCart() {
  const data = localStorage.getItem("cart")
  if (data === '' || data === null || data === undefined) {
    return []
  }
  return JSON.parse(data)
}
function deleteOrder(_index) {
  const cart = getCart()
  const newCart = cart.filter((product, index) => index !== _index)
  updateCart(newCart)
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
  if (order.quantity > 0 && order.color !== '') {
    if (existsInCart) {
      return cart.map(combineLikeItems)
    } else {
      cart = [...cart, order]
    }
  }
  updateCart(cart)
}

function updateOrder(index, data) {
  const cart = getCart();
  cart[index] = data;
  updateCart(cart)
}
