import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { tb_categoria } from "../entity/categoria.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(tb_categoria)
        private categoriaRepository: Repository<tb_categoria>,
    ) { }

    async create(tb_categoria: tb_categoria): Promise<tb_categoria> {
        return await this.categoriaRepository.save(tb_categoria);
    }

    findAll(): Promise<tb_categoria[]> {
        return this.categoriaRepository.find({ relations: ['jogos'] });
    }

    async findOne(id: number): Promise<tb_categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
            relations: ['jogos'],
        });

        if (!categoria) {
            throw new NotFoundException(`Categoria com ID: ${id} Não encontrada`);
        }

        return categoria;
    }

    async update(id: number, tb_categoria: tb_categoria): Promise<tb_categoria> {
        await this.categoriaRepository.update(id, tb_categoria);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.categoriaRepository.delete(id);
    }
}
