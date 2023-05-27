import { Client } from '../entities/Client';

export interface IClientsRepository {
  create(client: {
    name: string;
    function: string;
    date: Date;
    email: string;
  }): Promise<Client>;

  findOne(email: string): Promise<Client | undefined>;
}
