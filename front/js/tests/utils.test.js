const Cart = require('../utils.js')

describe("localStorage: cart", () => {
  let store
  beforeEach(() => {
    store = new Cart([{ name: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }])
  })
  test("should read cart", () => {
    expect(store.cart).toBeTruthy()
  })
  test("should remove product fom the cart", () => {
    const expectedResult = [{ name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }]
    const index = 0
    store.deleteProduct(index)
    store.write()
    expect(store.cart).toEqual(expectedResult)
  })
  test("should be able to create product to the cart", () => {
    const expectedResult = [{ name: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }, { name: "onion rings", quantity: 1, color: "brown" }]
    store.addProduct({ name: "onion rings", quantity: 1, color: "brown" })
    store.write()
    expect(store.cart).toEqual(expectedResult)
  })
})