import Recipe from '../../models/Recipe.js';

export const getRecipeById = async _id => {
  const result = await Recipe.findById(_id);
  return result;
};
export default getRecipeById;
