import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from './../../usuario/services/usuario.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { UsuarioResponse } from '../interfaces/usuario-response.interface';



@Injectable()
export class AuthService{
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ){ }

    async validateUser(email: string, password: string): Promise<UsuarioResponse | null> {

        const buscaUsuario = await this.usuarioService.findByUsuario(email)

        if(!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        const matchPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha)

        if(buscaUsuario && matchPassword){
            const { senha, ...resposta } = buscaUsuario
            return resposta
        }

        return null

    }

    async login(emailLogin: UsuarioLogin){

        const payload = { sub: emailLogin.email };

        const buscaUsuario = await this.usuarioService.findByUsuario(emailLogin.email);
        if (!buscaUsuario)
        throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return{
            id: buscaUsuario.id,
            nome: buscaUsuario.nome,
            email : emailLogin.email,
            foto: buscaUsuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        }

    }
}