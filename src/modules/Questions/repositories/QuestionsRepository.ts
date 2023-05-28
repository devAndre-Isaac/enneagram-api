import { dataSource } from '../../../shared/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entities/Question';
import { IQuestionsRepository } from './IQuestionsRepository';

export class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = dataSource.getRepository(Question);
  }

  async find(): Promise<Question[]> {
    const questions = await this.repository.find({ relations: ['options'] });
    return questions;
  }
}
