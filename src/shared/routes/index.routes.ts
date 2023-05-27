import { Router } from 'express';
import clientsRouter from '../../modules/Clients/routes/clients.routes';
import usersRouter from '../../modules/Users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);

export default routes;
