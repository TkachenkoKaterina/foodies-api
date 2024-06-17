export default {
  patch: {
    tags: ['users'],
    summary: 'Update user avatar',
    security: [{ bearerAuth: [] }],
    parameters: [],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              avatar: {
                type: 'string',
                format: 'binary',
                description: 'The file of the avatar',
              },
            },
            required: ['avatar'],
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Avatar updated successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                avatar: {
                  type: 'string',
                  description: 'The URL of the updated avatar',
                },
              },
            },
          },
        },
      },
      400: {
        description: 'No file received or bad request',
      },
      401: {
        description: 'Not authorized',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
