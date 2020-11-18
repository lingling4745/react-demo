const path = require('path')
const PATHS = require('./path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { loader } = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HappyPack = require('happypack')
const devMode = process.env.NODE_ENV === 'development'; // 是否是开发模式
console.log(path.join(__dirname, '../DEMO/images'))
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,PATHS['dist']),
    filename:'[name].[hash:6].js'
  },
  module:{
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'eslint-loader',
        enforce:'pre',//使用oneOf，配置 enforce:'pre'会优先执行
        options:{
          fix:true //自动格式化
        }
      },
      {
        oneOf:[
          //转义 js 文件代码的 loader
          {
            test:/\.js$/,
            exclude: /(node_modules|bower_components)/,
            use:[
              {
                loader:'thread-loader',//开启多线程打包，
                options:{
                  workers:2
                }
              },
              { 
                loader:'babel-loader',
                options:{
                  cacheDirectory:true,//babel缓存
                }
              }
            ],

          },
          {
            test: /\.(css|less)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: devMode,
                  reloadAll: devMode,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2, // 之前有2个loaders
                  // modules: true, // 启用cssModules
                  sourceMap: true,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,//为true,在样式追溯时，显示的是编写时的样式，为false，则为编译后的样式
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true,
                }
              }
            ]
          },
          {
            test:/\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
            loader: 'url-loader',
            options:{
              limit:8 * 1024,    // 8 kb以下转 base64
              esModule:false,    // 关闭默认 es模块引入方式
              outputPath: 'images',   // 将文件打包到哪里
              publicPath: './images', 
              name: '[hash:8].[ext]'  // .ext 文件扩展名，jpg\png
            }
          }
        ]
      }
    ]
  },
  resolve: {// 减少后缀
    extensions: ['.js', '.jsx', '.json'],
    alias: { // 减少使用别名提高编译速速
      '@': path.join(__dirname, '../../DEMO'),
      '@mocks': path.join(__dirname, '../src/mocks'),
      '@page': path.join(__dirname, '../src/page'),
      // '@reducers': path.join(__dirname, '../app/redux/reducers'),
      '@redux': path.join(__dirname, '../src/redux'),
      '@components': path.join(__dirname, '../src/components'),
      '@src': path.join(__dirname, '../src'),
      '@config': path.join(__dirname, '../src/config'),
      '@api': path.join(__dirname, '../src/api'),
      // '@reg': path.join(__dirname, '../app/configs/regular.config.js'),
      '@images': path.join(__dirname, '../images'),
      // '@middleware': path.join(__dirname, '../app/middleware'),
      // '@pages': path.join(__dirname, '../app/pages'),
      '@style': path.join(__dirname, '../src/style'),
      // '@tableList': path.join(__dirname, '../app/components/tableList/tableList.js'),
      'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom', // react-hot-loader需要
    },
  },
  plugins: [

    //生成HTML5
    new HtmlWebpackPlugin({
      title:'我的demo',
      template:path.resolve(PATHS['public'],'index.html'),
      filename:path.resolve(PATHS['dist'],'index.html'),
      hash:true,
      minify:{ //使用html-minifier-terser 和以下选项来缩小生成的HTML 
        removeAttributeQuotes:true,//去掉多余引号
        collapseWhitespace:true,//移除空格
        removeComments:true,//移除注释
      },

    }),
    
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/style.css':'css/style.[contenthash:6].css',
      chunkFilename: devMode ? 'css/style.[id].css':'css/style.[contenthash:6].[id].css'
    }),
    //将单个文件或整个目录复制到构建目录
    //process.cwd() 方法会返回 Node.js 进程的当前工作目录
    // new CopyPlugin({
    //   patterns:[
    //     {
    //       from:path.resolve(process.cwd(),'src/assets'),
    //       from:path.resolve(process.cwd(),'dist/statics')
    //     }
    //   ]
    // }),
    new CleanWebpackPlugin(),
  ],
}