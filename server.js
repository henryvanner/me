const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))

/**
 * This is this way so the app listens on the correct port
 * set by Heroku ( indicated by the env variable PORT )
 */
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log(`me-haquino is running on port ${port}!\n`)
})
