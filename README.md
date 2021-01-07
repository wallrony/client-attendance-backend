# Client Attendances - NodeJS Backend

Autor: Wallisson Rony de M. N.

Este é um backend para a aplicação Client Attendances.

Para visualizar as requisições disponíveis na aplicação, utilize do JSON "Insomnia Workspace.json" do repositório, adicionando-o como arquivo de configuração no programa Insomnia ou Postman. Para informações de uso, visualize as últimas etapas do README.

## Pacotes Presentes neste Repositório.

 - ts-node
 - ts-node-dev
 - express
 - cors
 - crypto
 - dotenv-safe
 - knex *
 - pg *
 - jsonwebtoken
 - typescript

*: pacotes que têm um * na frente indicam versionamento específico por causarem problemas em versões mais recentes ou informações mais detalhadas a serem explicadas a seguir.

pg *: após pesquisas, descobri que existe um erro com o pacote pg (postgresql) na versão mais atual até então (10/10/2020) na utilização do SSL. Como utilizo ferramentas de teste como o heroku, que necessita de SSL para conexão com banco de dados, resolvi instalar uma versão mais estável do pg para funcionamento do backend. Por isso, ao utilizar operações com o pg no seu projeto, você poderá ver mensagens que depreciação na utilização do SSL, porém, isso não impacta no desenvolvimento e na experiência de utilização do seu backend ou banco de dados.

knex *: por padrão, nesse projeto, foi inserida a configuração de client do knex para utilizar PostgreSQL. Então, basta inserir as credenciais apresentadas no arquivo 'knexfile.ts' em um arquivo .env.

## Scripts Prontos:

 - 'start': o script start deverá ser utilizado quando o projeto estiver em produção, assim, será utilizado o pacote ts-node para execução dos arquivos Typescript.

 - 'dev': deverá ser utilizado quando o projeto estiver em desenvolvimento. Isso fará com que o pacote ts-node-dev seja executado ao invés do ts-node, deixando a experiência de testes mais tranquila através da constante insistência em deixar o servidor online, "respawnando" a instância da aplicação serve que ouver alguma alteração e também ignorando arquivos desnecessários de verificação, como a pasta node_modules.

 - 'knex:migrate': deverá ser utilizado quando há uma nova atualização a ser realizada no banco de dados.

 - 'knex:migrate:rollback': deverá ser utilizado quando for necessário desfazer uma atualização realizada no banco de dados.

 - 'knex:seed': deverá ser executado quando for necessário inserir 'seeds' (dados básicos) ao banco de dados, como, por exemplo, uma lista de produtos que já estarão cadastrados para primeiro funcionamento.

## Database (Banco de Dados)

O banco de dados utilizado foi o PostgreSQL para manter uma comunicação entre entidades de forma relacional, o que torna a interpretação de dados semanticamente mais simples e clara.

Seu diagrama de entidades relacionadas segue da mesma forma que o print abaixo:

![](ilustration_images/diagram.png)

## Teste em Execução

Para testar o backend em execução com o script `yarn start`, recomendo que utilize os comandos `yarn knex:migrate` e `yarn knex:seed`, para realizar a adição de tabelas no banco de dados e a inserção de seeds (valores iniciais) para um uso teste do servidor. O comando `yarn` pode ser substituído pelo comando `npm run` caso utilize o gerenciador de pacotes `npm`.

Para utilizar de todas as funcionalidades dispostas, é necessário realizar login. Para isso, após utilizar o comando `yarn knex:seed` ou `npm run knex:seed` para inserção dos usuários padrão, você pode utilizar as seguintes credenciais para realizar autenticação:

Para se autenticar com um usuário administrador, utilize as credenciais à seguir na rota de login:

```json
{
  "email": "admin@admin.com",
  "password": "123456"
}
```

Para se autenticar com um usuário normal, utilize as credenciais à seguir na rota de login:

```json
{
  "email": "user@user.com",
  "password": "123456"
}
```

Para se autenticar com um usuário administrador, utilize as credenciais à seguir na rota de login:

```json
{
  "email": "doc@doc.com",
  "password": "123456"
}
```

Após isso, será possível utilizar de todas as rotas disponíveis na aplicação passando o token de autorização pelo Header Authorization de cada requisição, colocando da seguinte forma:

Obs.: O token à seguir é um token de autorização exemplo, que não funciona.

```text
Authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6MywiaWF0IjoxNjA5OTM0ODY4LCJleHAiOjE2MDk5MzU0Njh9YY6ISV3egasqNtXZj0NLL5baXFQluLwc8fsxjsyiX1M
```

O token expira de 10 em 10 minutos, logo, é necessário realizar login a cada 10 minutos. Esse tempo foi definido para que em execução a aplicação fosse testada mais rápido.

</hr>

Em breve terá mais explicações sobre rotas de cada entidade em tabelas descritas aqui.
