<p align="center">
<a href="https://brazil.generation.org/"><img src="./.github/assets/generation-bg.png" width="150" alt="Generation Logo"/></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Blog Pessoal - API (NestJS)

API backend de exemplo para um blog pessoal, criada com NestJS, TypeScript e TypeORM.

**Status:** Em desenvolvimento

## Visão geral

Este repositório contém a API do projeto `blogpessoal_nest`. Ele fornece endpoints básicos para gerenciar postagens (ex.: listar postagens). O projeto usa MySQL via TypeORM e segue a estrutura padrão de um app NestJS.

## Contexto do projeto

Este projeto foi desenvolvido como atividade prática dentro do bootcamp da **Generation Brasil**. O objetivo é consolidar conceitos de backend com NestJS e TypeORM, aplicando padrões de projeto e operações básicas sobre entidades (CRUD).

### Referência — Conta Bancaria (Turma JavaScript 10)

Simulação de um sistema bancário simples (CRUD de contas e operações).

Sobre

Projeto didático que implementa operações básicas de uma conta bancária: criação, listagem, busca, atualização, exclusão, saque, depósito e transferência entre contas. Desenvolvido como atividade prática da turma de JavaScript da Generation.

Funcionalidades

- Criar, listar e consultar contas por número
- Atualizar e apagar contas
- Sacar e depositar valores
- Transferir valores entre contas
- Menu interativo via terminal (utilizando `readline-sync`)

Observação: enquanto o projeto `blogpessoal_nest` é uma API REST com NestJS, a referência acima descreve um sistema didático de console. Você pode adaptar funcionalidades (ex.: operações de conta) para endpoints REST conforme necessário.

## Tecnologias

- Node.js + npm
- NestJS
- TypeScript
- TypeORM
- MySQL (ou MariaDB)

## Pré-requisitos

- Node.js >= 18
- npm
- Banco de dados MySQL em execução

## Variáveis de ambiente (exemplo)

Crie um arquivo `.env` na raiz com as variáveis básicas de conexão (ou ajuste conforme sua configuração):

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=senha
DB_NAME=blogpessoal_db

# Opcional: ajuste a porta do servidor
PORT=3000
```

## Instalação

Instale dependências:

```bash
npm install
```

## Scripts úteis

- `npm run start` — inicia a aplicação
- `npm run start:dev` — inicia em watch mode (recarrega automaticamente)
- `npm run start:env` — inicia em watch usando `.env`
- `npm run start:prod` — inicia a versão compilada (após `npm run build`)
- `npm run build` — compila o projeto
- `npm run test` — executa testes unitários
- `npm run test:e2e` — executa testes end-to-end

Consulte o `package.json` para a lista completa de scripts.

## Executando localmente

1. Configure o banco de dados e as variáveis no `.env`.
2. Rode `npm install`.
3. Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

O servidor padrão roda em `http://localhost:3000` (ou conforme `PORT`).

## Endpoints disponíveis

- `GET /postagens` — retorna todas as postagens (implementado em `src/postagem/controllers/postagem.controller.ts`).

Exemplo de resposta (JSON):

```json
[
  {
    "id": 1,
    "titulo": "Minha primeira postagem",
    "texto": "Conteúdo da postagem",
    "data": "2025-12-02T00:00:00.000Z"
  }
]
```

> Observação: outros endpoints (criar, atualizar, deletar) podem ser adicionados no serviço `postagem` conforme necessidade.

## Estrutura do projeto

- `src/` — código-fonte
  - `postagem/` — módulo de postagens
    - `controllers/` — controllers (rotas)
    - `services/` — lógica de negócio
    - `entities/` — entidades TypeORM

## Testes

Executar testes unitários:

```bash
npm run test
```

Executar testes e2e:

```bash
npm run test:e2e
```

## Contribuição

Contribuições são bem-vindas. Sugestões:

- Abra uma issue descrevendo a melhoria/bug.
- Faça um fork, crie uma branch com a feature/bugfix e envie um pull request.

## Próximos passos sugeridos

- Adicionar endpoints para CRUD completo de postagens.
- Criar `README` de desenvolvimento com instruções de migração/seed do banco.
- Adicionar `.env.example` com variáveis necessárias.

## Licença

Veja o campo `license` em `package.json`. Atualmente está como `UNLICENSED` — atualize conforme necessário.

---

Se quiser, posso também:

- Gerar um arquivo `README` em inglês.
- Criar um `/.env.example` com as variáveis usadas.
- Implementar endpoints faltantes (criar/atualizar/deletar) e os testes correspondentes.

