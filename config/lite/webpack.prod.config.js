const merge = require('webpack-merge');
const common = require('../common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  entry: {
    'index': './src/summernote/lite.js'
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/summernote/lang', to: 'lang' },
    ])
  ]
});