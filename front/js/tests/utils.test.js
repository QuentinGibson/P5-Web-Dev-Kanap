const Cart = require('../utils.js')

describe("localStorage: cart", () => {
  let store
  beforeEach(() => {
    store = new Cart([{ _id: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }])
  })
  test("should read cart", () => {
    expect(store.cart).toBeTruthy()
  })
  test("should remove product", () => {
    const expectedResult = [{ _id: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }]
    const index = 0
    store.deleteProduct(index)
    store.write()
    expect(store.cart).toEqual(expectedResult)
  })
  test("should update products", () => {
    const expectedResult = [{ _id: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "purple" }, { name: "shake", quantity: 2, color: "pink" }]
    const index = 1
    const data = { _id: "burger", quantity: 1, color: "purple" }
    store.updateProduct(index, data)
    store.write()
    expect(store.cart).toEqual(expectedResult)
  })
  describe("should be able to correctly append to the cart", () => {

    test("by adding new products to the end of the list ", () => {
      const expectedResult = [{ _id: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }, { name: "onion rings", quantity: 1, color: "brown" }]
      store.addProduct({ _id: "onion rings", quantity: 1, color: "brown" })
      store.write()
      expect(store.cart).toEqual(expectedResult)
    })
    test("by adding products to the end of list the same id but differnt color", () => {
      const expectedResult = [{ _id: "fries", quantity: 1, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }, { name: "burger", quantity: 1, color: "yellow/brown" }]
      store.addProduct({ _id: "burger", quantity: 1, color: "yellow/brown" })
      store.write()
      expect(store.cart).toEqual(expectedResult)
    })
    test("by increasing products with the same id and color", () => {
      const expectedResult = [{ _id: "fries", quantity: 3, color: 'yellow' }, { name: "burger", quantity: 1, color: "brown" }, { name: "shake", quantity: 2, color: "pink" }]
      store.addProduct({ _id: "fries", quantity: 2, color: "yellow" })
      store.write()
      expect(store.cart).toEqual(expectedResult)
    })
  })
})