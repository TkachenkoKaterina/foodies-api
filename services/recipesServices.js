import Recipe from '../models/Recipe.js';

export const listAllRecipesService = (search = {}) => {
  try {
    const { filter = {}, fields = '', settings = {} } = search;
    return Recipe.find(filter, fields, settings).populate('owner');
  } catch (error) {
    console.error('Error fetching contacts: ', error);
    throw error;
  }
};
