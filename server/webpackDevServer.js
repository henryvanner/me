const process = require('process')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

process.env.NODE_ENV = 'development'

const webpackConfig = require('../webpack.config')()
const compiler = webpack(webpackConfig)

module.exports = function webpackDevServer (app) {
  app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}
