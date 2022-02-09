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

describe("Product Table: ", () => {
  test("should get one product from the cart", () => {
    const cart = new Cart([products[0], products[1]]);
    expect(cart.get(products[0]._id)).toEqual(products[0]);
  });
});
