var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hola Mundo'
        })
    ],
      module: {
      loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
      ]
  }
};
