var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpackdevserver');

module.exports = {
  entry: [
    'http://localhost:8080/webpack-dev-server';
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
