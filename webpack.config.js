var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
//    'index.html': './index.html',
    'bundle.js':'./src/index.jsx'
  },

  output: {
    path: __dirname + "/dist",
    filename: '[name]'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'src')
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
//      {
//        test: /\.html$/,
//        loader: "file?name=[name].[ext]",
//      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      }
    ]
  }
}
