Esse é um projeto feito para o processo seletivo do IOASYS

Nesse projeto foram usados os seguintes tecnologias:

- [Prisma](https://www.prisma.io/)
- [Swagger](https://swagger.io/)
- [Express](https://expressjs.com/)
- [Nodemon](https://www.nodemon.io/)
- [Git](https://git-scm.com/)
- [PostegreSQL](https://www.postgresql.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)

Para iniciar você deve seguir os passos abaixo:

- Clonar o repositório do projeto
- Entrar no diretório do projeto
- Executar o comando: `npm install`
- Executar o comando: `npx prisma db pull`
- Executar o comando: `npx prisma generate`
- Executar o comando: `npm start`

Para executar o comando `npx prisma generate` você deve ter instalado o [Prisma CLI](https://www.prisma.io/downloads)

Para modificar a documentação do projeto você deve seguir os passos abaixo:

- Entrar no diretório do projeto
- Adicionar a rota desejada os comentarios referentes à rota, como o exemplo abaixo:

  ```
      // #swagger.tags = ['Calls'];
      // #swagger.description = 'GET all calls.'
      /*  #swagger.parameters['Authorization'] = {
          in: 'header',
          description: 'Authorization token',
          schema: {
              type: 'string'
          }
  }
  */
  ```

- Executar o comando: `npx swagger-autogen`

O projeto se configura da seguinte forma:

- É possivel o cadastro de varias empresas
- É possivel o cadastro de varios usuarios para cada empresa
- É possivel associar uma role para cada usuario e uma grupo(section)
- É possivel cadastrar o acesso por uma relação de grupo(section) e role
- É possivel limitar o acesso aos endpoints de acordo com a relação de grupo(section) e role
- Demais features :
  - Chamados:
    - E possivel cadastrar chamados para cada usuario
