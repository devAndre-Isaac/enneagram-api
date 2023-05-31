import { Router } from 'express';
import clientsController from '../controllers/ClientsController';

const clientsRouter = Router();

clientsRouter.post('/create', clientsController.start.bind(clientsController));
clientsRouter.get('/list', clientsController.show.bind(clientsController));
clientsRouter.get('/find/:id', clientsController.find.bind(clientsController));

export default clientsRouter;
