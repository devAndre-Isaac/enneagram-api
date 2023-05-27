import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { IUserAuth } from '../dtos/users.dto';
import AppError from '@shared/errors/AppError';

dotenv.config();

@injectable()
export class UsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async auth(data: IUserAuth) {
    const user = await this.usersRepository.findOne(data.email);

    if (!user) throw new AppError('User not found');

    const validPassword = data.password === user.password;

    if (!validPassword) {
      throw new AppError('Invalid password');
    }
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: '1d',
    });

    delete user.password;
    return { user, token };
  }
}
