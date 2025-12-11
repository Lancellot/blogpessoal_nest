import { Postagem } from "../../postagem/entities/postagem.entity";


export interface UsuarioResponse {
    id: number;
    nome: string;
    usuario: string;
    foto?: string;
    postagem: Postagem[];
}