import { listAllRecipesService } from '../services/recipesServices.js';

export const getAllOwnRecipes = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5 } = req.query;
    const filter = { owner };
    const fields = '-createdAt -updatedAt';
    const skip = (page - 1) * limit;
    const settings = { skip, limit };
    const result = await listAllRecipesService({ filter, fields, settings });
    res.json({ result });
  } catch (error) {
    next(error);
  }
};
