import Recipe from '../../models/Recipe.js';

export const getPopularRecipes = async (search = {}) => {
  const { filter = {}, fields = '', settings = {} } = search;
  const total = await Recipe.countDocuments();
  const data = await Recipe.find(filter, fields, settings).sort({ likes: 1 });

  return {
    total,
    data,
  };
};
export default getPopularRecipes;
