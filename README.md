# 📝 Blog Pessoal - API

<p align="center">
  <a href="https://brazil.generation.org/">
    <img src="./.github/assets/generation-bg.png" width="150" alt="Generation Brasil"/>
  </a>
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS"/>
  </a>
</p>

<p align="center">
  <strong>API REST para gerenciamento de blog pessoal desenvolvida com NestJS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Versão">
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green" alt="Node >= 18">
  <img src="https://img.shields.io/badge/nestjs-10.0.0-red" alt="NestJS 10">
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="MIT">
</p>

---

## 📖 Sobre o Projeto

API backend robusta desenvolvida durante o bootcamp da **Generation Brasil** para consolidar conhecimentos em NestJS, TypeORM e arquitetura de software. O projeto implementa um sistema completo de gerenciamento de postagens para blog pessoal.

## ✨ Funcionalidades

- ✅ CRUD completo de postagens
- ✅ Validação de dados com class-validator
- ✅ Integração com MySQL/MariaDB via TypeORM
- ✅ Arquitetura modular e escalável
- 🔄 Sistema de autenticação JWT (em desenvolvimento)
- 🔄 Upload de imagens (em desenvolvimento)
- 🔄 Documentação Swagger (em desenvolvimento)

## 🛠️ Tecnologias

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript
- **[MySQL](https://www.mysql.com/)** - Banco de dados relacional
- **[Jest](https://jestjs.io/)** - Framework de testes

## 🚀 Começando

### Pré-requisitos

- Node.js >= 18
- MySQL ou MariaDB
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lancellot/blogpessoal_nest.git
cd blogpessoal_nest

# Instale as dependências
npm install

# Configure o arquivo .env
cp .env.example .env
# Edite o .env com suas credenciais do banco

# Crie o banco de dados
mysql -u root -p
CREATE DATABASE blogpessoal;

# Execute as migrations
npm run migration:run

# Inicie o servidor
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`

## 📚 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/postagens` | Lista todas as postagens |
| `GET` | `/postagens/:id` | Busca postagem por ID |
| `POST` | `/postagens` | Cria nova postagem |
| `PUT` | `/postagens/:id` | Atualiza postagem |
| `DELETE` | `/postagens/:id` | Remove postagem |

### Exemplo de Requisição

```http
POST /postagens
Content-Type: application/json

{
  "titulo": "Minha primeira postagem",
  "texto": "Conteúdo da postagem",
  "data": "2024-12-02T10:00:00Z"
}
```

## 📁 Estrutura do Projeto

```
blogpessoal_nest/
├── src/
│   ├── main.ts                 # Entry point
│   ├── app.module.ts           # Módulo raiz
│   └── postagem/               # Módulo de postagens
│       ├── controllers/        # Controllers HTTP
│       ├── services/           # Lógica de negócio
│       └── entities/           # Entidades do banco
├── test/                       # Testes automatizados
├── .env                        # Variáveis de ambiente
├── package.json
└── README.md
```

## 🧪 Testes

```bash
# Todos os testes
npm run test

# Testes com cobertura
npm run test:cov

# Testes em watch mode
npm run test:watch
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido com 💙 por **Assis** - [Generation Brasil](https://brazil.generation.org/)

[![GitHub](https://img.shields.io/badge/GitHub-lancellot-181717?style=flat&logo=github)](https://github.com/lancellot)

---

<p align="center">Feito com ❤️ e ☕</p>