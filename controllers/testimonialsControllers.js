import * as testimonialsService from "../services/testimonialsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllTestimonials = async (req, res) => {
  const result = await testimonialsService.getAll();
  res.json(result);
};

export default {
  getAllTestimonials: ctrlWrapper(getAllTestimonials),
};