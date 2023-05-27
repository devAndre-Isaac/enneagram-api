import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Question } from '../../../modules/Questions/entities/Question';
import { Option } from '../../../modules/Options/entities/Option';
import { Client } from '../../Clients/entities/Client';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Option)
  mostSuitableOption: Option;

  @ManyToOne(() => Option)
  leastSuitableOption: Option;

  @ManyToOne(() => Client)
  client: Client;
}
