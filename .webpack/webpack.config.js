const path = require('path');

const join = path.join.bind(null, __dirname, '..');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: join('src'),
  entry: ['@babel/polyfill', '../src/index.jsx'],
  output: {
    filename: '[name].[hash].js',
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
      cacheGroups: {
        common: {
          chunks: 'async',
          enforce: true,
          minChunks: 2,
          name: 'common',
          priority: 10,
          reuseExistingChunk: true,
        },
        default: false,
        vendors: false,
      },
    },
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
    new CopyWebpackPlugin([{ from: '../src/assets/images', to: './assets/images' }]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
