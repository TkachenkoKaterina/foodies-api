import publicServices from '../../services/publicRecipesServ/index.js';

const popularRecipes = async (req, res, next) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const fields = 'title category area description owner thumb ingredients';
  const settings = { skip, limit };
  const filter = {};

  const { total, data } = await publicServices.getPopularRecipes({
    filter,
    fields,
    settings,
  });
  const totalPages = Math.ceil(total / limit);

  res.json({ total, currentPage: page, totalPages, data });
};

export default popularRecipes;
