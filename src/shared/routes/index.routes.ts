import clientsRouter from '@modules/Clients/routes/clients.routes';
import usersRouter from '@modules/Users/routes/users.routes';

import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);

export default routes;
