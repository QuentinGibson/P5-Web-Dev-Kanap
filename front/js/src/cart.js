"use strict"
import { appendFragToDocument, createProductElement } from "./lib"

const store = new Cart()
const productElementPromises = store.cart.map(createProductElement)

Promise.all(productElementPromises)
  .then(response => {
    for (data of response) {
      const element = data[0]
      const index = data[1]
      appendFragToDocument(element, index)
    }
  })
