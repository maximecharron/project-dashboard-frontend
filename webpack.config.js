var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },


  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: './src'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
		      cacheDirectory: true,
		      presets:['es2015','react']
        }
      }
    ]
  }
}
