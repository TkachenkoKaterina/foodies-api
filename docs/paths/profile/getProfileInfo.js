export default {
    get: {
      tags: ['profile'],
      summary: 'Get user profile',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
            name: '_id',
            type: 'string',
            description: 'User _id or Current User _id',
            in: 'path',
            required: true,
        },
      ],
      responses: {
        200: {
          description: 'User profile info fetched successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Profile',
              },
              example: {
                _id: '6g6g8g8e7b8g8g8g8g8g8g8g',
                name: 'Name',
                email: 'email@mail.com',
                avatar: null,
                recipes: 888,
                followers: 999,
                favorites: 555,
                following: 444,
              },
            },
          },
        },
        400: {
            description: "Bad Request",
        },
        404: {
            description: "Not Found",
        },
        500: {
          description: 'Server error',
        },
      },
    },
};
  