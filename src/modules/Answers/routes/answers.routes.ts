import { Router } from 'express';
import answersController from '../controllers/AnswersController';

const answersRouter = Router();

answersRouter.post('/insert', answersController.start.bind(answersController));

export default answersRouter;
