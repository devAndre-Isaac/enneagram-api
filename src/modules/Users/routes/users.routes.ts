import { Router } from 'express';
import usersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/auth1', usersController.start.bind(usersController));

export default usersRouter;
