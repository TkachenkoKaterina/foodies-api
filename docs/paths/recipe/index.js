import getFavRecipes from '../recipe/getFavRecipes.js';
import addToFavorites from '../recipe/addToFavorites.js';
import removeFromFavorites from '../recipe/removeFromFavorites.js';
import createOwnRecipe from '../recipe/createOwnRecipe.js';

export default {
  '/recipes': {
    ...createOwnRecipe,
  },
  '/recipes/favorites/all': {
    ...getFavRecipes,
  },
  '/recipes/favorites/{id}': {
    ...addToFavorites,
    ...removeFromFavorites,
  },
};
