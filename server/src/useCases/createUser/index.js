const User = require('../../models/user')

async function createUser(req, res) {
    try {
        const { name, login, password } = req.body    
        const user = await User.create({
            name, 
            login, 
            password
        })    
        return res.status(201).json(user) 
    } catch (error) {
        res.status(400).send('An error ocurred. Try again ' + error)
    }       
  }

module.exports = createUser