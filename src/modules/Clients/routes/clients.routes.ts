import { Router } from 'express';
import clientsController from '../controllers/ClientsController';

const clientsRouter = Router();

clientsRouter.post('/create', clientsController.start.bind(clientsController));

export default clientsRouter;
