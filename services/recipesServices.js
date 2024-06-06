import Recipe from '../models/Recipe.js';
import User from '../models/User.js';
import HttpError from '../helpers/HttpError.js';

export const addRecipeService = async data => {
  return Recipe.create(data);
};

export const countRecipes = filter => Recipe.countDocuments(filter);

export const listAllRecipesService = (search = {}) => {
  try {
    const { filter = {}, fields = '', settings = {} } = search;
    return Recipe.find(filter, fields, settings).populate(
      'owner',
      'username email'
    );
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};

export const removeRecipeService = async filter => {
  return Recipe.findOneAndDelete(filter);
};

export const addToFavoritesService = async (userId, recipeId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  if (user.favorites.includes(recipeId)) {
    throw HttpError(400, 'Recipe already in favorites');
  }
  user.favorites.push(recipeId);
  await user.save();
};

export const removeFromFavoritesService = async (userId, recipeId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  if (!user.favorites.includes(recipeId)) {
    throw HttpError(400, 'Recipe not in favorites');
  }
  user.favorites = user.favorites.filter(id => id !== recipeId);
  await user.save();
};

export const getFavoriteRecipesService = async userId => {
  const user = await User.findById(userId).populate('favorites');
  if (!user) {
    throw HttpError(404, 'User not found');
  }
  return user.favorites;
};
