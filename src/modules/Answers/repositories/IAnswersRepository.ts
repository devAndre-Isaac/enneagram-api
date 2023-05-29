import { IReceiveAnswers } from '../dto/answers.dto';
import { Answers } from '../entities/Answers';

export interface IAnswersRepository {
  insert(answers: IReceiveAnswers): Promise<Answers>;
}
