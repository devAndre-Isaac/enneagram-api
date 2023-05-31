import { dataSource } from '../../../shared/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../entities/Option';
import { IOptionsRepository } from './IOptionsRepository';
import { IInsertOptions } from '../dto/options.dto';

export class OptionsRepository implements IOptionsRepository {
  private repository: Repository<Option>;
  constructor() {
    this.repository = dataSource.getRepository(Option);
  }
  public async insert(options: IInsertOptions): Promise<Option> {
    const insertOptions = this.repository.create(options);
    return this.repository.save(insertOptions);
  }
}
