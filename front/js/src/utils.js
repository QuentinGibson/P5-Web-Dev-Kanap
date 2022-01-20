class Cart {
  constructor(cart) {
    if (cart) {
      this.cart = cart;
    } else {
      this.cart = this.getCart();
    }
  }
  getCart() {
    const data = localStorage.getItem("cart");
    if (data === '' || data === null || data === undefined) {
      return [];
    }
    return JSON.parse(data);
  }
  deleteProduct(_index) {
    this.cart = this.cart.filter((_product, index) => index !== _index);
    this.write(this.cart)
  }
  addProduct(newProduct) {
    if (newProduct.quantity > 0 && newProduct.color !== "") {
      if (indexOf(this.cart, newProduct) !== -1) {
        this.cart[indexOf(this.cart, newProduct)].quantity += newProduct.quantity
      } else {
        this.cart = [...this.cart, newProduct]
      }

      function indexOf(cart, newProduct) {
        for (let i = 0; i < cart.length; i++) {
          const product = cart[i]
          const { _id, color } = product
          if (_id === newProduct._id && color === newProduct.color) {
            return Number.parseInt(i)
          }
        }
        return -1
      }
    }
    this.write(this.cart)
  }

  updateProduct(index, data) {
    this.cart[index] = data;
    this.write(this.cart)
  }

  write(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function getOrderId() {
  const url = new URL(document.location.href);
  return url.searchParams.get('id');
}
export { Cart, getOrderId };