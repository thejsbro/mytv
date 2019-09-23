const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      appMountId: 'root',
      title: 'MY-TV',
      favicon: './public/images/tv.ico'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options:{
                    fallback: "file-loader",
                    name: "[name][md5:hash].[ext]",
                    outputPath: 'assets/',
                    publicPath: '/assets/'
                }
            }    
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ],
  }
};
