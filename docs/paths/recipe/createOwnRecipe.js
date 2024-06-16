export default {
  post: {
    tags: ['recipes'],
    summary: 'Create own recipe',
    security: [{ bearerAuth: [] }],
    parammetrers: [],
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            required: [
              'title',
              'category',
              'area',
              'instructions',
              'description',
              'ingredients',
              'time',
              'thumbRecipeImages',
            ],
            properties: {
              $ref: '#/components/schemas/Recipe',
            },
            example: {
              title: 'The best recipe of the world',
              category: 'Beef',
              owner: '66687645a4d51ce0f23d36be',
              area: 'British',
              instructions: 'Boil 3 minutes',
              description: 'You must do it👆',
              thumbRecipeImages: 'Avatarka.jpg',
              time: 10,
              ingredients: [
                {
                  id: '640c2dd963a319ea671e37aa',
                  measure: '1 cup',
                },
              ],
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Recipe created successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                },
                category: {
                  type: 'string',
                },
                owner: {
                  type: 'string',
                },
                area: {
                  type: 'string',
                },
                instructions: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                thumb: {
                  type: 'string',
                },
                time: {
                  type: 'integer',
                },
                ingredients: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      measure: {
                        type: 'string',
                      },
                      _id: {
                        type: 'string',
                      },
                    },
                  },
                },
                likes: {
                  type: 'integer',
                },
                _id: {
                  type: 'string',
                },
                createdAt: {
                  type: 'string',
                  format: 'date-time',
                },
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              example: {
                title: 'The best recipe of the world',
                category: 'Beef',
                owner: '66687645a4d51ce0f23d36be',
                area: 'British',
                instructions: 'Boil 3 minutes',
                description: 'You must do it👆',
                thumb: 'thumbRecipeImages/1718554959605_344997201_Avatarka.png',
                time: 10,
                ingredients: [
                  {
                    id: '640c2dd963a319ea671e37aa',
                    measure: '1 cup',
                    _id: '666f114f69df17035b81fca7',
                  },
                ],
                likes: 0,
                _id: '666f114f69df17035b81fca6',
                createdAt: '2024-06-16T16:22:39.612Z',
                updatedAt: '2024-06-16T16:22:39.612Z',
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
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
