const process = require('process')
const express = require('express')
const app = express()

// Configuration derived from command-line arguments
const isDevMode = process.argv.some((val) => val === '--dev')

// Initial configuration. It may change in later lines
process.env.NODE_ENV = 'production'

if (isDevMode) {
  const webpackDevServer = require('./webpackDevServer')
  webpackDevServer(app)
}

/**
 * Set this and installed ejs for `BrowserRouter` from `react-router`
 * to work properly
 */
app.set('views', './public')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
// EOC

app.use(express.static('public'))
app.get('*', (_, res) => {
  res.render('index.html')
})

/**
 * This is this way so the app listens on the correct port
 * set by Heroku ( indicated by the `env` variable `PORT` )
 */
let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
}
// EOC

app.listen(port, function () {
  console.log(`'me-haquino' is running on port ${port}!\n`)
  if (isDevMode) {
    const open = require('open')
    open('http://localhost:3000')
  }
})
