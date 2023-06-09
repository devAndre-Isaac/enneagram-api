import { Question } from '../entities/Question';

export interface IQuestionsRepository {
  find(): Promise<Question[]>;
  insert(questions: { texto: string }): Promise<Question>;
}
