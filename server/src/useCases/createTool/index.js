const Tool = require('../../models/tool')

async function createTool(req, res) {
    try {
        const { title, link, description, tags } = req.body    
        const tool = await Tool.create({
            title, 
            link, 
            description, 
            tags
        })    
        return res.status(201).json(tool) 
    } catch (error) {
        res.status(400).send('An error ocurred. Try again ' + error)
    }       
  }

module.exports = createTool