import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from '../src/usuario/usuario.module';
import { AuthModule } from '../src/auth/auth.module';
import { PostagemModule } from '../src/postagem/postagem.module';
import { TemaModule } from '../src/tema/tema.module';

describe('Testes dos módulos Usuario e Auth (e2e)', () => {
  let usuarioId: number;
  let token: string;
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [__dirname + './../src/**/entities/*.entity.ts'],
          synchronize: true,
          dropSchema: true,
        }),
        UsuarioModule,
        AuthModule,
        PostagemModule,
        TemaModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  }, 30000);

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('01 - Deve cadastrar um novo usuário', async () => {
    const resposta = await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send({
        nome: 'Teste',
        email: 'teste@example.com',
        senha: '1234565678',
        foto: 'https://i.imgur.com/zEM4Z3S.jpeg',
      })
      .expect(201);

    usuarioId = resposta.body.id;
    expect(resposta.body).toHaveProperty('id');
    expect(resposta.body.nome).toBe('Teste');
    expect(resposta.body.email).toBe('teste@example.com');
    expect(resposta.body.senha.length).toBeGreaterThanOrEqual(8);
  });

  it('02 - Não deve cadastrar um usuário com email já existente', async () => {
    await request(app.getHttpServer())
      .post('/usuarios/cadastrar')
      .send({
        nome: 'Teste',
        email: 'teste@example.com',
        senha: '1234565678',
        foto: 'https://i.imgur.com/zEM4Z3S.jpeg'
      })
      .expect(400)
      .then((resposta) => {
        expect(resposta.body).toHaveProperty('message');
        expect(resposta.body.message).toContain('O Usuario já existe!');
      });
  });

  it('03 - Deve autenticar o usuário e receber o token JWT', async () => {
    const response = await request(app.getHttpServer())
      .post('/usuarios/logar')
      .send({
        email: 'teste@example.com',
        senha: '1234565678',
      })
      .expect(200)
      .then((resposta) => {
        expect(resposta.body).toHaveProperty('token');
        token = (resposta.body as { token: string }).token;
      });
  });

    it('4 - Deve listar todos os usuários', async () => {
    return request(app.getHttpServer())
      .get('/usuarios/all')
      .set('Authorization', token)
      .send({})
      .expect(200)
      .then((resposta) => {
        expect(resposta.body.length).toBeGreaterThan(0);
      });
  });

    it('05 - Deve atualizar os dados do usuário', async () => {
      return request(app.getHttpServer())
        .put('/usuarios/atualizar')
        .set('Authorization', token)
        .send({
          id: usuarioId,
          nome: 'Teste Atualizado',
          email: 'teste_atualizado@example.com',
          senha: '654321555',
          foto: 'https://i.imgur.com/zEM4Z3S.jpeg'
        })
        .expect(200)
        .then((resposta) => {
          expect(resposta.body.nome).toBe('Teste Atualizado');
          expect(resposta.body.email).toBe('teste_atualizado@example.com');
          expect(resposta.body.senha.length).toBeGreaterThanOrEqual(8);
        });
    });

  });