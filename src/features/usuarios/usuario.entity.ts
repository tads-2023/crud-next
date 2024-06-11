import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioDTO } from './usuario.dto';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  ra: string;

  @Column()
  cpf: string;

  @Column()
  idade: string
}