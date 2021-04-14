const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "kot_be",
      externals: {
        react: "React"
      }
    }
  },
  webpack: {
    rules: {
      svg: {
        loader: "svg-inline-loader",
        options: { classPrefix: true }
      },
      "sass-css": {
        modules: true,
        localIdentName: "[name]__[local]__[hash:base64:5]"
      }
    },
  }
};
