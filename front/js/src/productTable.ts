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
  constructor(items: Product[] = []) {
    this.cart = [...items];
  }

  update(id: string, product: Product[]) {}
  find(id: string) {}
  all() {}
  get(id: string) {
    const index = this.cart.map((product) => product._id).indexOf(id);
    return this.cart[index];
  }
  remove(id: string) {
    return this.cart.filter((product) => product._id === id);
  }
  write: (product: Product[]) => {};
}
