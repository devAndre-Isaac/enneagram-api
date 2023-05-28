import { IClientsRepository } from '../../../modules/Clients/repositories/IClientsRepository';
import { ClientsRepository } from '../../../modules/Clients/repositories/ClientsRepository';

import { IUsersRepository } from '../../../modules/Users/repositories/IUsersRepository';
import { UsersRepository } from '../../../modules/Users/repositories/UsersRepository';
import { container } from 'tsyringe';
import { IQuestionsRepository } from '../../../modules/Questions/repositories/IQuestionsRepository';
import { QuestionsRepository } from '../../../modules/Questions/repositories/QuestionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository,
);
