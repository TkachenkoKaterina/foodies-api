export default {
    get: {
      tags: ['popular'],
      summary: 'Get popular recipes of a users',
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
                  _id: '2',
                  title: 'Recipe 2',
                  description: 'Delicious main course recipe...',
                  thumb: 'http://example.com/thumb.jpg',
                },
              ],
            },
          },
        },
        400: {
            description: "Bad Request",
        },
        404: {
          description: 'Not Found',
        },
        500: {
          description: 'Server error',
        },
      },
    },
  };
  