import Recipe from '../models/Recipe.js';

const getUsersWithRecipes = async follower => {
  const recipes = await Recipe.find({ owner: follower._id }).select(
    'title _id thumb'
  );

  return {
    ...follower.toObject(),
    recipes,
  };
};

export default getUsersWithRecipes;
