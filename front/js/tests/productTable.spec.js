import { ProductTable, Product } from "../src/productTable";

const products = [
  {
    color: "Black",
    _id: "107fb5b75607497b96722bda5b504926",
    name: "Kanap Sinopé",
    price: 1849,
    imageUrl: "kanap01.jpeg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    altTxt: "Photo of a blue sofa, two seats",
    quantity: 2,
  },
  {
    color: "Black/Red",
    _id: "415b7cacb65d43b2b5c1ff70f3393ad1",
    name: "Kanap Cyllène",
    price: 4499,
    imageUrl: "kanap02.jpeg",
    description:
      "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    altTxt: "Photo of a yellow and black sofa, four seats",
    quantity: 1,
  },
];

describe("Product Table: ", () => {
  let table;
  beforeEach(() => {
    return (table = new ProductTable([products[0], products[1]]));
  });
  test("should get one product from the cart", () => {
    expect(table.get(products[0]._id)).toEqual(products[0]);
  });
  test("should remove product from cart by id", () => {
    table.remove(products[0]._id);
    const expected = [products[1]];
    expect(table.table).toEqual(expected);
  });
  test("should find product by color and id", () => {
    expect(table.find({ _id: products[0]._id, color: products[0].color })).toBe(
      0
    );
  });
  test("should write new product to the table", () => {
    table.table = [products[0]];
    const expected = [products[0], products[1]];
    table.write(products[1]);
    expect(table.table).toEqual(expected);
  });
  test("should update identical product if written", () => {
    const productTable = new ProductTable([products[0]]);

    const adjustedProduct = { ...products[0] };
    adjustedProduct.quantity = 1;
    table.write(adjustedProduct);
    adjustedProduct.quantity = 3;
    const expected = [adjustedProduct];
    expect(productTable.table).toEqual(expected);
  });
  test("should get a copy of all products from table", () => {
    const data = table.all();
    data[0]._id = "id";
    expect(table.table[0]._id).toEqual(products[0]._id);
  });
  test("should update product from id", () => {
    const adjustedProduct = { ...products[1] };
    adjustedProduct.color = "Purple";
    const expected = [products[0], adjustedProduct];
    const { _id, color } = products[1];
    table.update({ _id, color }, adjustedProduct);

    expect(table.table).toEqual(expected);
  });
});
