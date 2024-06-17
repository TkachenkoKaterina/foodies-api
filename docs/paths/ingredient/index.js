import getAllIngredients from './getAllIngredients.js';

export default {
  '/ingredients': {
    ...getAllIngredients,
  },
};

