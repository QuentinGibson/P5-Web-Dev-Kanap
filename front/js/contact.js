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
  event.preventDefault()
  const cart = getCart()
  const productTable = cart.map(({ _id }) => _id)
  const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  }
  function saveContact(contact) {
    const contactString = JSON.stringify(contact)
    localStorage.setItem("contact", contactString)
  }
  function saveProductTable(productTable) {
    const productTableString = JSON.stringify(productTable)
    localStorage.setItem("productTable", productTableString)
  }
  async function sendPOST(contact, products) {
    await fetch(`${apiUrl}/order`, {
      method: 'post',
      body: {
        contact,
        products
      }
    })
      .then(response => {
        if (response.status === 200) {
          response.json()
            .then(json => {
              confirmation
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
  saveContact(contact)
  saveProductTable(productTable)
  sendPOST(contact, productTable)
}
function customInvalid(input, errorElement, message) {
  input.addEventListener('invalid', (event) => {
    event.preventDefault()
    errorElement.innerHTML = message
  })
}
customInvalid(firstName, firstNameErrorMsgElement, `<p>Please enter a valid first name.</p>`)
customInvalid(lastName, lastNameErrorMsgElement, `<p>Please enter a valid last name.</p>`)
customInvalid(address, addressErrorMsgElement, `<p>Please enter a valid address.</p>`)
customInvalid(city, cityErrorMsgElement, `<p>Please enter a valid city.</p>`)
customInvalid(email, emailErrorMsgElement, `<p>Please enter a valid email.</p>`)

form.addEventListener('submit', handleSubmit)