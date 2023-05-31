import { Request, Response } from 'express';
import { container, delay, inject, singleton } from 'tsyringe';
import { ICreateClient } from '../dto/client.dto';
import { ClientsService } from '../services/ClientsService';

@singleton()
class ClientsController {
  constructor(
    @inject(delay(() => ClientsService))
    private readonly clientsService: ClientsService,
  ) {}

  public async start(req: Request, res: Response): Promise<Response> {
    const client = await this.clientsService.create(req.body as ICreateClient);

    return res.json(client);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const clients = await this.clientsService.list();

    return res.json(clients);
  }

  public async find(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const client = await this.clientsService.find(id);

    return res.json(client);
  }
}
export default container.resolve(ClientsController);
