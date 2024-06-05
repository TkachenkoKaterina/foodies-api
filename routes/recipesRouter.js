import express from 'express';
import {
  createRecipe,
  deleteRecipe,
  getAllOwnRecipes,
} from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';

const recipesRouter = express.Router();

recipesRouter.post('/', authenticate, createRecipe);
recipesRouter.get('/', authenticate, getAllOwnRecipes);
recipesRouter.delete('/:id', authenticate, deleteRecipe);

export default recipesRouter;
