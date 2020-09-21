const Tool = require('../../models/tool')

async function listTool(req, res) {   
    try {
        const { tags } = req.query
        
        const tool = tags ? 
                     await Tool.find( { 'tags': tags } ) : 
                     await Tool.find()
             
        return res.json(tool)    
    } catch (error) {
        res.status(400).send('An error ocurred. Try again ' + error)
    }    
  }

module.exports = listTool