import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promise<Postagem[]> {
        return this.postagemRepository.find();
    }
}