# Desafio Fullstack Bossabox

**Server** 

API escrita com a NodeJS + Express + MongoDB para atender a aplicação VUTTR (Very Useful Tools to Remember).

A API pode ser consumida através do endereço https://bossabox-vuttr-api.herokuapp.com/, assim como sua documentação pode ser conferida [aqui](https://bossabox-vuttr-api.herokuapp.com/api-docs/) 

Para subir a aplicação localmente é necessária a configuração das seguintes variáveis ambiente:

- DATABASE_CON - a qual deve ser atribuida a string de conexão de uma base de dados MongoDB
- SECRET - Um valor criptográrico para geração do token JWT
- PORT - parâmetro opcional, caso não for definida a aplicação irá "subir" na porta 3000

A aplicação contempla cadastro de usuário e autenticação do mesmo. Só possivel acessar as demais rotas para gerenciamento das ferramentas (listagem, cadastro e exclusão) em posse do token de autorização fornecido após autenticação do usuário.

O primeiro passo será cadastrar um novo usuário para se autenticar e então, com posse do token de autorização, poder consumir os demais recursos da API.
