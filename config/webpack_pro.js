const path = require('path')
const PATHS = require('./path')
const webpack = require('webpack')
const commonWebpack = require('./webpack_base')
const {merge} = require('webpack-merge') 
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { optimization } = require('./webpack_dev')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const proConfig = {
  mode:'production',

  performance: {
    hints:false
  },
  output:{
    path:path.resolve(__dirname,PATHS['dist']),
    filename:'[name].[contenthash:6].js'
  },
  module:{
    rules: [
    ]
  },
  devtool:'hidden-source-map',
  optimization:{
    splitChunks:{
       minSize: 0, // 默认30000（30kb），但是demo中的文件都很小，minSize设为0，让每个文件都满足大小条件
       cacheGroups: {
           vendor: {  // nodeModules 代码单独打包成一个 chunk 输出
               test: /[\\/]node_modules[\\/]/,
               priority: 10,
               chunks: "initial",
               name: "vendor",
           },
           commons: {	  // 多次import的文件打包成一个单独的common.js
               chunks: 'initial',
               minChunks: 2,
               maxInitialRequests: 5,
               name: 'common'
           }
       }
      }
  },
  // optimization:{
  //   splitChunk:{
  //     minSize:0,// 默认30000（30kb），但是demo中的文件都很小，minSize设为0，让每个文件都满足大小条件
  //     cacheGroup:{
  //       vendor:{
  //         test:/[\\/node_modules[\\/]/,// nodeModules 代码单独打包成一个 chunk 输出
  //         priority:10,
  //         chunks:'inital',
  //         name:'vendor',
  //       },
  //       common:{   // 多次import的文件打包成一个单独的common.js
  //         chunks:'initial',
  //         minChunks:2,
  //         maxInitialRequests:5,
  //         name:'common'
  //       }
  //     }
  //   },
  //   minimizer:[
  //     new UglifyJsPlugin({
  //       sourceMap:true,
  //       parallel:true
  //     }),
  //     new OptimizeCSSAssetsPlugin()
  //   ]
  // },
  // optimization: {
  //   minimizer:[
  //     new UglifyJsPlugin({
  //       sourceMap:true,
  //       parallel:true
  //     }),
  //     new OptimizeCSSAssetsPlugin()
  //   ]
  // },

  plugins:[
    new CleanWebpackPlugin(),
  ]
}
console.log(merge(commonWebpack,proConfig).module.rules)
module.exports = merge(commonWebpack,proConfig)