import publicServices from '../../services/publicRecipesServ/index.js';

const popularRecipes = async (req, res, next) => {
  const data = await publicServices.getPopularRecipes();
  res.json({ data });
};

export default popularRecipes;
