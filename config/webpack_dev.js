const path = require('path')
const PATHS = require('./path')
const webpack = require('webpack')
const commonWebpack = require('./webpack_base')
//使用webpack-merge区分生成环境和开发环境,合并webpack_base.js和webpack_dev.js
const {merge} = require('webpack-merge') 
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const devServer = {
  contentBase:path.resolve(PATHS['dist']), //本地服务器所加载的页面所在的目录
  compress: true,  // GZip压缩(gzip的压缩页面需要浏览器和服务器双方都支持)
  historyApiFallback: true, //不跳转
  host:'127.0.0.1',
  port: 8080,
  inline:true,//实时刷新
  open: true,//配置一运行 webpack-dev-server 的时候就自动打开浏览器
  hot:true // 开启热更新

}
const devConfig = {
  mode: 'development',
  devtool : 'cheap-module-eval-source-map',
  devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更新
    new CleanWebpackPlugin(),//清除上次打包好的文件
  ]
}
module.exports = merge(commonWebpack,devConfig)