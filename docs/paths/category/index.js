import getAllCategories from './getAllCategories.js';

export default {
  '/categories': {
    ...getAllCategories,
  },
};
