export default {
  get: {
    tags: ['areas'],
    summary: 'Get list of culinary areas',
    responses: {
      200: {
        description: 'List of culinary areas fetched successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '6462a6f04c3d0ddd28897f9b',
                    description: 'Unique identifier of the culinary area',
                  },
                  name: {
                    type: 'string',
                    example: 'Ukrainian',
                    description: 'Name of the culinary area',
                  },
                },
              },
            },
            example: [
              {
                _id: '6462a6f04c3d0ddd28897f9b',
                name: 'Ukrainian',
              },
              {
                _id: '6462a6f04c3d0ddd28897f9c',
                name: 'Italian',
              },
              {
                _id: '6462a6f04c3d0ddd28897fa2',
                name: 'Japanese',
              },
              {
                _id: '6462a6f04c3d0ddd28897f9f',
                name: 'Thai',
              },
            ],
          },
        },
      },
      400: {
        description: 'Bad Request',
      },
      404: {
        description: 'Not Found',
      },
      500: {
        description: 'Server Error',
      },
    },
  },
};