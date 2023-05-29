import { inject, injectable } from 'tsyringe';
import { IReceiveAnswers } from '../dto/answers.dto';
import { IAnswersRepository } from '../repositories/IAnswersRepository';

@injectable()
export class AnswersService {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository,
  ) {}
  public async agreggate(data: IReceiveAnswers[]) {
    const answers = [];
    for (let i = 0; i < data.length; i++) {
      const answer = await this.answersRepository.insert(data[i]);
      answers.push(answer);
    }

    return answers;
  }
}
