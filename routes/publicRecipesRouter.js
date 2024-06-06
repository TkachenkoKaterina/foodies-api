import express from 'express';
import publicRecipesctrl from '../controllers/publicRecipes/index.js';
import { isValidId } from '../middlewares/isValidId.js';
const publicRecipesRouter = express.Router();

publicRecipesRouter.get('/:category', publicRecipesctrl.allRecipesInCategory);
publicRecipesRouter.get('/:id', isValidId, publicRecipesctrl.receptById);

export default publicRecipesRouter;
