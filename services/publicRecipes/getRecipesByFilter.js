import Recipe from '../../models/Recipe.js';

export const getRecipesByFilter = (
  category,
  ingredient,
  area,
  limit = 12,
  curPage = 1
) => {
  //   const { filter = {}, perPage = 12, curPage = 1 } = search;
  try {
    return Recipe.aggregate([
      {
        $match: { category: category },
        // $and: [
        //   {
        //     $or: [{ ingredients =  }, { area }],
        //   },
        //   { category },
        // ],
      }, ////
      { $skip: 12 },
      { $limit: 12 },
      {
        $project: {
          _id: 1,
          title: 1,
          owner: 1,
          description: 1,
          thumb: 1,
          ingredients: 1,
          area: 1,
        },
      },
    ]);
    // return Recipe.find(filter, fields, settings);
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};

// }
// export const listAllRecipesInCategoryService = async (
//   category,
//   limit = 12,
//   curPage = 1
// ) => {
//   const result = await Recipe.aggregate([
//     {
//       $match: { category },
// $and: [
//   {
//     $or: [{ ingredients =  }, { area }],
//   },
//   { category },
// ],
//     }, ////
//     { $skip: limit * curPage },
//     { $limit: limit },
//     {
//       $project: {
//         _id: 1,
//         title: 1,
//         owner: 1,
//         description: 1,
//         thumb: 1,
//         ingredients: 1,
//         area: 1,
//       },
//     },
//   ]);

export default getRecipesByFilter;
