export default function handleChange(event, index) {
  const newValue = event.target.value;
  const product = productTable.get(index);
  product.quantity = newValue;
  productTable.update(product);
}
