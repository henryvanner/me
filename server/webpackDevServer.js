const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config')

const compiler = webpack(webpackConfig)

module.exports = function webpackDevServer (app) {
  app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))
}
