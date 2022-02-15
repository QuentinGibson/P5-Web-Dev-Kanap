const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "front/js/src/home.js"),
    cart: path.resolve(__dirname, "front/js/src/cart.js"),
    product: path.resolve(__dirname, "front/js/src/product.js"),
  },
  output: {
    clean: true, // Clean the output directory before emit.
    path: path.resolve(__dirname, "front/js/dist"),
  },
};
