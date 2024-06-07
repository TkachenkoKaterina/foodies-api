import * as ingredientsService from "../services/ingredientsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllIngredients = async (req, res) => {
  const result = await ingredientsService.getAll();
  res.json(result);
};

export default {
  getAllIngredients: ctrlWrapper(getAllIngredients),
};