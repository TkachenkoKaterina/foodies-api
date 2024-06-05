import express from 'express';
import { getAllOwnRecipes } from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';

const recipesRouter = express.Router();

recipesRouter.get('/', authenticate, getAllOwnRecipes);

export default recipesRouter;
