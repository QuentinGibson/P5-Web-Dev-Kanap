const orderId = getOrderId()
appendOrderId(orderId)

function getOrderId() {
  const orderIdElement = document.getElementById('orderId')
  const url = new URL(document.location.href)
  return url.searchParams.get('id')
}
function appendOrderId(orderId) {
  orderIdElement.innerHTML = orderId
}

