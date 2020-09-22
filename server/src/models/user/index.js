const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    login: {
        type: String,
        unique: true
    } ,
    password: String,   
    createdAt: {
        type: Date,
        default: Date.now
    }       
  })

module.exports = mongoose.model("user", UserSchema);