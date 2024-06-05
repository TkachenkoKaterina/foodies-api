import HttpError from '../../helpers/HttpError.js';
import * as authServices from '../authServices.js';

const followUser = async (userId, ownerId) => {
  if (userId === ownerId.toString()) {
    throw HttpError(400, 'You cannot follow yourself');
  }

  const user = await authServices.findUserById(userId);
  const currentUser = await authServices.findUserById(ownerId);

  if (currentUser.following.includes(userId)) {
    throw HttpError(400, 'Already following');
  }

  currentUser.following.push(userId);
  user.followers.push(currentUser._id);
  await currentUser.save();
  await user.save();

  return user;
};

export default followUser;
