import registerUser from './registerUser.js';
import loginUser from './loginUser.js';
import followUser from './followUser.js';
import unfollowUser from './unfollowUser.js';
import followingUser from './followingUser.js';
import followersUser from './followersUser.js';
import currentUser from './currentUser.js';

export default {
  '/users/signup': {
    ...registerUser,
  },
  '/users/signin': {
    ...loginUser,
  },
  '/users/current': {
    ...currentUser,
  },
  '/users/follow/{id}': {
    ...followUser,
    ...unfollowUser,
  },
  '/users/following': {
    ...followingUser,
  },
  '/users/followers/{id}': {
    ...followersUser,
  },
};
