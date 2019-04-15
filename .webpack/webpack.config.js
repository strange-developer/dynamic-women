const path = require('path');

const join = path.join.bind(null, __dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
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
  plugins: [
    new HtmlWebpackPlugin({
      cspPlugin: {
        enabled: true,
        hashEnabled: { 'script-src': false, 'style-src': false },
        nonceEnabled: { 'script-src': false, 'style-src': false },
      },
      title: 'Dynamic Women',
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
