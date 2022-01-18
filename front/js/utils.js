// const url = new URL(document.URL)
// const apiUrl = 'https://' + url.host_id.replace('5500', '3000')

const { createTestScheduler } = require("jest")

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
  addProduct(newProduct) {
    const isValidOrder = newProduct.quantity > 0 && newProduct.color !== ''
    const findIndex = (item) => {
      const { color, _id } = item
      for (let i in this.cart) {
        const product = this.cart[i]
        const { color: pcolor, _id: pid } = product
        if (color === pcolor && _id === pid) {
          return i
        }
      }
      return -1
    }
    const isExisting = findIndex(newProduct) !== -1

    if (isValidOrder) {
      if (isExisting) {
        this.cart = this.cart.map(handleExisting)
        function handleExisting(product, index) {
          if (index === findIndex(newProduct)) {
            const copy = Object.assign({}, product)
            copy.quantity += newProduct.quantity
            return copy
          }
          return product
        }
      } else {
        this.cart = [...this.cart, newProduct]
      }
    }

    function combineSameProduct(product, productIndex, copy) {
      let newProduct
      if (findIndex(copy) === productIndex) {
        newProduct = appendProduct(product, copy)
      } else {
        newProduct = copy
      }
      return newProduct

      function appendProduct(product, copy) {
        product.quantity = Number.parseInt(product.quantity) + Number.parseInt(copy.quantity)
        return product
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