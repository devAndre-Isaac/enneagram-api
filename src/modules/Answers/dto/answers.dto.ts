import { DeepPartial } from 'typeorm';
import { Client } from '../../../modules/Clients/entities/Client';
import { Option } from '../../../modules/Options/entities/Option';
import { Question } from '../../../modules/Questions/entities/Question';

export interface IReceiveAnswers {
  question: DeepPartial<Question>;
  mostSuitableOption: DeepPartial<Option>;
  leastSuitableOption: DeepPartial<Option>;
  client: DeepPartial<Client>;
}
