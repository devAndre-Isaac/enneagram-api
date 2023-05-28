import { Request, Response } from 'express';
import { container, delay, inject, singleton } from 'tsyringe';
import { QuestionsService } from '../services/QuestionsService';

@singleton()
class QuestionsController {
  constructor(
    @inject(delay(() => QuestionsService))
    private readonly questionsService: QuestionsService,
  ) {}

  public async start(req: Request, res: Response): Promise<Response> {
    const user = await this.questionsService.list();

    return res.json(user);
  }
}
export default container.resolve(QuestionsController);
