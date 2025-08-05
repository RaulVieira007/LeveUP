import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tb_jogo } from '../entity/jogo.entity';
import { JogoService } from '../service/jogo.service';
import { jogoController } from '../controller/jogo.controller';
import { tb_categoria } from 'src/categoria/entity/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tb_jogo, tb_categoria])],
  controllers: [jogoController], 
  providers: [JogoService],
})
export class JogoModule {}
