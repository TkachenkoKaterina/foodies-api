import ingId from '../../helpers/ingNameToId.js';
import publicServices from '../../services/publicRecipesServ/index.js';

const allRecipesInCategory = async (req, res, next) => {
  const { category } = req.params;
  const { curPage, limit, area, ingredient } = req.body;
  console.log(area);
  console.log(ingredient);

  // const filter = { category: category, ingredient: ingredient, area: area };
  // const fields = 'title';
  // const skip = (curPage - 1) * limit;
  // const settings = { skip, limit };
  const ingredientId = ingId(ingredient);
  console.log(ingredientId);
  const result = await publicServices.getRecipesByFilter(
    category,
    ingredientId,
    area,
    limit,
    curPage
  );
  res.json(result);
};
export default allRecipesInCategory;
