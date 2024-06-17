import getFavRecipes from '../recipe/getFavRecipes.js';
import addToFavorites from '../recipe/addToFavorites.js';
import removeFromFavorites from '../recipe/removeFromFavorites.js';
import createOwnRecipe from '../recipe/createOwnRecipe.js';
import deleteOwnRecipe from '../recipe/deleteOwnRecipe.js';
import getAllOwnRecipes from '../recipe/getAllOwnRecipes.js';

export default {
  '/recipes': {
    ...createOwnRecipe,
  },
  '/myRecipes/{id}': {
    ...deleteOwnRecipe,
  },
  '/recipes/{id}': {
    ...getAllOwnRecipes,
  },
  '/recipes/favorites/all': {
    ...getFavRecipes,
  },
  '/recipes/favorites/{id}': {
    ...addToFavorites,
    ...removeFromFavorites,
  },
};
