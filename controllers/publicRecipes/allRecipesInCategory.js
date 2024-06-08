import ingId from '../../helpers/ingNameToId.js';
import publicServices from '../../services/publicRecipesServ/index.js';

const allRecipesInCategory = async (req, res, next) => {
  // const { category } = req.params;
  const { category, ingredient, area, page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const filter = {};

  if (category) filter.category = category;
  if (ingredient) filter.ingredients.id = ingredient; ////not working////{"ingredients.id" :"640c2dd963a319ea671e3665"} example from where _id ?
  if (area) filter.area = area;

  const fields = 'title category area description owner thumb ingredients';
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
