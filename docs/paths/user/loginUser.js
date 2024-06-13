export default {
  post: {
    tags: ['users'],
    summary: 'Logs user into the system',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              $ref: '#/components/schemas/User',
            },
            example: {
              email: 'user@gmail.com',
              password: 'password',
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User has been logged in',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
                user: {
                  $ref: '#/components/schemas/User',
                },
              },
              example: {
                token: '...token...',
                user: {
                  name: 'John Doe',
                  email: 'user@mail.com',
                  avatar: null,
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
