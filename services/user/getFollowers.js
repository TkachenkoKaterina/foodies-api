import User from '../../models/User.js';
import Recipe from '../../models/Recipe.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowers = async id => {
  const user = await User.findById(id).populate(
    'followers',
    'name email _id avatar'
  );

  if (!user) {
    throw new HttpError(HttpCode.NOT_FOUND, 'User not found');
  }

  const followers = user.followers;

  const followersWithRecipes = await Promise.all(
    followers.map(async follower => {
      const recipes = await Recipe.find({ owner: follower._id }).select(
        'title thumb _id'
      );
      return {
        ...follower.toObject(),
        recipes,
      };
    })
  );

  return followersWithRecipes;
};

export default getFollowers;
