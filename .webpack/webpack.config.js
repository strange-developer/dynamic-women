/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const join = path.join.bind(null, __dirname, '..');

module.exports = {
  context: join('src'),
  entry: ['@babel/polyfill', '../src/index.jsx'],
  output: {
    filename: '[name].js',
    path: join('dist'),
    publicPath: '/',
  },
  devServer: {
    clientLogLevel: 'error',
    compress: true,
    contentBase: join('dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    noInfo: true,
    port: 3000,
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: [/node_modules/, /\.test\.jsx?$/],
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle: {
            safari10: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      cspPlugin: {
        enabled: true,
        hashEnabled: { 'script-src': false, 'style-src': false },
        nonceEnabled: { 'script-src': false, 'style-src': false },
      },
      title: 'Dynamic Women',
      template: '../src/index.html',
    }),
    new CopyWebpackPlugin([{ from: '../src/assets', to: './assets' }]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
