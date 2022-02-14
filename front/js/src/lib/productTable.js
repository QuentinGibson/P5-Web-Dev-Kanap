class ProductTable {
  table;
  constructor(productTable) {
    this.productTable = productTable;
    window.localStorage.getItem("productTable");
  }

  find({ _id: inputId, color: inputColor }) {
    const query = { _id: inputId, color: inputColor };
    return this.table.findIndex((product) => {
      const { _id, color } = product;
      const item = { _id, color };
      return item._id === query._id && item.color === query.color;
    });
  }
  get(id) {
    const index = this.table.map((product) => product._id).indexOf(id);
    return this.table[index];
  }
  remove(id) {
    this.table = this.table.filter((product) => product._id !== id);
  }
  all() {
    return this.table;
  }
  write(product) {
    const { _id, color } = product;
    const index = this.find({ _id, color });
    if (index !== -1) {
      this.table[index].quantity += product.quantity;
    } else {
      this.table.push(product);
    }
  }
  update({ _id, color }, product) {
    const index = this.find({ _id, color });
    this.table[index] = product;
  }
}

export const productTable = new ProductTable();
