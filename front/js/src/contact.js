import { customInvalid, saveContact, saveProductTable, sendPOST } from './lib'

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

customInvalid(firstName, firstNameErrorMsgElement, `<p>Please enter a valid first name.</p>`)
customInvalid(lastName, lastNameErrorMsgElement, `<p>Please enter a valid last name.</p>`)
customInvalid(address, addressErrorMsgElement, `<p>Please enter a valid address.</p>`)
customInvalid(city, cityErrorMsgElement, `<p>Please enter a valid city.</p>`)
customInvalid(email, emailErrorMsgElement, `<p>Please enter a valid email.</p>`)
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const store = new Cart()
  const productTable = store.cart.map(({ _id }) => _id)
  const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  }

  saveContact(contact)
  saveProductTable(productTable)
  sendPOST(contact, productTable)
  return false;

}
