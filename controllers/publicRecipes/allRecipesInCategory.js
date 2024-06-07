import ingId from '../../helpers/ingNameToId.js';
import publicServices from '../../services/publicRecipesServ/index.js';

const allRecipesInCategory = async (req, res, next) => {
  const { category } = req.params;
  const { curPage, limit, area, ingredient } = req.body;
  const result = await publicServices.getRecipesByFilter(
    category,
    ingredient,
    area,
    limit,
    curPage
  );
  res.json(result);
};
export default allRecipesInCategory;
