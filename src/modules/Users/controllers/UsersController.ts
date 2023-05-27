import { Request, Response } from 'express';
import { container, delay, inject, singleton } from 'tsyringe';
import { IUserAuth } from '../dtos/users.dto';
import { UsersService } from '../services/UsersService';

@singleton()
class UsersController {
  constructor(
    @inject(delay(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public async start(req: Request, res: Response): Promise<Response> {
    const user = await this.usersService.auth(req.body as IUserAuth);

    return res.json(user);
  }
}
export default container.resolve(UsersController);
