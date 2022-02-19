const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "front/js/src/home.js"),
    cart: path.resolve(__dirname, "front/js/src/cart.js"),
    product: path.resolve(__dirname, "front/js/src/product.js"),
  },
  output: {
    clean: true, // Clean the output directory before emit.
    path: path.resolve(__dirname, "front/js/dist"),
  },
  devtool: "source-map",
};
