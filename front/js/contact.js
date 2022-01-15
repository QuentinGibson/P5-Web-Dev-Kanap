const form = document.querySelector('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')

const firstNameErrorMsgElement = document.getElementById('firstNameErrorMsg')
const lastNameErrorMsgElement = document.getElementById('lastNameErrorMsg')
const addressErrorMsgElement = document.getElementById('addressErrorMsg')
const cityErrorMsgElement = document.getElementById('cityErrorMsg')
const emailErrorMsgElement = document.getElementById('emailErrorMsg')

const formValidity = document.querySelector('form').checkValidity();

function handleSubmit(event) {
  const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  }
  const productTablePromise = () => {
    const cart = getCart()
    return cart.map(async product => {
      let total
      return await fetch(`${apiUrl}/api/products/${product._id}`)
        .then(response => response.json())
        .then(json => {
          total = json.price * product.quantity
          product.total = total
          return product
        })
    })
  }
  Promise.all(productTablePromise)
    .then(productTableData => {
      const productTable = JSON.stringify(productTableData)
      localStorage.setItem("productTable", productTable)
    })

  const contactString = JSON.stringiify(contact)
  localStorage.setItem("contact", contactString)
}

firstName.addEventListener('invalid', (event) => {
  event.preventDefault();
  firstNameErrorMsgElement.innerHTML = `<p>Please enter a valid first name.</p>`
})
lastName.addEventListener('invalid', (event) => {
  event.preventDefault()
  lastNameErrorMsgElement.innerHTML = `<p>Please enter a valid last name.</p>`
})
address.addEventListener('invalid', (event) => {
  event.preventDefault()
  addressErrorMsgElement.innerHTML = `<p>Please enter a valid address.</p>`
})
city.addEventListener('invalid', (event) => {
  event.preventDefault()
  cityErrorMsgElement.innerHTML = `<p>Please enter a valid city.</p>`
})
email.addEventListener('invalid', (event) => {
  event.preventDefault()
  emailErrorMsgElement.innerHTML = `<p>Please enter a valid email.</p>`
})

form.addEventListener('submit', handleSubmit)