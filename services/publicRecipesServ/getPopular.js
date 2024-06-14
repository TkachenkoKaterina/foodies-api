import Recipe from '../../models/Recipe.js';

export const getPopularRecipes = async () => {
  const data = await Recipe.find()
    .populate('owner', 'name avatar')
    .sort({ likes: 1 })
    .limit(4);

  return data;
};
export default getPopularRecipes;
