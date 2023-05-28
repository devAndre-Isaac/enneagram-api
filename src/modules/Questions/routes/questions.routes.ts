import { Router } from 'express';
import questionsController from '../controllers/QuestionsController';

const questionsRouter = Router();

questionsRouter.get(
  '/list',
  questionsController.start.bind(questionsController),
);

export default questionsRouter;
