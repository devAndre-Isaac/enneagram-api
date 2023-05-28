import { Router } from 'express';
import questionsRouter from 'src/modules/Questions/routes/questions.routes';
import clientsRouter from '../../modules/Clients/routes/clients.routes';
import usersRouter from '../../modules/Users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);
routes.use('/questions', questionsRouter);

export default routes;
