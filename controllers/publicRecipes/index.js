import ctrlWrapper from '../../decorators/ctrlWrapper.js';
import allRecipesInCategory from './allRecipesInCategory.js';
import receptById from './receptById.js';

export default {
  allRecipesInCategory: ctrlWrapper(allRecipesInCategory),
  receptById: ctrlWrapper(receptById),
};
