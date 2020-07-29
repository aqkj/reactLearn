/**
 * webpack配置
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = (env, args) => {
  const isDevelopment = env === 'dev'
  console.log(env, args)
  const config = {
    entry: {
      app: './src/index.tsx'
    },
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
      path: path.join(__dirname, './dist')
    },
    module: {
      rules: [{
        test: /\.tsx?/,
        use: [{
          loader: 'ts-loader'
        }]
      }]
    },
    resolve: {
      alias: {
        'react-dom': path.join(__dirname, '../build/node_modules/react-dom'),
        react: path.join(__dirname, '../build/node_modules/react')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, './public/index.html')
      })
    ]
  }
  if (isDevelopment) {
    config.devServer = {
      host: '0.0.0.0',
      port: 8088,
      progress: true,
      hot: true
    }
  }
  return config
}