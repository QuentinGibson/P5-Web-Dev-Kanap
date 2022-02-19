window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");
  const container = document.getElementById("orderId");
  container.insertAdjacentText("beforeend", orderId);
});
