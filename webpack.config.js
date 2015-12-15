var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/main.jsx')
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
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};
