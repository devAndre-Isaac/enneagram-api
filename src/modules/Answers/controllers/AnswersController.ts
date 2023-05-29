import { Request, Response } from 'express';
import { container, delay, inject, singleton } from 'tsyringe';
import { IReceiveAnswers } from '../dto/answers.dto';
import { AnswersService } from '../services/AnswersService';

@singleton()
class AnswersController {
  constructor(
    @inject(delay(() => AnswersService))
    private readonly answersService: AnswersService,
  ) {}

  public async start(req: Request, res: Response): Promise<Response> {
    const user = await this.answersService.agreggate(
      req.body as IReceiveAnswers[],
    );

    return res.json(user);
  }
}
export default container.resolve(AnswersController);
