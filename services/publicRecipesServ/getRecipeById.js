import Recipe from '../../models/Recipe.js';

const getRecipeById = async id => {
  const result = await Recipe.findOne({ _id: id }).populate(
    'owner',
    'name avatar'
  );
  return result;
};
export default getRecipeById;
