import { Cart, Product } from "../src/productTable";
const products: Product[] = [
  {
    colors: ["Blue", "White", "Black"],
    _id: "107fb5b75607497b96722bda5b504926",
    name: "Kanap Sinopé",
    price: 1849,
    imageUrl: "kanap01.jpeg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    altTxt: "Photo of a blue sofa, two seats",
  },
  {
    colors: ["Black/Yellow", "Black/Red"],
    _id: "415b7cacb65d43b2b5c1ff70f3393ad1",
    name: "Kanap Cyllène",
    price: 4499,
    imageUrl: "kanap02.jpeg",
    description:
      "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    altTxt: "Photo of a yellow and black sofa, four seats",
  },
];
test("should be construced", () => {
  expect(new Cart()).toBeInstanceOf(Cart);
});
test("Object structure", () => {
  expect(new Cart()).toEqual(
    expect.objectContaining({
      cart: expect.any(Array),
      find: expect.any(Function),
      update: expect.any(Function),
      remove: expect.any(Function),
      all: expect.any(Function),
      get: expect.any(Function),
    })
  );
});
describe("Product Table:", () => {
  let store;
  beforeEach(() => {
    store = new Cart([products[0], products[1]]);
  });
  test("should remove product", () => {
    const expectedResult = [
      { _id: "burger", quantity: 1, color: "brown" },
      { _id: "shake", quantity: 2, color: "pink" },
    ];
    const index = 0;
    store.deleteProduct(index);
    expect(store.cart).toEqual(expectedResult);
  });
  test("should update products", () => {
    const expectedResult = [
      { _id: "fries", quantity: 1, color: "yellow" },
      { _id: "burger", quantity: 1, color: "purple" },
      { _id: "shake", quantity: 2, color: "pink" },
    ];
    const index = 1;
    const data = { _id: "burger", quantity: 1, color: "purple" };
    store.updateProduct(index, data);
    expect(store.cart).toEqual(expectedResult);
  });
  describe("should be able to correctly append to the cart", () => {
    test("by adding new products to the end of the list ", () => {
      const expectedResult = [
        { _id: "fries", quantity: 1, color: "yellow" },
        { _id: "burger", quantity: 1, color: "brown" },
        { _id: "shake", quantity: 2, color: "pink" },
        { _id: "onion rings", quantity: 1, color: "brown" },
      ];
      store.addProduct({ _id: "onion rings", quantity: 1, color: "brown" });
      expect(store.cart).toEqual(expectedResult);
    });
    test("by ignoring products with no quanitity or color", () => {
      const expectedResult = [
        { _id: "fries", quantity: 1, color: "yellow" },
        { _id: "burger", quantity: 1, color: "brown" },
        { _id: "shake", quantity: 2, color: "pink" },
      ];
      store.addProduct({ _id: "onion rings", quantity: 1, color: "" });
      store.addProduct({ _id: "fries", quantity: 0, color: "yellow" });
      expect(store.cart).toEqual(expectedResult);
    });
    test("by adding products to the end of list the same id but differnt color", () => {
      const expectedResult = [
        { _id: "fries", quantity: 1, color: "yellow" },
        { _id: "burger", quantity: 1, color: "brown" },
        { _id: "shake", quantity: 2, color: "pink" },
        { _id: "burger", quantity: 1, color: "yellow/brown" },
      ];
      store.addProduct({ _id: "burger", quantity: 1, color: "yellow/brown" });
      expect(store.cart).toEqual(expectedResult);
    });
    test("by increasing products with the same id and color", () => {
      const expectedResult = [
        { _id: "fries", quantity: 3, color: "yellow" },
        { _id: "burger", quantity: 1, color: "brown" },
        { _id: "shake", quantity: 2, color: "pink" },
      ];
      store.addProduct({ _id: "fries", quantity: 2, color: "yellow" });
      expect(store.cart).toEqual(expectedResult);
    });
  });
});
