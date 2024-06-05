import HttpError from '../../helpers/HttpError.js';
import * as authServices from '../authServices.js';

const unfollowUser = async (userId, ownerId) => {
  if (userId === ownerId.toString()) {
    throw HttpError(400, 'You cannot unfollow yourself');
  }

  const user = await authServices.findUserById(userId);
  const currentUser = await authServices.findUserById(ownerId);

  if (!currentUser.following.includes(userId)) {
    throw HttpError(400, 'Not following');
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
