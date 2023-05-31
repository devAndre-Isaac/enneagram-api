import { ICreateClient } from '../dto/client.dto';
import { Client } from '../entities/Client';

export interface IClientsRepository {
  create(client: ICreateClient): Promise<Client>;
  find(): Promise<Client[]>;
  findById(id: string): Promise<Client | undefined>;
  findOne(email: string): Promise<Client | undefined>;
}
