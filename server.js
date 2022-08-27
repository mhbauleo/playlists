const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const dbConnection = require('./model/dbClient/dbConnection')
const routerMain = require('./routes/main')

const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      description: "A simple CRUD API application made with Express and documented with Swagger"
    }
  },
  apis: [ './docs/**/*.yaml' ]
}

const swaggerSpecs = swaggerJsdoc(options)
const specs = swaggerJsdoc(options)

const app = express()

dbConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("common"))

app.use('/', routerMain)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

const PORT = config.PORT

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando el ${PORT}`)
})

server.on('error', (error) => console.log(error))