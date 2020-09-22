const jwt = require('jsonwebtoken')

function ValidateToken(req, res, next){

    const token = req.headers['x-access-token'];
    
    if (!token) { 
        return res.status(401).json({ auth: false, message: 'No token provided.' })
    }

    const decodedToken  = jwt.verify(String(token), String(process.env.SECRET), 
        function(error, decoded) {
            return (decoded)
        })   

    if (!decodedToken) { 
        return res.status(400).json({ auth: false, message: 'Failed to authenticate token.' })
    }
    
    req.body.Id =  decodedToken.id
    next() 
}

module.exports = ValidateToken