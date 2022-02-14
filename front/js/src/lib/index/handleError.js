export default function handleError(error) {
  const container = document.getElementById("items");
  container.insertAdjacentHTML(
    "beforeend",
    `<h3 id="errormsg">Sorry there was a problem fetching the couches</h3>`
  );
}
