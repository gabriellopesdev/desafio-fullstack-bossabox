const jwt = require('jsonwebtoken')

class Auth {

    GetToken(value) {               
        const token = jwt.sign( { id: value }, String(process.env.SECRET), {
            expiresIn: 86400
        })
        return token
    }    

}

module.exports = Auth