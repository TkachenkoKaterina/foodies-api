import user from './user/index.js';
import recipe from './recipe/index.js';

export default {
  paths: {
    ...user,
    ...recipe,
  },
};
