
export function attachEventToButton(Id) {
  const cartElement = document.getElementById(Id);
  if (cartElement) {
    cartElement.addEventListener('click', function () {
      const product = {
        "color": document.getElementById("colors").value,
        "quantity": Number.parseInt(document.getElementById("quantity").value),
        "_id": currentId
      }
      store.addProduct(product)
    })
  }
}
export function generateProduct(product) {
  appendImage()
  appendName()
  appendPrice()
  appendDescription()
  appendColors()

  function appendImage() {
    const img_container = document.getElementsByClassName("item__img")[0]
    const img = document.createElement('img')
    img.src = `${product.imageUrl}`
    img.alt = `${product.altTxt}`
    if (img_container !== undefined) {
      img_container.appendChild(img)
    }
  }
  function appendName() {
    const name_container = document.getElementById('title')
    const name = document.createElement('h1')
    name.innerHTML = `${product.name}`
    if (name_container !== undefined) {
      name_container.append(name)
    }
  }
  function appendPrice() {
    const price = document.getElementById('price')
    if (price !== undefined) {
      price.innerHTML = `${product.price}`
    }
  }
  function appendDescription() {
    const description = document.getElementById('description')
    if (description !== undefined) {
      description.innerHTML = `${product.description}`
    }
  }
  function appendColors() {
    const selectInput = document.getElementById('colors')
    const options = product.colors.map(color => {
      return document.createRange().createContextualFragment(`<option value="${color}">${color}</option>`)
    })
    if (selectInput !== undefined) {
      options.forEach(option => selectInput.appendChild(option))
    }
  }
}

export function saveContact(contact) {
  const contactString = JSON.stringify(contact)
  localStorage.setItem("contact", contactString)
}
export function saveProductTable(productTable) {
  const productTableString = JSON.stringify(productTable)
  localStorage.setItem("productTable", productTableString)
}
export async function sendPOST(contact, products) {
  await fetch(`${apiUrl}/api/products/order`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contact: contact,
      products: products
    })
  })
    .then(response => {
      if (response.status === 201) {
        response.json()
          .then(json => {
            window.location.replace(`confirmation.html?id=${json.orderId}`);
          })
      } else {
        console.log(response.status)
      }
    })
    .catch(err => {
      console.log('There was an issue with the POST request')
      console.log(`Error: ${err}`)
    })
}
export function customInvalid(input, errorElement, message) {
  input.addEventListener('invalid', (event) => {
    event.preventDefault()
    errorElement.innerHTML = message
  })
}

function generateProductElement(product, order) {
  function total(price, quantity) {
    return price * quantity
  }
  return `<article class="cart__item" data-id="${product._id}" data-color="${order.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${order.color}</p>
        <p>€${total(product.price, order.quantity)}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${order.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Delete</p>
        </div>
      </div>
    </div>
  </article>`
}
export async function createProductElement() {
  const { _id } = order
  const url = new URL(document.URL)
  const apiUrl = 'https://' + url.host_id.replace('5500', '3000')

  return await fetch(`${apiUrl}/api/products/${_id}`)
    .then(response => {
      if (response.status === 200) {
        return response.json()
          .then(product => {
            const productElement = generateProductElement(product, order)
            return [productElement, index]
          })
      } else {
        console.log(response.status)
        console.error("There was a problem with the server")
      }
    })
}

export function appendFragToDocument(element, index) {
  function handleDeleteButtonClick(event) {
    const articleElement = event.target.closest('article.cart__item')
    articleElement.remove()
    deleteOrder(index)
  }
  function handleQuantityChange(event) {
    const newValue = event.target.value
    store.cart[index].quantity = newValue
    updateOrder(index, cart[index])
  }
  const frag = document.createRange().createContextualFragment(element)
  frag.querySelector('.itemQuantity').addEventListener('change', handleQuantityChange)
  frag.querySelector('.deleteItem').addEventListener('click', handleDeleteButtonClick)
  cartItemsElement.appendChild(frag)
}
