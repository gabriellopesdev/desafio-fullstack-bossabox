const User = require('../../models/user')
const Auth = require('../../middlewares/auth')

async function authenticateUser(req, res) {   
    try {
        const { login, pwd } = req.body
        
        const user = await User.find( { 'login': login } ) 

        if (!user[0]) {
            return res.status(401).send('User or password invalid')
        }
        if (user[0].password !== pwd) {
            return res.status(401).send('User or password invalid')
        } 

        const auth = new Auth()
        const token = auth.GetToken(user[0].id)

        return res.json({ id: user[0].id, token: token })    

    } catch (error) {
        return res.status(400).send('An error ocurred. Try again ' + error)
    }    
  }

module.exports = authenticateUser