# LetterboxCIn

[![GitHub stars](https://img.shields.io/github/stars/SarahLMelo/ess-review-share)](https://github.com/SarahLMelo/ess-review-share/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/SarahLMelo/ess-review-share)](https://github.com/SarahLMelo/ess-review-share/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/SarahLMelo/ess-review-share)](https://github.com/SarahLMelo/ess-review-share/pulls)

Plataforma de review de filmes desenvolvida para a disciplina Engenharia de Software e Sistemas (IF682) no CIn-UFPE.

## Pré-Requisitos

Para rodar o projeto é necessário ter instalado o Node.js e o npm. 

- Para instalar o Node.js, acesse o [site oficial](https://nodejs.org/) e faça o download da versão correspondente ao seu sistema operacional. 
- O npm já vem instalado com o Node.js.

Também é necessário ter o Docker instalado. 

- Para instalar, acesse o [site oficial](https://www.docker.com/) e faça o download da versão correspondente ao seu sistema operacional.

## Como rodar

### Cliente

1. Entre na pasta /client.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npm start` para iniciar o cliente.

### Servidor

1. Entre na pasta /server.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npx prisma generate`.
4. Execute o comando `npx prisma migrate dev`.
5. Execute o comando `npm run dev` para iniciar o servidor.

### Banco de dados

1. Entre na pasta /server.
2. Execute o comando `docker-compose up -d` para iniciar o banco de dados.

## Deployment

(to do)

## Contribuidores

- [@josevinicius1209](https://github.com/josevinicius1209)
- [@jpcm2](https://github.com/jpcm2)
- [@matheus-vb](https://github.com/matheus-vb)
- [@nathaliafab](https://github.com/nathaliafab)
- [@pgoq](https://github.com/pgoq)
- [@Rayhene](https://github.com/Rayhene)
- [@SarahLMelo](https://github.com/SarahLMelo)
