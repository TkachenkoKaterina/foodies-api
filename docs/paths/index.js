import user from './user/index.js';
import recipe from './recipe/index.js';
import testimonial from './testimonial/index.js';

export default {
  paths: {
    ...user,
    ...recipe,
    ...testimonial,
  },
};
