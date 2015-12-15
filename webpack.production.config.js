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
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader'
    },  {
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
    new CopyWebpackPlugin([
    {
      from: './src/index.html',
      to: 'index.html'
    },
    {
      from: './src/fonts/',
      to: 'fonts'
    },
    {
      from: './src/imgs/',
      to: 'imgs/'
    },
    {
      from: './src/css/',
      to: 'css/'
    }
  ]),
  ]
};
