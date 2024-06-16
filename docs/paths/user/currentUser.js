export default {
  get: {
    tags: ['users'],
    summary: 'Get current user',
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: 'Current user information',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user: {
                  $ref: '#/components/schemas/User',
                },
              },
              example: {
                user: {
                  name: 'Tomy',
                  email: 'tomy5@gmail.com',
                  avatar: null,
                  following: [],
                },
              },
            },
          },
        },
      },
      401: {
        description: 'Unauthorized',
      },
    },
  },
};
