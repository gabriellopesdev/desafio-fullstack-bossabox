require('dotenv').config()

const express = require('express')
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const routes = require('./routes')
const Connection = require('./config/database')
const specs = require('./config/doc')

class AppController {

    constructor() {        
        this.express = express()
        this.middlewares()
        this.routes()
        this.con = new Connection()
    }

  middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));  
    console.log(specs)  
  }

  routes() {
    this.express.use(routes)
  }
}

module.exports = AppController