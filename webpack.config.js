var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [

    path.resolve(__dirname, 'src/scripts/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],
    preLoaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['eslint-loader']}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
       }
    }),
    new CopyWebpackPlugin([
        // Directory  examples
        { from: 'src/html', to: '.' },
        { from: 'src/images', to: './images' },
    ]),
    new Clean(['build'])
  ],
  eslint: {
    configFile: './.eslintrc'
  }
};
