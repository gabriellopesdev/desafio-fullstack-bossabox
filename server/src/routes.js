const router = require('express').Router()
const createTool = require('./useCases/createTool')
const listTool = require('./useCases/listTools')
const deleteTool = require('./useCases/deleteTool')

router.get('/', (req, res) => {
    res.send('Hello')
})

router.post('/tool', createTool)

router.get('/tool', listTool)

router.delete('/tool/:id', deleteTool)

module.exports = router