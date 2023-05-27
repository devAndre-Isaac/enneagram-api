import { dataSource } from '../../../shared/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/Client';
import { IClientsRepository } from './IClientsRepository';

export class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = dataSource.getRepository(Client);
  }

  async create(client: {
    name: string;
    function: string;
    date: Date;
    email: string;
  }): Promise<Client> {
    const newClient = this.repository.create(client);

    return this.repository.save(newClient);
  }

  async findOne(email: string): Promise<Client | undefined> {
    const client = await this.repository.findOne({ where: { email } });

    return client;
  }
}
