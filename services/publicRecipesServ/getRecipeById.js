import Recipe from '../../models/Recipe.js';

const getRecipeById = async id => {
  const result = await Recipe.findOne({ _id: id });
  return result;
};
export default getRecipeById;
