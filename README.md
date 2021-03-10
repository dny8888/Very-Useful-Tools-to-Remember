# Very Useful Tools to Remember
This is a repository for Very Useful Tools to Remember, a back-end challenge from Bossabox.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## Instalação ##

Para rodar este projeto, primeiramente tenha um banco de dados postgresql rodando sem sua máquina, sugiro o uso do docker para simplificar o desenvolvimento.

Com o Git e o Node.js instalado, escolher alguma pasta de seu pc, abrir o terminal nela e digitar os comandos abaixo:
```
git clone https://github.com/dny8888/Very-Useful-Tools-to-Remember.git
cd Very-Useful-Tools-to-Remember
npm install
```
Caso tenha o Docker instalado, basta rodar os camandos no terminal:
```
docker pull postgres
docker run -p 5432:5432 -e POSTGRES_PASSWORD=docker postgres 
```
Caso tenha o postgresql instalado direto em sua máquina, vá até o arquivo ormconfig.json e altere as seguintes variaveis:
```js
{
  "username": "yourUser",
  "password": "yourPassword",
  "database": "very_useful_tools",
}
```
Navegue no postgres e crie um banco de dados  com o mesmo nome da variavvel `database`.

## Rodando o Projeto ##

Para a primeira vez que for rodar o projeto você deve rodar as migrations, que criam algumas configuraçoes e as tabelas do banco de dados, para isso rode no terminal:
`npm typeorm migration:run`,
nas demais vezes basta rodar
`ǹpm dev:server`.
