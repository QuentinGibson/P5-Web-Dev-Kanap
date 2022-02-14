import ProductTable from "../productTable";
export default function handleChange(event, index) {
  const productTable = new ProductTable();
  const newValue = event.target.value;
  const product = productTable.table[index];
  product.quantity = newValue;
  productTable.update(index, product);
}
