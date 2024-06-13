import getFavRecipes from '../recipe/getFavRecipes.js';
import addToFavorites from '../recipe/addToFavorites.js';
import removeFromFavorites from '../recipe/removeFromFavorites.js';

export default {
  '/recipes/favorites/all': {
    ...getFavRecipes,
  },
  '/recipes/favorites/{id}': {
    ...addToFavorites,
    ...removeFromFavorites,
  },
};
