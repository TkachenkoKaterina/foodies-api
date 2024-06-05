import express from 'express';
import { getAllOwnRecipes, addToFavorites, removeFromFavorites, getFavoriteRecipes } from '../controllers/recipesController.js';
import authenticate from '../middlewares/authenticate.js';

const recipesRouter = express.Router();

recipesRouter.get('/', authenticate, getAllOwnRecipes);

recipesRouter.post("/favorites", authenticate, addToFavorites);

recipesRouter.delete("/favorites", authenticate, removeFromFavorites);

recipesRouter.get("/favorites", authenticate, getFavoriteRecipes);

export default recipesRouter;
