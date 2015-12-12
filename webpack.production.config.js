var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'src/main.jsx'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './index.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", ,"autoprefixer-loader","sass?sourceMap"]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{
      from: './src/index.html',
      to: 'index.html'
    }
    // , {
    //   from: './src/main.css',
    //   to: 'main.css'
    // }
  ]),
  ]
};
