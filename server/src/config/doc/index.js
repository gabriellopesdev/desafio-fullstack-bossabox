const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')

const options = {
    swaggerDefinition: {      
      info: {
        title: 'VUTTR (Very Useful Tools to Remember) API',
        version: '1.0.0',
        description: 'Repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags',
        contact: {
          name: 'Gabriel Lopes',
          email: 'gabslopes34@gmail.com',
          url: 'https://github.com/gabriellopesdev'
        },
      },
      securityDefinitions: {      
          ApiKeyAuth: { type: "apiKey", in: "header", name: "x-access-token" }, 
      },       
      host: process.env.APP_URL || 'localhost:3000',       
      tags: [{
          name: 'User',
          description: 'Registro e autenticação de usuários'
        },        
        { 
          name: 'Tool',
          description: 'Operações de manipulação dos registros de ferramentas'
        }],
      schemes:[ 'http', 'https'],  
      definitions: {
        tool: {
          type: 'object',
          properties: {
            title: {
              type: 'string'
            },
            link: {
              type: 'string'    
            }, 
            description: {
              type: 'string'    
            }, 
            tags:{
              type: 'array',
              items: {
                type: 'string'
              }    
            }  
          }          
        },
        user: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            login: {
              type: 'string'    
            }, 
            password: {
              type: 'string'    
            }
          }          
        },
        authBody: {
          type: 'object',
          properties: {
            login: {
              type: 'string'    
            }, 
            pwd: {
              type: 'string'    
            }
          } 
        },
        authResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'string'    
            }, 
            token: {
              type: 'string'    
            }
          } 
        }
      }   
    },    
    apis: [ path.resolve( __dirname, '..', '..', 'routes.js') ],     
  }
  
module.exports = swaggerJsdoc(options)