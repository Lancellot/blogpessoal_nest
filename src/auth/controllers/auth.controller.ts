import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsuarioLogin } from './../entities/usuariologin.entity';

@Controller("/usuarios")
export class AuthController {
    constructor(private authService: AuthService) { }


    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    login(@Body() email: UsuarioLogin): Promise<any> {
        return this.authService.login(email);
    }

}