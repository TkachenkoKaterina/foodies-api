import HttpError from '../../helpers/HttpError.js';
import { HttpCode } from '../../constants/constants.js';
import * as authServices from '../authServices.js';

const followUser = async (userId, ownerId) => {
  if (userId === ownerId.toString()) {
    throw HttpError(HttpCode.BAD_REQUEST, 'You cannot follow yourself');
  }

  const user = await authServices.findUserById(userId);
  if (!user) {
    throw HttpError(HttpCode.NOT_FOUND, 'User not found');
  }

  const currentUser = await authServices.findUserById(ownerId);

  if (!currentUser) {
    throw HttpError(HttpCode.NOT_FOUND, 'Current user not found');
  }

  if (currentUser.following.includes(userId)) {
    throw HttpError(HttpCode.BAD_REQUEST, 'Already following');
  }

  currentUser.following.push(userId);
  user.followers.push(currentUser._id);
  await currentUser.save();
  await user.save();

  return user;
};

export default followUser;
