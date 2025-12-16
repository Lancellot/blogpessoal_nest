import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UsuarioLogin {

    @ApiProperty()
    @IsNotEmpty({ message: 'O email é obrigatório' })
    @IsEmail({}, { message: 'O email deve ser válido' })
    public email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    public senha: string;
}