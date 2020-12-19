const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TEST',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules:
        [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
  },
};
