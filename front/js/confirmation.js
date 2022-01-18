const orderId = getOrderId()
appendOrderId(orderId)

function getOrderId() {
  const url = new URL(document.location.href)
  return url.searchParams.get('id')
}
function appendOrderId(orderId) {
  const orderIdElement = document.getElementById('orderId')
  orderIdElement.innerHTML = orderId
}

