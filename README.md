<p align="center">
  <a href="https://brazil.generation.org/">
    <img src="./.github/assets/generation-bg.png" width="150" alt="Generation Brasil Logo"/>
  </a>
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">Blog Pessoal - API</h1>
<p align="center">
  <strong>API RESTful desenvolvida com NestJS para gerenciamento de blog pessoal</strong>
</p>

<p align="center">
  <a href="#-status">Status</a> •
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-começando">Começando</a> •
  <a href="#-documentação-da-api">Documentação</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-contribuição">Contribuição</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Versão">
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green" alt="Node.js >= 18">
  <img src="https://img.shields.io/badge/nestjs-%5E10.0.0-red" alt="NestJS 10">
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="Licença MIT">
</p>

## 📊 Status

**Status do Projeto:** Em desenvolvimento 🚧
A **Blog Pessoal API** é uma aplicação backend desenvolvida com NestJS que fornece endpoints RESTful para gerenciamento completo de um blog pessoal. O projeto foi concebido como parte do bootcamp da **Generation Brasil** com o objetivo de consolidar conceitos avançados de desenvolvimento backend, arquitetura de software e boas práticas de programação.

### 🎯 Objetivos Educacionais

- Praticar arquitetura de software com NestJS
## ✨ Funcionalidades

### ✅ Implementadas
  - Criação de nova postagem
  - Atualização de postagem existente
  - Exclusão de postagem
- [x] **Banco de Dados Relacional**
  - Configuração com TypeORM
  - Migrações de banco de dados
  - Entidades com validação
- [x] **Arquitetura Modular**
  - Separação de concerns
  - Injeção de dependências
  - Serviços reutilizáveis

### 🔄 Em Desenvolvimento
- [ ] Sistema de autenticação JWT
- [ ] Sistema de comentários
- [ ] Upload de imagens
- [ ] Filtros e paginação
- [ ] Documentação Swagger/OpenAPI

### 📋 Planejadas
- [ ] Categorias e tags
- [ ] Sistema de usuários
- [ ] Busca full-text
- [ ] Cache com Redis
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/) / [MariaDB](https://mariadb.org/)
- [Jest](https://jestjs.io/) (Testing)

### **Ferramentas de Desenvolvimento**
- ESLint + Prettier
- Git + GitHub
- Docker (opcional)
- Postman/Insomnia

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- npm ou yarn
- MySQL ou MariaDB
- Git

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lancellot/blogpessoal_nest.git
   cd blogpessoal_nest
   ```
   
   📁 Estrutura do Projeto

- Arquivos na raiz:
  - `eslint.config.mjs`
  - `nest-cli.json`
  - `package.json`
  - `README.md`
  - `tsconfig.build.json`
  - `tsconfig.json`

- `src/` — código-fonte do aplicativo
  - `main.ts`
  - `app.module.ts`
  - `app.controller.ts`
  - `app.service.ts`
  - `postagem/`
    - `postagem.module.ts`
    - `controllers/`
      - `postagem.controller.ts`
    - `entities/`
      - `postagem.entity.ts`
    - `services/`
      - `postagem.service.ts`