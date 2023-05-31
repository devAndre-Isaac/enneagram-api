import { IInsertOptions } from '../dto/options.dto';
import { Option } from '../entities/Option';

export interface IOptionsRepository {
  insert(options: IInsertOptions): Promise<Option>;
}
