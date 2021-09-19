# API STATES
 
Configure as credenciais do seu banco de dados no arquivo /config/daatabase.js.
Substituindo  as credenciais  e qual será o banco de dados usado.

ao acesar a api rode o seguite comando.

`npm i` - Para instalar todas as dependências da aplicação.
 
 após isso , execute: `npx sequelize db:migrate`
 
 Para criar as tabelas no banco de dados escolhido.

As rotas estão nomeadas no arquivo ./routes.js e as respectivas funções estão na pasta
/app/routes  onde lá são executados os controllers para  as queries no banco.

as funções que envolvem o banco de dados estão em controllers/states.js.

 o arquivo .sequelizerc serve para alterar o endereço das pastas padrões usadas pelo package.

todas as configurações estão dentro da pasta /config. Bem como as do seu banco e as do package express usado para montar as rotas.
 
  servidor está configurado na index.js


  # Extra:

  - Este repositório tem um arquivo de requisições que pode ser usado no client http insomnia,
  importando o arquivo requests-api-rotas.json. Lembre-se de configurar  as enviroments para  a porta e a url escolhidas para rodar a api.
