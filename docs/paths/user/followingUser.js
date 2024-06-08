export default {
  get: {
    tags: ['users'],
    summary: 'Get following users',
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: 'Following users',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                following: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      user: {
                        $ref: '#/components/schemas/User',
                      },
                      recipes: {
                        type: 'array',
                        description: 'List of recipes',
                        items: {
                          $ref: '#/components/schemas/Recipe',
                        },
                      },
                    },
                    example: {
                      following: [
                        {
                          user: {
                            _id: '1',
                            name: 'John Doe',
                            email: 'user@mail.com',
                            avatar: null,
                            recipes: [
                              {
                                _id: '1',
                                title: 'Recipe 1',
                                thamb: 'http://example.com/thamb.jpg',
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
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
