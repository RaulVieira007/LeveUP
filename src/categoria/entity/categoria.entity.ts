// categoria.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { tb_jogo } from '../../jogo/entity/jogo.entity';

@Entity()
export class tb_categoria {
  @PrimaryGeneratedColumn()
  id: number; // Exemplo: 1

  @Column() 
  nome_categoria: string; // Exemplo: FPS

  @OneToMany(() => tb_jogo, (jogo) => jogo.categoria)
  jogos: tb_jogo[];
}
