const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'SvelteSummernote',
  },
  resolve: {
    mainFields: ['svelte', 'browser', 'module', 'main'],  
    extensions: ['.mjs', '.js', '.svelte'],
    alias: {
			svelte: path.resolve(__dirname, '../node_modules/svelte'),      
      src: path.resolve(__dirname, '../src/'),
      types: path.resolve(__dirname, '../types/'),
    },
  },
  module: {
    rules: [
      {
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
            loader: 'file-loader',
            options: {
              esModule: false,              
              name: 'fonts/[name].[ext]',
            }
        }],
      },
    ],
  }
};