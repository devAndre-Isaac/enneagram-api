import { Question } from '../../../modules/Questions/entities/Question';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  option: string;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
