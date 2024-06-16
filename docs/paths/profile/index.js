import getProfileInfo from './getProfileInfo.js';

export default {
  '/profile/{id}': {
    ...getProfileInfo,
  },
};