import { Question } from '../../../modules/Questions/entities/Question';
import { DeepPartial } from 'typeorm';

export interface IInsertOptions {
  option: string;
  question: DeepPartial<Question>;
}
