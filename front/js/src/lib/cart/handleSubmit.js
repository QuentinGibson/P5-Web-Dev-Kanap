import postProductTable from "./postProductTable";

export default function handleSubmit() {
  const number = postProductTable();
  localStorage.setItem("number", number);
}
