const { moduleExpression } = require("@babel/types")

const url = new URL(document.URL)
const apiUrl = 'https://' + url.hostname.replace('5500', '3000')

class Cart {
  constructor(cart) {
    if (cart) {
      this.cart = cart
    } else {
      this.cart = this.getCart()
    }
  }
  getCart() {
    const data = localStorage.getItem("cart")
    if (data === '' || data === null || data === undefined) {
      return []
    }
    return JSON.parse(data)
  }
  deleteProduct(_index) {
    this.cart = this.cart.filter((_product, index) => index !== _index)
  }
  exists(product) {
    this.cart.forEach(element => {
      const { _color, _id } = element
      const { color, id } = product
      if (_color === color && id === _id) {
        return true
      }
    });
    return false
  }

  addProduct(order) {
    const existsInCart = this.cart.some(product => this.cart.exists(product))
    const isSameOrder = order.quantity > 0 && order.color !== ''

    function combineSameProducts(product) {
      function appendOrderToProduct(order) {
        product.quantity = Number.parseInt(product.quantity) + Number.parseInt(order.quantity)
      }
      return this.cart.exists(product) ? appendOrderToProduct(order) : product
    }

    if (isSameOrder) {
      this.cart = existsInCart ? this.cart.map(combineSameProducts) : this.cart = [...cart, order]
    }
  }

  updateOrder(index, data) {
    this.cart[index] = data;
  }

  write(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}
module.exports = Cart