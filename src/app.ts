import 'reflect-metadata';
import cors from 'cors';
import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import 'express-async-errors';

import dotenv from 'dotenv';
import { dataSource } from './shared/typeorm';
import routes from './shared/routes/index.routes';
import AppError from './shared/errors/AppError';

dotenv.config();

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }
  public async start() {
    try {
      this.db();
      this.server();
    } catch (error) {
      console.log('Error start application: ', error);
    }
  }

  private db(): void {
    dataSource
      .initialize()
      .then(() => console.log('📦 successfully connected with database'));
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(express.json({ limit: '50mb' }) as RequestHandler);

    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(routes);
    this.app.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }
        return response.status(500).json({
          status: 'error',
          message: 'Internal server Error',
        });
      },
    );
  }

  private server() {
    const port: number = Number(process.env.PORT) || 3000;
    this.app.listen(port, () => {
      console.log(`💻 server running on port ${port}`);
    });
  }
}
const application = new App();

export const app = application.app;
export default application;
