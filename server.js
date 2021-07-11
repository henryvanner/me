const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }))

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n')
})
