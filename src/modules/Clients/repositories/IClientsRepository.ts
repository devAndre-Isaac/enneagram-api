import { ICreateClient } from '../dto/client.dto';
import { Client } from '../entities/Client';

export interface IClientsRepository {
  create(client: ICreateClient): Promise<Client>;

  findOne(email: string): Promise<Client | undefined>;
}
