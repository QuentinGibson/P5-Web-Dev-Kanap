export interface Product {
  _id: string;
  name: string;
  colors: string[];
  altTxt: string;
  imageUrl: string;
  price: number;
  description: string;
}

export class Cart {
  cart: Product[];
  constructor(items?: Product[]) {
    this.cart = [...items];
  }

  update: () => {};
  find: () => {};
  all: () => {};
  get: () => {};
  remove: () => {};
}
