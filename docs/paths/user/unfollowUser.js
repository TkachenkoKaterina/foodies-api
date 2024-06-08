export default {
  delete: {
    tags: ['users'],
    summary: 'Unfollow a user',
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of user to unfollow',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'You are now unfollowing',
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
