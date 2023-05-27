import { dataSource } from '../../../shared/typeorm';
import { Repository } from 'typeorm';
import { IUserAuth } from '../dtos/users.dto';
import { User } from '../entities/User';
import { IUsersRepository } from './IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create(user: IUserAuth): Promise<User> {
    const newUser = this.repository.create(user);

    return this.repository.save(newUser);
  }
  async findOne(email: string): Promise<User> {
    const [user] = await this.repository.find({ where: { email } });
    return user;
  }
}
