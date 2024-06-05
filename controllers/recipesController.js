import {
  addRecipeService,
  listAllRecipesService,
  removeRecipeService,
} from '../services/recipesServices.js';

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

export const createRecipe = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const result = await addRecipeService({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
    const result = await removeRecipeService({ _id, owner });
    if (!result) {
      throw HttpError(404, `Not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
