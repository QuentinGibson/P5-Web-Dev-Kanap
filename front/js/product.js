"use strict"


import { attachEventToButton, generateProduct } from "./lib"
document.addEventListener("DOMContentLoaded", handleOnLoad)

function handleOnLoad() {
  const url = new URL(document.URL)
  const apiUrl = 'https://' + url.host_id.replace('5500', '3000')
  const searchParams = new URLSearchParams(url.search)
  const currentId = searchParams.get('id')

  attachEventToButton('addToCart')
  fetch(`${apiUrl}/api/products/${currentId}`)
    .then(response => response.json())
    .then(product => generateProduct(product))
    .catch("There was an unknown issue while getting the products. Please check the server and try again!")

}
