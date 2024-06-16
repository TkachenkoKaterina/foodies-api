export default {
  delete: {
    tags: ['recipes'],
    summary: 'Remove recipe from favorites',
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of recipe to remove from favorites',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Recipe removed from favorites successfully',
      },
      400: {
        description: 'Bad Request - Recipe not in favorites',
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
