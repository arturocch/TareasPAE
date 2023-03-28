const express = require('express')
const routes = require('./src/routes')
const path = require('path')
const { engine } = require('express-handlebars')
require('dotenv').config()

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

const port = process.env.PORT || 3000

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('', routes)

app.listen(port, function() {
    console.log('app is running in port ' + port)
})