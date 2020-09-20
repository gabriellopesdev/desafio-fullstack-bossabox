const Tool = require('../../models/tool')

async function deleteTool(req, res) {   
    try {
        
        const tool = await Tool.findById(req.params.id)
        if (!tool) {
            return res.status(204).send('Id not found')
        }    
        await tool.remove()  
        return res.send()    
    } catch (error) {
        return res.status(400).send('An error ocurred. Try again ' + error)
    }    
  }

module.exports = deleteTool