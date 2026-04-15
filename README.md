# 📝 Blog Pessoal - API

<p align="center">
  <a href="https://brazil.generation.org/">
    <img src="./.github/assets/generation-bg.png" width="150" alt="Generation Brasil"/>
  </a>
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS"/>
  </a>
</p>
 
**API REST robusta para gerenciamento de blog pessoal**
 
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TypeORM](https://img.shields.io/badge/TypeORM-latest-FE0803?style=flat-square&logo=databricks&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
 
[Sobre](#-sobre) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias) · [Instalação](#-instalação) · [Endpoints](#-endpoints) · [Testes](#-testes) · [Contribuindo](#-contribuindo)
 
</div>

 
## 📌 Sobre
 
Backend da aplicação **Blog Pessoal**, desenvolvido durante o bootcamp da [Generation Brasil](https://brazil.generation.org/). A API fornece todos os recursos necessários para criação e gerenciamento de postagens, com arquitetura modular, validação de dados e integração com banco de dados relacional via TypeORM.
 
> **Base URL:** `http://localhost:3000`
 
---
 
## ✨ Funcionalidades
 
| Status | Recurso |
|---|---|
| ✅ Disponível | CRUD completo de postagens |
| ✅ Disponível | Validação de dados com `class-validator` |
| ✅ Disponível | Integração com MySQL via TypeORM |
| ✅ Disponível | Arquitetura modular e escalável |
| 🔄 Em desenvolvimento | Autenticação JWT |
| 🔄 Em desenvolvimento | Upload de imagens |
| 🔄 Em desenvolvimento | Documentação Swagger |
 
---
 
## 🛠 Tecnologias
 
| Tecnologia | Função |
|---|---|
| [NestJS](https://nestjs.com/) | Framework Node.js progressivo |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [TypeORM](https://typeorm.io/) | ORM para TypeScript |
| [MySQL](https://www.mysql.com/) | Banco de dados relacional |
| [Jest](https://jestjs.io/) | Framework de testes |
| [class-validator](https://github.com/typestack/class-validator) | Validação de DTOs |
 
---
 
## 🚀 Instalação
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) >= 18
- [MySQL](https://www.mysql.com/) ou MariaDB
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
### Passo a passo
 
```bash
# 1. Clone o repositório
git clone https://github.com/lancellot/blogpessoal_nest.git
cd blogpessoal_nest
 
# 2. Instale as dependências
npm install
 
# 3. Configure as variáveis de ambiente
cp .env.example .env
```
 
Edite o `.env` com suas credenciais:
 
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=sua_senha
DB_NAME=blogpessoal
JWT_SECRET=sua_chave_secreta
```
 
```bash
# 4. Crie o banco de dados
mysql -u root -p -e "CREATE DATABASE blogpessoal;"
 
# 5. Execute as migrations
npm run migration:run
 
# 6. Inicie o servidor
npm run start:dev
```
 
Servidor disponível em **http://localhost:3000**
 
### Scripts disponíveis
 
```bash
npm run start         # Produção
npm run start:dev     # Desenvolvimento com watch
npm run start:debug   # Debug mode
npm run build         # Compilar TypeScript
npm run test          # Testes unitários
npm run test:cov      # Testes com cobertura
npm run test:e2e      # Testes end-to-end
```
 
---
 
## 📡 Endpoints
 
### Postagens
 
| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `GET` | `/postagens` | Lista todas as postagens | — |
| `GET` | `/postagens/:id` | Busca postagem por ID | — |
| `POST` | `/postagens` | Cria nova postagem | 🔒 |
| `PUT` | `/postagens` | Atualiza postagem | 🔒 |
| `DELETE` | `/postagens/:id` | Remove postagem | 🔒 |
 
### Exemplos de requisição
 
**Criar postagem**
```http
POST /postagens
Content-Type: application/json
 
{
  "titulo": "Minha primeira postagem",
  "texto": "Conteúdo da postagem",
  "data": "2024-12-02T10:00:00Z"
}
```
 
**Resposta de sucesso**
```json
{
  "id": 1,
  "titulo": "Minha primeira postagem",
  "texto": "Conteúdo da postagem",
  "data": "2024-12-02T10:00:00.000Z"
}
```
 
---
 
## 📁 Estrutura do Projeto
 
```
blogpessoal_nest/
├── src/
│   ├── main.ts                   # Entry point da aplicação
│   ├── app.module.ts             # Módulo raiz
│   └── postagem/                 # Módulo de postagens
│       ├── controllers/          # Handlers de rotas HTTP
│       ├── services/             # Regras de negócio
│       ├── entities/             # Entidades do banco de dados
│       └── dto/                  # Data Transfer Objects
├── test/                         # Testes automatizados (e2e)
├── .env.example                  # Template de variáveis de ambiente
├── package.json
└── README.md
```
 
---
 
## 🧪 Testes
 
```bash
# Testes unitários
npm run test
 
# Testes com relatório de cobertura
npm run test:cov
 
# Testes em modo watch (desenvolvimento)
npm run test:watch
 
# Testes end-to-end
npm run test:e2e
```
 
---
 
## 🤝 Contribuindo
 
```bash
# 1. Faça um fork e clone localmente
git clone https://github.com/seu-usuario/blogpessoal_nest.git
 
# 2. Crie uma branch para sua feature
git checkout -b feature/minha-feature
 
# 3. Commit seguindo Conventional Commits
git commit -m "feat: adiciona autenticação JWT"
 
# 4. Envie para o repositório remoto
git push origin feature/minha-feature
 
# 5. Abra um Pull Request
```
 
### Convenção de commits
 
| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `refactor:` | Refatoração sem mudança funcional |
| `test:` | Adição ou ajuste de testes |
 
---
 
## 📄 Licença
 
Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
 
---
 
## 👤 Autor
 
**Assis P. Neto**
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-assispiresneto-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/assispiresneto/)
[![GitHub](https://img.shields.io/badge/GitHub-lancellot-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/lancellot)
[![Email](https://img.shields.io/badge/Email-contato-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:assis.pires.netors@gmail.com)
 
---
 
<div align="center">
Desenvolvido com ❤️ durante o programa **Generation Brasil**
 
⭐ Se este projeto foi útil, considere deixar uma estrela!
 
</div>
