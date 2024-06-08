import express from 'express';

import recipesControllers from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';
import checkFileExists from '../middlewares/checkFileExists.js';
import isEmptyBody from '../middlewares/isEmptyBody.js';
import validateBody from '../decorators/validateBody.js';
import { createRecipeSchema } from '../schemas/recipesSchema.js';
import formDataToJSON from '../middlewares/formDataToJSON.js';
import isValidId from '../middlewares/isValidId.js';
import publicRecipesctrl from '../controllers/publicRecipes/index.js';

const recipesRouter = express.Router();

recipesRouter.get('/', publicRecipesctrl.allRecipesInCategory);

recipesRouter.get('/public/:id', isValidId, publicRecipesctrl.receptById);

recipesRouter.get('/popular', publicRecipesctrl.popularRecipes);

recipesRouter.post(
  '/',
  authenticate,
  upload.single('thumbRecipeImages'),
  formDataToJSON,
  validateBody(createRecipeSchema),
  isEmptyBody,
  checkFileExists,
  recipesControllers.createOwnRecipe
);
recipesRouter.get(
  '/myRecepies',
  authenticate,
  recipesControllers.getAllOwnRecipes
); //// <------- added myRecepies, інакше не праює 2 однакових раути на рецепти "/" один публічний інший приватний
recipesRouter.delete(
  '/:id',
  authenticate,
  isValidId,
  recipesControllers.deleteOwnRecipe
);
recipesRouter.post(
  '/favorites',
  authenticate,
  recipesControllers.addToFavorites
);
recipesRouter.delete(
  '/favorites/:id',
  authenticate,
  isValidId,
  recipesControllers.removeFromFavorites
);
recipesRouter.get(
  '/favorites',
  authenticate,
  recipesControllers.getFavoriteRecipes
);

export default recipesRouter;
