import * as testimonialsService from "../services/testimonialsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllTestimonials = async (req, res) => {
  const { page = 1, limit = 1 } = req.query;
  const skip = (page - 1) * limit;
  const settings = { skip, limit };
  const total = await testimonialsService.countTestimonials();
  const result = await testimonialsService.getAll({ settings });
  res.json({
    total,
    result
  });
};

export default {
  getAllTestimonials: ctrlWrapper(getAllTestimonials),
};