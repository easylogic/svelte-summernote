const path = require('path');
const webpack = require('webpack');
module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {

    config.resolve.alias['src'] = path.resolve(__dirname, '../src')
    config.resolve.alias['types'] = path.resolve(__dirname, '../types')

    return config;
  },
};
