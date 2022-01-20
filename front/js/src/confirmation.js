import {getOrderId} from './utils'

const orderId = getOrderId()
appendOrderId(orderId)

function appendOrderId(orderId) {
  const orderIdElement = document.getElementById('orderId')
  orderIdElement.innerHTML = orderId
}

