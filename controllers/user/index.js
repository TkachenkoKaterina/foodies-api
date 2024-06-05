import ctrlWraper from '../../decorators/ctrlWrapper.js';
import followUser from './followUser.js';
import unfollowUser from './unfollowUser.js';
import getFollowers from './getFollowers.js';
import getFollowing from './getFollowing.js';

export default {
  followUser: ctrlWraper(followUser),
  unfollowUser: ctrlWraper(unfollowUser),
  getFollowers: ctrlWraper(getFollowers),
  getFollowing: ctrlWraper(getFollowing),
};
