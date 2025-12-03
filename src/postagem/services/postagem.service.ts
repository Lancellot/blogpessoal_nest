import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import {
    DeleteResult,
    ILike,
    Repository
} from "typeorm";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator"; // esse caminho é diferente dos outros
import {
    HttpException,
    HttpStatus
} from "@nestjs/common";


@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return this.postagemRepository.find();
    }

    async findById(id: number): Promise<Postagem> {

        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        const postagem = await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        });

        if (postagem.length === 0)
            throw new HttpException('titulo não encontrado', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem> {
        await this.findById(postagem.id);

        return this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.postagemRepository.delete(id);
    }
}