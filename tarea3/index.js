const express = require('express')
const path = require('path')
const routes = require('./src/routes')
const { engine } = require('express-handlebars')


const app = express()

// uso del engine, vaiables de configuracion de la aplicacion
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

const port = 3000

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use('', routes)


app.listen(port, function() {
    console.log('app is running in port ' + port)
})