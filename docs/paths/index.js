import user from './user/index.js';
import recipe from './recipe/index.js';
import profile from './profile/index.js';
import popular from './popular/index.js';
import testimonial from './testimonial/index.js';

export default {
  paths: {
    ...user,
    ...recipe,
    ...popular,
    ...profile,
    ...testimonial,
  },
};
