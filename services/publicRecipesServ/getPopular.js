import Recipe from '../../models/Recipe.js';

export const getPopularRecipes = async ({ limit }) => {
  const data = await Recipe.find()
    .populate('owner', 'name avatar')
    .sort({ likes: 1 })
    .limit(limit);

  return data;
};
export default getPopularRecipes;
