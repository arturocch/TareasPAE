import express from 'express'
import routes from './src/routes'
import mongoose from 'mongoose'
require('dotenv').config()

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggercong = require('./swagger.config')

const app = express()
const mongurl = process.env.MONGO_URL

const port = process.env.PORT || 3000

const swaggerDocs = swaggerJsDoc(swaggercong)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('', routes)

mongoose.connect(mongurl)
    .then(() => {
        console.log('se conecto correctamente a la base de datos')
        app.listen(port, function() {
            console.log('app is running in port ' + port)
        })
    })
    .catch(err => {
        console.log('no se pudo conectar a la base de datos', err)
    })