var path = require('path');
var config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './CaptainArray.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'captain-array.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
module.exports = config;