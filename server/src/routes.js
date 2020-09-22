const router = require('express').Router()
const createTool = require('./useCases/createTool')
const listTool = require('./useCases/listTools')
const deleteTool = require('./useCases/deleteTool')

/**
 * @swagger
 * /tool:
 *    post:
 *       tags:
 *       - Tool           
 *       description: cadastrar uma nova ferramenta
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Cadastrar novas ferramentas"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/tool"
 *       responses:
 *         "201":
 *           description: "Conseguiu cadastrar no banco de dados"
 *           schema:
 *              $ref: "#/definitions/tool"
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
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
 *           description: "Conseguiu fazer a busca no banco de dados"
 *           schema:
 *              type: "array"
 *              items:
 *                 $ref: "#/definitions/tool"
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.get('/tool', listTool)

/**
 * @swagger
 * /tool/{id}:
 *    delete:
 *       tags:
 *       - Tool           
 *       description: Excluir ferramenta cadastrada
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "id"
 *         in: "path"
 *         description: "Id do registro a ser deletado do banco de dados"
 *         required: true
 *         type: "string"
 *       responses:
 *         "204":
 *           description: "Conseguiu fazer a exclusão no banco de dados"           
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.delete('/tool/:id', deleteTool)

module.exports = router