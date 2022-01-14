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
function checkout() {
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
    .then(productTable => {
      localStorage.setItem("productTable", productTable)
    })
  localStorage.setItem("contact", contact)
}
function checkValidity(inputElement) {
  return inputElement.validity.valid
}

if (formValidity) {
  checkout()
} else {
  if (!checkValidity(firstName)) {
    firstNameErrorMsgElement.innerHTML = `<p>Please enter a valid first name.</p>`
  }
  if (!checkValidity(lastName)) {
    lastNameErrorMsgElement.innerHTML = `<p>Please enter a valid last name.</p>`
  }
  if (!checkValidity(adress)) {
    addressErrorMsgElement.innerHTML = `<p>Please enter a valid address.</p>`
  }
  if (!checkValidity(city)) {
    cityErrorMsgElement.innerHTML = `<p>Please enter a valid city.</p>`
  }
  if (!checkValidity(email)) {
    emailErrorMsgElement.innerHTML = `<p>Please enter a valid email.</p>`
  }
}