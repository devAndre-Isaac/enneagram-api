import { dataSource } from '../../../shared/typeorm';
import { Repository } from 'typeorm';
import { IReceiveAnswers } from '../dto/answers.dto';
import { Answers } from '../entities/Answers';
import { IAnswersRepository } from './IAnswersRepository';

export class AnswersRepository implements IAnswersRepository {
  private repository: Repository<Answers>;
  constructor() {
    this.repository = dataSource.getRepository(Answers);
  }
  public async insert(answers: IReceiveAnswers): Promise<Answers> {
    const insertAnswers = this.repository.create(answers);
    return this.repository.save(insertAnswers);
  }
}
