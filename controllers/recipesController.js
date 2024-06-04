import { listAllRecipesService } from "../services/recipesServices";

export const getAllOwnRecipes = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    // const { page = 1, limit = 5, favorite } = req.query;
    const { favorite } = req.query;
    const filter = { owner };
    if (favorite !== undefined) {
      filter.favorite = favorite === "true";
    }
    const fields = "-createdAt -updatedAt";
    // const skip = (page - 1) * limit;
    // const settings = { skip, limit };
    const result = await listAllRecipesService({
      filter,
      fields,
      // settings,
    });
    // const total = await countRecipes(filter);
    // res.json({ total, result });
    res.json({ result });
  } catch (error) {
    next(error);
  }
};
