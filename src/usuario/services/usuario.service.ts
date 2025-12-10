import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ) { }

    async findByUsuario(email: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({
            where: {
                email: email
            }
        })
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();

    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });

        if (!usuario)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;

    }

    async create(email: Usuario): Promise<Usuario> {
        
        const buscaUsuario = await this.findByUsuario(email.email);

        if (buscaUsuario)
            throw new HttpException("O Usuario já existe!", HttpStatus.BAD_REQUEST);

        email.senha = await this.bcrypt.criptografarSenha(email.senha)
        return await this.usuarioRepository.save(email);

    }

    async update(email: Usuario): Promise<Usuario> {

        await this.findById(email.id);

        const buscaUsuario = await this.findByUsuario(email.email);
        if (buscaUsuario && buscaUsuario.id !== email.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        email.senha = await this.bcrypt.criptografarSenha(email.senha)
        return await this.usuarioRepository.save(email);

    }

}