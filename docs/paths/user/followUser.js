export default {
  post: {
    tags: ['users'],
    summary: 'Follow a user',
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of user to follow',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'You are now following',
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
