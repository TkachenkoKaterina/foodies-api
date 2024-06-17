import publicServices from '../../services/publicRecipesServ/index.js';

const popularRecipes = async (req, res, next) => {
  const { limit } = req.query;
  const data = await publicServices.getPopularRecipes({ limit });
  res.json({ data });
};

export default popularRecipes;
