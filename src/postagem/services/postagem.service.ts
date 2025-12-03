import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { 
    ILike, 
    Repository 
} from "typeorm";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { 
    HttpException, 
    HttpStatus 
} from "@nestjs/common";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promise<Postagem[]> {
        return this.postagemRepository.find();
    }

    async findById(id: number): Promise<Postagem> {
        
        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        });

        if(!postagem) 
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        
        return postagem;
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        const postagem = await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        });

        if(postagem.length === 0)
            throw new HttpException('titulo não encontrado', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }
}