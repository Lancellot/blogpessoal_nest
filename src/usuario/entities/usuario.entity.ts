import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"
import { Exclude } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    @IsOptional()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @ApiProperty({ description: 'Email do usuário', example: 'usuario@example.com' })
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    email: string

    @ApiProperty({ description: 'Senha do usuário', minLength: 8 })
    @Exclude({ toPlainOnly: true })
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @ApiProperty()
    @IsOptional()
    @Column({length: 5000 }) 
    foto: string

    @ApiProperty()
    @IsOptional()
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}