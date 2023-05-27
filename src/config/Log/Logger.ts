import pino, { Logger } from 'pino';

export class LoggerService {
  private static instance: LoggerService;
  private logger: Logger;

  private constructor() {
    this.logger = pino();
  }

  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }

    return LoggerService.instance;
  }

  public getLogger(): Logger {
    return this.logger;
  }
}
