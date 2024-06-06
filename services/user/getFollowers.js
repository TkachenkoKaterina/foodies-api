import User from '../../models/User.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';
import getUsersWithRecipes from '../../helpers/getUsersWithRecipes.js';

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
    followers.map(getUsersWithRecipes)
  );

  return followersWithRecipes;
};

export default getFollowers;
