export default {
    post: {
      tags: ['favorites'],
      summary: 'Add recipe to favorites',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID of recipe to add to favorites',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Recipe added to favorites successfully',
        },
        400: {
          description: 'Bad Request - Recipe already in favorites',
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
  