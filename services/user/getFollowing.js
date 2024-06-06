import User from '../../models/User.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';
import getUsersWithRecipes from '../../helpers/getUsersWithRecipes.js';

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
    following.map(getUsersWithRecipes)
  );

  return followingWithRecipes;
};

export default getFollowing;
