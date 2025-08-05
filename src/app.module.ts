import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria/controller/categoria.controller';
import { CategoriaModule } from './categoria/module/categoria.module';
import { JogoModule } from './jogo/module/jogo.module';
import { tb_categoria } from './categoria/entity/categoria.entity';
import { tb_jogo } from './jogo/entity/jogo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_level_up_games',
      entities: [tb_categoria, tb_jogo],
      synchronize: true,
    }),
    CategoriaModule,
    JogoModule
  ],
})
export class AppModule {}
