import publicServices from '../../services/publicRecipesServ/index.js';

const allRecipesInCategory = async (req, res, next) => {
  const { category } = req.params;
  const { ingredient, area, page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const filter = {};
  if (category) filter.category = category;
  if (ingredient) filter.ingredients = { $elemMatch: { id: ingredient } };
  if (area) filter.area = area;

  const fields = 'title description owner thumb';
  const settings = { skip, limit };

  const { total, data } = await publicServices.getFilteredRecipes({
    filter,
    fields,
    settings,
  });

  const totalPages = Math.ceil(total / limit);

  res.json({ total, currentPage: page, totalPages, data });
};

export default allRecipesInCategory;
