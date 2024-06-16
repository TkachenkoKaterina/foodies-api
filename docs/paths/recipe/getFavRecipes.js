export default {
  get: {
    tags: ['recipes'],
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
                description: 'Delicious main course recipe...',
                thumb: 'http://example.com/thumb.jpg',
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
