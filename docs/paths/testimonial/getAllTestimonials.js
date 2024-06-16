export default {
    get: {
      tags: ['testimonials'],
      summary: 'Get users testimonials',
      parameters: [
        {
            name: 'page',
            type: 'number',
            description: 'Page number of the testimonials list',
            in: 'query',
            required: false,
        },
        {
            name: 'limit',
            type: 'number',
            description: 'Limiting the number of testimonials per page',
            in: 'query',
            required: false,
        }
      ],
      responses: {
        200: {
          description: 'Users testimonials fetched successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Testimonial',
              },
              example: [
                {
                  total: 1,
                  result: [
                    {
                        _id: '6g6g8g8e7b8g8g8g8g8g8g8g',
                        owner: 'Name',
                        testimonial: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil.',
                    },
                  ],
                },
              ],
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
  