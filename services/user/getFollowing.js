import User from '../../models/User.js';
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
  return following;
};

export default getFollowing;
