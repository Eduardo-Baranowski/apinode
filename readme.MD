# [Intrução Para Utilização da API]

> Features:

- Criação de usuários
- Criação de endereços por um usuário
- Listagem de endereços
- Uso de JWT para login de usuário e rotas autenticadas.

## How to use it

```bash
$ # Get the code
$ git clone https://github.com/Eduardo-Baranowski/apinode.git
$ cd apinode
$
$ # Create BD
$ rename ormconfig.json and modify password and database bd.
$
$
$ # Create tables
$ yarn typeorm migration:run 
$
$
$ # Start the application (development mode)
$ yarn dev # port 33333
$
$ # Routes 
$ POST http://localhost:3333/users #create user
$ POST http://localhost:3333/session #login user
$ GET http://localhost:3333/address #list addres
$ POST http://localhost:3333/address #create addres
```

> Note: To use the app, please access the registration page and create a new user. After authentication, the app will unlock the private pages.

<br />

## Code-base structure

The project is coded using a simple and intuitive structure presented bellow:

```bash
< PROJECT ROOT >
   |
   |-- src/                               # Arquivos da API
   |    |-- @types/                       # Config de tipagens
   |    |-- config/                       # Configuração de hash md5 para geração de token.
   |    |-- database/                     # Migratins e configuração de conexão ao banco.
   |    |-- middlewares/                  # Validação de dados e autenticação de usuário.
   |    |-- models                        # Classes
   |    |-- repositories                  # Repositórios fakes para testes
   |    |-- routes/                       # Rotas da API
   |    |-- services                      # Criação de usuário e sessão.
   |    |-- app.ts                        # Arquivo com configurações para execução da API.
   |-- eslintrc.json                      # Configração para encontrar problemas no cód.
   |-- jest.config.ts                     # Configurações para testes
   |-- ormconfig.json                     # Configurações para conexão com o Postgres
   |-- ************************************************************************
```

<br />

<br />