import User from '../../models/User.js';
import Recipe from '../../models/Recipe.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';

const getFollowing = async id => {
  const user = await User.findById(id).populate(
    'following',
    'name email _id avatar'
  );

  if (!user) {
    throw new HttpError(HttpCode.NOT_FOUND, 'User not found');
  }

  const following = user.following;

  const followingWithRecipes = await Promise.all(
    following.map(async follower => {
      const recipes = await Recipe.find({ owner: follower._id }).select(
        'title thumb _id'
      );
      return {
        ...follower.toObject(),
        recipes,
      };
    })
  );

  return followingWithRecipes;
};

export default getFollowing;
