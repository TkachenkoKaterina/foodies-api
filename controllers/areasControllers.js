import * as areasService from "../services/areasServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllAreas = async (req, res) => {
  const result = await areasService.getAll();
  res.json(result);
};

export default {
  getAllAreas: ctrlWrapper(getAllAreas),
};
