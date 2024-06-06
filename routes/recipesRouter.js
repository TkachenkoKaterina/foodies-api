import express from 'express';
import {
  getAllOwnRecipes,
  createRecipe,
  deleteRecipe,
  addToFavorites,
  removeFromFavorites,
  getFavoriteRecipes,
} from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';
import checkFileExists from '../middlewares/checkFileExists.js';
import isEmptyBody from '../middlewares/isEmptyBody.js';
import validateBody from '../decorators/validateBody.js';
import { createRecipeSchema } from '../schemas/recipesSchema.js';
import formDataToJSON from '../middlewares/formDataToJSON.js';
import { isValidId } from '../middlewares/isValidId.js';

const recipesRouter = express.Router();

recipesRouter.post(
  '/',
  authenticate,
  upload.single('thumbRecipeImages'),
  formDataToJSON,
  validateBody(createRecipeSchema),
  isEmptyBody,
  checkFileExists,
  createRecipe
);
recipesRouter.get('/', authenticate, getAllOwnRecipes);
recipesRouter.delete('/:id', authenticate, isValidId, deleteRecipe);
recipesRouter.post('/favorites', authenticate, addToFavorites);
recipesRouter.delete('/favorites', authenticate, removeFromFavorites);
recipesRouter.get('/favorites', authenticate, getFavoriteRecipes);

export default recipesRouter;
