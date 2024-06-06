import HttpError from '../../helpers/HttpError.js';
import publicServices from '../../services/publicRecipes/index.js';

const receptById = async (req, res, next) => {
  const { id } = req.params;
  const result = await publicServices.getRecipeById(id);
  if (!result) {
    throw HttpError(404, `Recipe with id =${id} is not Found`);
  }
  res.status(201).json(result);
};
export default receptById;
