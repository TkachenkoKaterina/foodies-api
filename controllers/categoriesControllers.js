import * as categoriesService from "../services/categoriesServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllCategories = async (req, res) => {
  const result = await categoriesService.getAll();
  res.json(result);
};

export default {
  getAllCategories: ctrlWrapper(getAllCategories),
};
