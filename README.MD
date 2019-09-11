# TK - Docs Lambda Training Kit

### Overview

*Problem*

Updating and maintaining the Training Kit takes longer than necessary. Since the courses are hard coded it makes updating a specific course difficult and time consuming having to manually find it in the codebase and update it accordingly.

*Solution*

The solution was to create Training Kit a fully modular system where courses can be easily added and updated without searching to codebase. Each course, sprint, module, and lesson is a database object which can be edited via an interface. Once the changes are saved, the training kit reflects them immediately. This solution allows content to be created in markdown or HTML which would speed up the creation process.


*Technology Stack*

- Apollo Client
- GraphQL
- Prisma
- PostgresQL
- Docker

### Running the Project

__Starting the Server__
- `cd server`
- install node packages `npm install`
- spin up docker container `docker-compose up -d` **
- generate prisma server `npm deploy`
- run server `npm start `
  
__Starting the Client__
- from root directory `cd client`
- install node packages `npm install`
- run client `npm start`
  
** Docker Compose File not in repo.
- create a file `docket-compose.yml`
- Use the code snippet below from prisma documentation. Can also be found [here](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/ "Prisma Documentation").
```
version: '3'
services:
  prisma:
    image: prismagraphql/prisma:1.34
    restart: always
    ports:
      - '4466:4466'
    environment:
      PRISMA_CONFIG: |
        port: 4466
        databases:
          default:
            connector: postgres
            host: postgres
            port: 5432
            user: prisma
            password: prisma
  postgres:
    image: postgres:10.3
    restart: always
    environment:
      POSTGRES_USER: prisma
      POSTGRES_PASSWORD: prisma
    volumes:
      - postgres:/var/lib/postgresql/data
volumes:
  postgres: ~
```

### Demo

![](demo.gif)