import publicServices from '../../services/publicRecipes/index.js';

const allRecipesInCategory = async (req, res, next) => {
  const { category } = req.params;
  const { curPage, limit, area, ingredient } = req.query;
  // const filter = { category: category, ingredient: ingredient, area: area };
  // const fields = 'title';
  // const skip = (curPage - 1) * limit;
  // const settings = { skip, limit };
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
