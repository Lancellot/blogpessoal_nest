import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from './../../usuario/services/usuario.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { UsuarioResponse } from '../interfaces/usuario-response.interface';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) { }

    async validateUser(email: string, password: string): Promise<UsuarioResponse | null> {
        const buscaUsuario = await this.usuarioService.findByUsuario(email);
        
        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
        
        const matchPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha);
        
        if (buscaUsuario && matchPassword) {
            const { senha, ...resposta } = buscaUsuario;
            return resposta;
        }
        
        return null;
    }

    async login(usuarioLogin: UsuarioLogin) {
        // Valida as credenciais do usuário
        const usuario = await this.validateUser(usuarioLogin.email, usuarioLogin.senha);
        
        if (!usuario) {
            throw new HttpException('Email ou senha incorretos!', HttpStatus.UNAUTHORIZED);
        }

        // Cria o payload do token
        const payload = { sub: usuario.email };
        
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            senha: '',
            foto: usuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
}