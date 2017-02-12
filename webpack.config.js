const webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 9000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './client/src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  output: {
    path: 'dist',
    filename: 'js/bundle-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
