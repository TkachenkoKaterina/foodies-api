import User from '../../models/User.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';
import getUsersWithRecipes from '../../helpers/getUsersWithRecipes.js';

const getFollowing = async (id, search = {}) => {
  const { settings = {} } = search;
  const { skip, limit } = settings;

  const user = await User.findById(id);

  if (!user) {
    throw new HttpError(HttpCode.NOT_FOUND, 'User not found');
  }

  const following = await User.find({ _id: { $in: user.following } })
    .select('name email _id avatar')
    .skip(skip)
    .limit(parseInt(limit));

  const followingWithRecipes = await Promise.all(
    following.map(getUsersWithRecipes)
  );

  const total = await User.countDocuments({ _id: { $in: user.following } });

  return {
    total,
    result: followingWithRecipes,
  };
};

export default getFollowing;
