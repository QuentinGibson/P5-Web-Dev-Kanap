"use strict"

document.addEventListener("DOMContentLoaded", index)

async function index() {
  fetch(apiUrl + '/api/products')
    .then(response => {
      if (response.status !== 200) {
        console.log("There an error loading the products!")
      } else {
        response.json()
          .then(json => { createItem(json) })
          .catch("There was an unknown issue while getting the products. Please check the server and try again!")
      }
    })
  function createItem(product) {
    const itemsElement = document.getElementById('items')
    const link = document.createElement('a')
    const aside = document.createElement("aside")
    const image = document.createElement("img")
    const name = document.createElement('h3')
    const description = document.createElement('p')

    link.id = "product"
    link.href = `./product.html?id=${product._id}`
    link.appendChild(aside)

    image.src = `${product.imageUrl}`
    image.alt = `An image of one of our amazing furniture, this piece is named ${product.name}`

    name.classList = "productName"
    name.innerHTML = `${product.name}`

    description.classList = "productDescription"
    description.innerHTML = `${product.description}`

    aside.appendChild(image)
    aside.appendChild(name)
    aside.appendChild(description)

    itemsElement.appendChild(link)
  }
  json.map(product => createItem(product))
}