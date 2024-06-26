export default {
  post: {
    tags: ['users'],
    summary: 'Logout current user',
    security: [{ bearerAuth: [] }],
    responses: {
      204: {
        description: 'No content',
        content: {
          'application/json': {},
        },
      },
      401: {
        description: 'Not authorized',
        message: 'Not authorized',
      },
    },
  },
};
