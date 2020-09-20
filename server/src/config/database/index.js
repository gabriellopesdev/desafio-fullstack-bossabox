const mongoose = require('mongoose')

class Connection {
    constructor() {
        const url =
        process.env.DATABASE_CON
        console.log('Conecatanto a base de dados:', url)
        mongoose.Promise = global.Promise
        mongoose.set('useNewUrlParser', true)
        mongoose.set('useUnifiedTopology', true)
        mongoose.connect(url)
    }
}

module.exports = Connection