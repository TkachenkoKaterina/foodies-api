import User from '../../models/User.js';
import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';
import getUsersWithRecipes from '../../helpers/getUsersWithRecipes.js';

const getFollowers = async (id, search = {}) => {
  const { settings = {} } = search;
  const { skip, limit } = settings;

  const user = await User.findById(id);

  if (!user) {
    throw new HttpError(HttpCode.NOT_FOUND, 'User not found');
  }
  const followers = await User.find({ _id: { $in: user.followers } })
    .select('name email _id avatar')
    .skip(skip)
    .limit(parseInt(limit));

  const total = await User.countDocuments({ _id: { $in: user.followers } });

  const followersWithRecipes = await Promise.all(
    followers.map(getUsersWithRecipes)
  );

  return {
    total,
    result: followersWithRecipes,
  };
};

export default getFollowers;
