import * as categoriesService from "../services/categoriesServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllCategories = async (req, res) => {
  const { page = 1, limit = 11 } = req.query;
  const skip = (page - 1) * limit;
  const settings = { skip, limit };
  const total = await categoriesService.countCategories();
  const result = await categoriesService.getAll({ settings });
  res.json({
    total,
    result
  });
};

export default {
  getAllCategories: ctrlWrapper(getAllCategories),
};
