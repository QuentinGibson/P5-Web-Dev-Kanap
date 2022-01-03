document.addEventListener("DOMContentLoaded", index)


async function index() {
  new Promise(async function (resolve, reject) {
    function handleResponse(response) {
      if (response.status !== 200) {
        console.log("There an error loading this product!")
        reject(console.log(`Status: ${response.status}`))
      } else {
        resolve(response.json())
      }
    }
    const url = new URL(document.URL)
    const searchParams = new URLSearchParams(url.search)
    const currentId = searchParams.get('id')
    console.log(currentId)
    fetch(`http://127.0.0.1:3000/api/products/${currentId}`)
      .then(response => {
        handleResponse(response)
      })
  })
    .then(product => {
      function appendImage() {
        const img_container = document.getElementsByClassName("item__img")[0]
        const img = document.createElement('img')
        img.src = `${product.imageUrl}`
        img.alt = `${product.altTxt}`
        img_container.appendChild(img)
      }
      function appendName() {
        const name_container = document.getElementById('title')
        const name = document.createElement('h1')
        name.innerHTML = `${product.name}`
        name_container.append(name)
      }
      function appendPrice() {
        const price = document.getElementById('price')
        price.innerHTML = `${product.price}`
      }
      function appendDescription() {
        const description = document.getElementById('description')
        description.innerHTML = `${product.description}`
      }
      function appendColors() {
        const selectInput = document.getElementById('colors')
        const options = product.colors.map(color => {
          return document.createRange().createContextualFragment(`<option value="${color}">${color}</option>`)
        })
        options.forEach(option => selectInput.appendChild(option))
      }
      appendImage()
      appendName()
      appendPrice()
      appendDescription()
      appendColors()
    })
    .catch("There was an unknown issue while getting the products. Please check the server and try again!")
}
