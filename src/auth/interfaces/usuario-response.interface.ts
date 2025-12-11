import { Postagem } from "../../postagem/entities/postagem.entity";


export interface UsuarioResponse {
    id: number;
    nome: string;
    email: string;
    foto?: string;
    postagem: Postagem[];
}