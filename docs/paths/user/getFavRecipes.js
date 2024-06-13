export default {
    get: {
      tags: ['favorites'],
      summary: 'Get favorite recipes of a user',
      security: [{ bearerAuth: [] }],
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
                  _id: '1',
                  title: 'Recipe 1',
                  category: 'Main Course',
                  owner: {
                    _id: '1',
                    name: 'John Doe',
                    email: 'user@mail.com',
                    avatar: null,
                  },
                  area: 'International',
                  instructions: '...',
                  description: 'Delicious main course recipe...',
                  thumb: 'http://example.com/thumb.jpg',
                  time: 45,
                  ingredients: [
                    {
                      _id: '1',
                      measure: '2 cups',
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
  