export default {
  get: {
    tags: ['recipes'],
    summary: 'Get recipes of a user',
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of users recipes to get',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Favorite recipes fetched successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Recipe',
              },
            },
            example: [
              {
                total: 3,
                result: [
                  {
                    _id: '66687f3812a046fcd08e241a',
                    title: 'The best recipe of the world',
                    category: 'Beef',
                    owner: {
                      _id: '66687645a4d51ce0f23d36be',
                      email: 'tomy@gmail.com',
                    },
                    area: 'British',
                    instructions: 'Boil 3 minutes',
                    description: 'You must do it👆',
                    thumb:
                      'thumbRecipeImages/1718124344032_404757224_Avatarka.png',
                    time: 10,
                    ingredients: [
                      {
                        id: '640c2dd963a319ea671e37aa',
                        measure: '1 cup',
                        _id: '66687f3812a046fcd08e241b',
                      },
                    ],
                    likes: 0,
                  },
                  {
                    _id: '666889c412a046fcd08e263b',
                    title: 'The best recipe of the world',
                    category: 'Beef',
                    owner: {
                      _id: '66687645a4d51ce0f23d36be',
                      email: 'tomy@gmail.com',
                    },
                    area: 'British',
                    instructions: 'Boil 3 minutes',
                    description: 'You must do it👆',
                    thumb:
                      'thumbRecipeImages/1718127044516_567787088_Avatarka.png',
                    time: 10,
                    ingredients: [
                      {
                        id: '640c2dd963a319ea671e37aa',
                        measure: '1 cup',
                        _id: '666889c412a046fcd08e263c',
                      },
                    ],
                    likes: 0,
                  },
                  {
                    _id: '666f148169df17035b81fd7e',
                    title: 'The best recipe of the world',
                    category: 'Beef',
                    owner: {
                      _id: '66687645a4d51ce0f23d36be',
                      email: 'tomy@gmail.com',
                    },
                    area: 'British',
                    instructions: 'Boil 3 minutes',
                    description: 'You must do it👆',
                    thumb:
                      'thumbRecipeImages/1718555777813_929712420_Avatarka.png',
                    time: 10,
                    ingredients: [
                      {
                        id: '640c2dd963a319ea671e37aa',
                        measure: '1 cup',
                        _id: '666f148169df17035b81fd7f',
                      },
                    ],
                    likes: 0,
                  },
                ],
              },
            ],
          },
        },
      },
      401: {
        description: 'Not authorized',
      },
      404: {
        description: 'User not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
