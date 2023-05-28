import { Answers } from '../../../modules/Answers/entities/Answers';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  function: string;

  @Column()
  date: Date;

  @Column()
  email: string;

  @OneToMany(() => Answers, (answers) => answers.client)
  answers: Answers[];
}
