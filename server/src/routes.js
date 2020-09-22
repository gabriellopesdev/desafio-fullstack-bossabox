const router = require('express').Router()
const createTool = require('./useCases/createTool')
const listTool = require('./useCases/listTools')
const deleteTool = require('./useCases/deleteTool')
const createUser = require('./useCases/createUser')
const authenticateUser = require('./useCases/authenticateUser')
const validateToken = require('./useCases/validateToken')

/**
 * @swagger
 * /tool:
 *    post:
 *       security:
 *        - ApiKeyAuth: []
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
 *         "401":
 *           description: "Token de autorização não fornecido ou inválido"  
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.post('/tool', validateToken, createTool)

/**
 * @swagger
 * /tool:
 *    get:
 *       security:
 *        - ApiKeyAuth: []
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
 *         "401":
 *           description: "Token de autorização não fornecido ou inválido"  
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.get('/tool', validateToken, listTool)

/**
 * @swagger
 * /tool/{id}:
 *    delete:
 *       security:
 *        - ApiKeyAuth: []
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
 *         "401":
 *           description: "Token de autorização não fornecido ou inválido"    
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.delete('/tool/:id', validateToken, deleteTool)


/**
 * @swagger
 * /user:
 *    post:
 *       tags:
 *       - User           
 *       description: cadastrar um novo usuário
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Cadastrar novo usuário"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/user"
 *       responses:
 *         "201":
 *           description: "Conseguiu cadastrar no banco de dados"
 *           schema:
 *              $ref: "#/definitions/user"
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.post('/user', createUser)


/**
 * @swagger
 * /auth:
 *    post:
 *       tags:
 *       - User           
 *       description: Autenticar um usuário
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Autenticar usuário"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/authBody"
 *       responses:
 *         "200":
 *           description: "Autenticou usuário com sucesso"
 *           schema:
 *              $ref: "#/definitions/authResponse"
 *         "401":
 *           description: "Usuário ou senha inválido" 
 *         "400":
 *           description: "Algo ocorreu de errado e não foi possível processar a operação no momento."
 */
router.post('/auth', authenticateUser)

module.exports = router