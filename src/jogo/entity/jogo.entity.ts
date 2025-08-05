import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { tb_categoria } from '../../categoria/entity/categoria.entity';

@Entity()
export class tb_jogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_jogo: string;

  @Column()
  plataforma: string;

  // Relacionamento com categoria
  @ManyToOne(() => tb_categoria, (categoria) => categoria.jogos)
  @JoinColumn({ name: 'categoriaId' }) // nome da coluna FK
  categoria: tb_categoria;

  @Column()
  categoriaId: number; // ID da categoria
}
