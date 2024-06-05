import User from '../../models/User.js';
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
  return followers;
};

export default getFollowers;
