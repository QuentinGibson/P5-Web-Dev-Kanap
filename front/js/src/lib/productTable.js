export default class ProductTable {
  constructor(productTable) {
    if (productTable) {
      this.table = productTable;
      this.save(productTable);
    } else if (!productTable && window.localStorage.getItem("productTable")) {
      this.table = JSON.parse(window.localStorage.getItem("productTable"));
    } else {
      this.table = [];
    }
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
  remove(index) {
    this.table = this.table.filter(
      (_product, productIndex) => index !== productIndex
    );
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
  update(index, product) {
    this.table[index] = product;
    this.save(this.table);
  }
  fetch() {
    this.table = JSON.parse(localStorage.getItem("productTable"));
  }
  save(table) {
    const rawString = JSON.stringify(table);
    localStorage.setItem("productTable", rawString);
  }
}
