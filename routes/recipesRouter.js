import express from 'express';
import { getAllOwnRecipes, createRecipe, deleteRecipe, addToFavorites, removeFromFavorites, getFavoriteRecipes } from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';

const recipesRouter = express.Router();

recipesRouter.post('/', authenticate, createRecipe);
recipesRouter.get('/', authenticate, getAllOwnRecipes);
recipesRouter.delete('/:id', authenticate, deleteRecipe);
recipesRouter.post("/favorites", authenticate, addToFavorites);
recipesRouter.delete("/favorites", authenticate, removeFromFavorites);
recipesRouter.get("/favorites", authenticate, getFavoriteRecipes);

export default recipesRouter;
