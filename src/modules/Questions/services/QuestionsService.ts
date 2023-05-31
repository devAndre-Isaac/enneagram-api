import { optionsToInsert } from '../../../config/database/seed/options.data';
import { questionsToInsert } from '../../../config/database/seed/questions.data';
import { IOptionsRepository } from '../../../modules/Options/repositories/IOptionsRepository';
import { inject, injectable } from 'tsyringe';
import { IQuestionsRepository } from '../repositories/IQuestionsRepository';

@injectable()
export class QuestionsService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,

    @inject('OptionsRepository')
    private optionsRepository: IOptionsRepository,
  ) {}
  public async list() {
    const questions = await this.questionsRepository.find();

    return questions;
  }

  public async insert() {
    const questions = [];
    for (let i = 0; i < questionsToInsert.length; i++) {
      const question = await this.questionsRepository.insert(
        questionsToInsert[i],
      );
      questions.push(question);
    }

    const assignedOptions: { question: string; option: string }[] = [];

    questions.forEach((q) => {
      const matchingOptions = optionsToInsert.filter(
        (opt) => opt.question === '',
      );
      matchingOptions.forEach((opt, i) => {
        if (i < 3) {
          opt.question = q.id;
          assignedOptions.push(opt);
        }
      });
    });

    const options = [];
    for (let i = 0; i < assignedOptions.length; i++) {
      const option = await this.optionsRepository.insert(
        assignedOptions[i] as any,
      );
      options.push(option);
    }
    return options;
  }
}
