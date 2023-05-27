import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateClient } from '../dto/client.dto';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
export class ClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}
  public async create(data: ICreateClient) {
    const clientAlreadyExists = await this.clientsRepository.findOne(
      data.email,
    );

    if (clientAlreadyExists) throw new AppError('Client already exists');

    const client = await this.clientsRepository.create(data);

    return client;
  }
}
