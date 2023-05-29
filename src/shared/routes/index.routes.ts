import { Router } from 'express';
import questionsRouter from '../../modules/Questions/routes/questions.routes';
import clientsRouter from '../../modules/Clients/routes/clients.routes';
import usersRouter from '../../modules/Users/routes/users.routes';
import answersRouter from '../../modules/Answers/routes/answers.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);
routes.use('/questions', questionsRouter);
routes.use('/answers', answersRouter);

export default routes;
