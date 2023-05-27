import { Option } from '../../../modules/Options/entities/Option';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  texto: string;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
