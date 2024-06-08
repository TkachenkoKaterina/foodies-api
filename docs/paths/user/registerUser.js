export default {
  post: {
    tags: ['users'],
    summary: 'Register a new user',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
              $ref: '#/components/schemas/User',
            },
            example: {
              name: 'John Doe',
              email: 'user@gmail.com',
              password: 'password',
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'User has been created',
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
                  name: 'John Doe',
                  email: 'user@mail.com',
                  avatar: null,
                },
              },
            },
          },
        },
        400: {
          description: 'User creation error',
        },
        409: {
          description: 'Email is already being used',
        },
        500: {
          description: 'Server error',
        },
      },
    },
  },
};
