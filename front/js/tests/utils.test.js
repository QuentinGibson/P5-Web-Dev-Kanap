const Cart = require('../utils.js')
console.log(Cart)

describe("localStorage: cart", () => {
  beforeEach(() => {
    const cart = [{ name: "fries" }, { name: "burger" }, { name: "shake" }]
    const store = new Cart(cart);
  })
  test("should read cart", () => {
    expect(store.cart.toBe(cart))
  })
  test("should remove product fom the cart", () => {
    const expectedResult = [{ name: "burger" }, { name: "shake" }]
    const index = 0
    expect(cart.deleteProduct(index).toBe(expectedResult))
  })
  test("should be able to create product to the cart", () => {
    const expectedResult = [{ name: "fries" }, { name: "burger" }, { name: "shake" }, { name: 'onion rings' }]
    expect(cart.addProduct({ name: "onion rings" }).toEqual(expectedResult))
  })
})