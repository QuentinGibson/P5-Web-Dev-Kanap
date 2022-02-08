const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "front/js/src/index.js"),
  output: {
    path: path.resolve(__dirname, "front/js/dist"),
    filename: "[name].js",
  },
};
