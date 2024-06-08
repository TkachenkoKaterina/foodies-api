import Ingredient from '../models/Ingredient.js';

const ingId = async ingredient => {
  if (!ingredient) {
    return;
  } else if (ingredient) {
    const result = await Ingredient.find({ name: ingredient }).select('_id');
    console.log(result[0]?._id?.toHexString());
    return result[0]?._id?.toHexString();
  }
};
export default ingId;
