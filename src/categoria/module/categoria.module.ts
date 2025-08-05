import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tb_categoria } from "../entity/categoria.entity";
import { CategoriaService } from "../service/categoria.service";
import { CategoriaController } from "../controller/categoria.controller";

@Module({
    imports: [TypeOrmModule.forFeature([tb_categoria])],

    controllers:[CategoriaController],

    providers:[CategoriaService],

    exports: [TypeOrmModule]
})

export class CategoriaModule {}