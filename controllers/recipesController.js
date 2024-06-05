import { listAllRecipesService } from '../services/recipesServices.js';
import Recipe from '../models/Recipe.js';

export const getAllOwnRecipes = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5 } = req.query;
    const filter = { owner };
    const fields = '-createdAt -updatedAt';
    const skip = (page - 1) * limit;
    const settings = { skip, limit };
    const result = await listAllRecipesService({ filter, fields, settings });
    res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const addToFavorites = async (req, res, next) => {
  try {
    const { recipeId } = req.body; 
    const { _id: userId } = req.user;

    const recipe = await Recipe.findOne({ _id: recipeId, owner: userId });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found or doesn't belong to the user" });
    }

    recipe.favorite = true;
    await recipe.save();

    res.status(200).json({ message: 'Recipe added to favorites successfully' });
  } catch (error) {
    next(error);
  }
};


export const removeFromFavorites = async (req, res, next) => {
  try {
    const { recipeId } = req.body; 
    const { _id: userId } = req.user;

    const recipe = await Recipe.findOne({ _id: recipeId, owner: userId });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found or doesn't belong to the user" });
    }

    recipe.favorite = false;
    await recipe.save();

    res.status(200).json({ message: 'Recipe removed from favorites successfully' });
  } catch (error) {
    next(error);
  }
};

export const getFavoriteRecipes = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const filter = { owner, favorite: true }; 
    const fields = "-createdAt -updatedAt";
    const result = await listAllRecipesService({ filter, fields });
    res.json({ result });
  } catch (error) {
    next(error);
  }
};