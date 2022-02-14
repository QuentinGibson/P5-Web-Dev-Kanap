export default function displayError(element_id, message) {
  const element = document.getElementById(element_id);
  element.innerHTML = message;
}
