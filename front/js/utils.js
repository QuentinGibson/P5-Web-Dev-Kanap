// const url = new URL(document.URL)
// const apiUrl = 'https://' + url.host_id.replace('5500', '3000')

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
    this.cart.some(element => {
      const { color, _id: id } = element
      const { color: _color, _id } = product
      return (color === _color && id === _id)
    });
  }

  addProduct(order) {
    const isValidOrder = order.quantity > 0 && order.color !== ''
    function combineSameProducts(product) {
      function appendOrderToProduct(order) {
        product.quantity = Number.parseInt(product.quantity) + Number.parseInt(order.quantity)
      }
      return this.exists(product) ? appendOrderToProduct(order) : product
    }

    if (isValidOrder) {
      if (this.exists(order)) {
        this.cart.map(combineSameProducts)
      } else {
        this.cart = [...this.cart, order]
      }
    }
  }

  updateProduct(index, data) {
    this.cart[index] = data;
  }

  write(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}
module.exports = Cart