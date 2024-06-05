import Recipe from '../models/Recipe.js';

export const addRecipeService = async data => {
  return Recipe.create(data);
};

export const listAllRecipesService = (search = {}) => {
  try {
    const { filter = {}, fields = '', settings = {} } = search;
    return Recipe.find(filter, fields, settings).populate('owner');
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};

export const removeRecipeService = async filter => {
  return Recipe.findOneAndDelete(filter);
};
