const merge = require('webpack-merge');
const common = require('../common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'summernote-bs4': './src/summernote/lite.js'    
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
    'popper.js': 'popper.js',    
    bootstrap: 'bootstrap',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),    
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
  ]
});