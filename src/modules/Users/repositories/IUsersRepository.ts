import { User } from '../entities/User';

export interface IUsersRepository {
  create(user: { email: string; password: string }): Promise<User>;
  findOne(email: string): Promise<User>;
}
