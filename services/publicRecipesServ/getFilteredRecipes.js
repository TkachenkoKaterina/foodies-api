import ingId from '../../helpers/ingNameToId.js';
import Recipe from '../../models/Recipe.js';

export const getFilteredRecipes = async (search = {}) => {
  const { filter = {}, fields = '', settings = {} } = search;
  const total = await Recipe.countDocuments(filter);
  const data = await Recipe.find(filter, fields, settings);
  return {
    total,
    data,
  };
};

export default getFilteredRecipes;
