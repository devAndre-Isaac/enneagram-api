import { inject, injectable } from 'tsyringe';
import { IQuestionsRepository } from '../repositories/IQuestionsRepository';

@injectable()
export class QuestionsService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}
  public async list() {
    const questions = await this.questionsRepository.find();

    return questions;
  }
}
