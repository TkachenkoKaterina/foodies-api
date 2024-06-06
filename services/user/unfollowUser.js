import HttpError from '../../helpers/HttpError.js';
import * as authServices from '../authServices.js';
import { HttpCode } from '../../constants/constants.js';

const unfollowUser = async (userId, ownerId) => {
  if (userId === ownerId.toString()) {
    throw HttpError(HttpCode.BAD_REQUEST, 'You cannot unfollow yourself');
  }

  const user = await authServices.findUserById(userId);
  if (!user) {
    throw HttpError(HttpCode.NOT_FOUND, 'User not found');
  }

  const currentUser = await authServices.findUserById(ownerId);
  if (!currentUser) {
    throw HttpError(HttpCode.NOT_FOUND, 'Current user not found');
  }

  if (!currentUser.following.includes(userId)) {
    throw HttpError(HttpCode.BAD_REQUEST, 'Not following');
  }

  const index = currentUser.following.indexOf(userId);
  currentUser.following.splice(index, 1);

  const indexFollower = user.followers.indexOf(ownerId);
  user.followers.splice(indexFollower, 1);

  await currentUser.save();
  await user.save();

  return user;
};

export default unfollowUser;
