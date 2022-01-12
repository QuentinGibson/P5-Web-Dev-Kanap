const apiUrl = docuemnt.URL.replace('8080', '3000')
document.addEventListener("DOMContentLoaded", index)

async function index() {
  const getJSON = new Promise(async function (resolve, reject) {
    fetch(`${apiUrl}/api/products`)
      .then(response => {
        if (response.status !== 200) {
          console.log("There an error loading the products!")
          reject(console.log(`Status: ${response.status}`))
        } else {
          resolve(response.json().catch(console.log()))
        }
      })
  })
    .then(json => {
      const itemsElement = document.getElementById('items')
      json.map(product => {
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
      })
    })
    .catch("There was an unknown issue while getting the products. Please check the server and try again!")
}