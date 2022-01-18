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
    findIndex = findIndex.bind(this)

    const isValidOrder = newProduct.quantity > 0 && newProduct.color !== ''
    const isExisting = findIndex(newProduct) !== -1
    if (isValidOrder) {
      if (isExisting) {
        this.cart = this.cart.map(handleExisting)
        return product
      }
    } else {
      this.cart = [...this.cart, newProduct]
    }

    function handleExisting(product, index) {
      if (index === findIndex(newProduct)) {
        const copy = Object.assign({}, product)
        copy.quantity += newProduct.quantity
        return copy
      }
    }
    function findIndex(item) {
      const { color, _id } = item
      for (let i in this.cart) {
        const product = this.cart[i]
        const { color: pcolor, _id: pid } = product
        const identical = color === pcolor && _id === pid
        if (identical) {
          return Number.parseInt(i)
        }
      }
      return -1
    }
  }

  updateProduct(index, data) {
    this.cart[index] = data;
  }

  write(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

function getOrderId() {
  const url = new URL(document.location.href)
  return url.searchParams.get('id')
}
export {
  Cart,
  getOrderId
}