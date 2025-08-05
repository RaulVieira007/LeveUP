import { tb_jogo } from "../entity/jogo.entity";
import { tb_categoria } from "../../categoria/entity/categoria.entity"; 
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogoService {
    constructor(
        @InjectRepository(tb_jogo)
        private jogoRepository: Repository<tb_jogo>,

        @InjectRepository(tb_categoria)
        private categoriaRepository: Repository<tb_categoria>,
    ) { }

    findAll(): Promise<tb_jogo[]> {
        return this.jogoRepository.find({ relations: ['categoria'] });
    }

    async findOne(id: number): Promise<tb_jogo> {
        const jogo = await this.jogoRepository.findOne({
            where: { id },
            relations: ['categoria'],
        });

        if (!jogo) {
            throw new NotFoundException(`Jogo com ID ${id} não encontrado`);
        }

        return jogo;
    }

    async create(jogo: tb_jogo): Promise<tb_jogo> {
        const categoria = await this.categoriaRepository.findOne({ where: { id: jogo.categoria.id } });

        if (!categoria) {
            throw new NotFoundException(`Categoria com ID ${jogo.categoria.id} não encontrada`);
        }

        jogo.categoria = categoria;
        return this.jogoRepository.save(jogo);
    }

    async update(id: number, jogo: tb_jogo): Promise<tb_jogo> {
        const jogoExistente = await this.jogoRepository.findOne({ where: { id } });

        if (!jogoExistente) {
            throw new NotFoundException(`Jogo com ID ${id} não encontrado`);
        }

        const categoria = await this.categoriaRepository.findOne({ where: { id: jogo.categoria.id } });

        if (!categoria) {
            throw new NotFoundException(`Categoria com ID ${jogo.categoria.id} não encontrada`);
        }

        jogo.categoria = categoria;

        const jogoAtualizado = Object.assign(jogoExistente, jogo);
        return this.jogoRepository.save(jogoAtualizado);
    }

    async remove(id: number): Promise<void> {
        const jogo = await this.jogoRepository.findOne({ where: { id } });

        if (!jogo) {
            throw new NotFoundException(`Jogo com ID ${id} não encontrado`);
        }

        await this.jogoRepository.remove(jogo);
    }
}
