const router = require('express').Router()
const createTool = require('./useCases/createTool')
const listTool = require('./useCases/listTools')
const deleteTool = require('./useCases/deleteTool')


router.post('/tool', createTool)

/**
 * @swagger
 * /tool:
 *    get:
 *       tags:
 *       - Tool           
 *       description: Listar ferramentas cadastradas
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "tags"
 *         in: "query"
 *         description: "Pode pesquisar por tags relacionadas às ferramentas"
 *         required: false
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
 *           schema:
 *              type: "array"
 *              items:
 *                 $ref: "#/definitions/tool"
 *         "400":
 *           description: "Invalid status value"
 */
router.get('/tool', listTool)

router.delete('/tool/:id', deleteTool)

module.exports = router