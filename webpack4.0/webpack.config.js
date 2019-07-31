const path = require('path');
// 压缩css
const OptimizeCssAseetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWepackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'/'
  },
  plugin:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'src/index.html')
    })
  ],
  devServer:{
    contentBase:'./dist',
    port :'8080',
    host: 'localhost'
  },
  module:{
    rules:[
      {
        test:/\.css/, //匹配处理文件的扩展名的正则表达式
        use:['style-loader','css-loader'], // loader名称
        exclude:/node_modules/,
        inClude:path.resolve(__dirname,'src') //手动指定必须处理的文件夹或屏蔽不需要处理的文件夹
      },
      {
        use:[
          {
            loader:'style-loader',
            options:{
              insertAt:'top'
            }
          },
          'css-loader'
        ]
      },
      {
        test:/\.(git|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              outputPath:'images'
            }
          }
        ]
      },
      {
        test:/\.css/,
        use:[{
          loader:MiniCssExtractPlugin.loader
        },'css-loader'],
        exclude:/node_modules/,
        inClude:path.resolve(__dirname,'src')
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ],
  optimization:{
    minimizer:[
      new OptimizeCssAseetWebpackPlugin(),
      new CleanWepackPlugin()
    ]
  }
}