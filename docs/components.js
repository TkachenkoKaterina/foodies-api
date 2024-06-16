const { APP_ENV } = process.env;

export default {
  components: {
    schemas: {
      User: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          _id: {
            type: 'string',
            description: 'Backend-generated unique identifier',
          },
          name: {
            type: 'string',
            description: 'Name is required',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email is required',
          },
          password: {
            type: 'string',
            description: 'Password is required',
          },
          avatar: {
            type: 'string',
            default: null,
          },
          followers: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          following: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          favorites: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        example: {
          _id: '5f5f7f7e6b7f7f7f7f7f7f7f',
          name: 'John Doe',
          email: 'user@gmail.com',
          password: 'password',
          avatar: null,
          followers: [],
          following: [],
          favorites: [],
        },
      },
      Recipe: {
        type: 'object',
        required: [
          'title',
          'category',
          'owner',
          'area',
          'instructions',
          'description',
          'thumbRecipeImages',
          'time',
        ],
        properties: {
          _id: {
            type: 'string',
            description: 'Backend-generated unique identifier',
          },
          title: {
            type: 'string',
            description: 'Title is required',
          },
          category: {
            type: 'string',
            description: 'Category ID is required',
          },
          owner: {
            type: 'string',
            description: 'Owner ID is required',
          },
          area: {
            type: 'string',
            description: 'Area ID is required',
          },
          instructions: {
            type: 'string',
            description: 'Instructions are required',
          },
          description: {
            type: 'string',
            description: 'Description is required',
          },
          thumbRecipeImages: {
            type: 'string',
            description: 'Image is required',
          },
          time: {
            type: 'number',
            description: 'Cooking time is required',
          },
          ingredients: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  description: 'Ingredient ID is required',
                },
                measure: {
                  type: 'string',
                  description: 'Measure is required',
                },
              },
            },
          },
        },
      },
      Testimonial: {
        type: 'object',
        required: ['total', 'result'],
        properties: {
          total: {
            type: 'number',
            description: 'Total testimonials in database',
          },
          result: {
            type: 'array',
            description: 'Array of objects testimonials',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  description: 'Backend-generated unique identifier',
                },
                owner: {
                  type: 'string',
                  description: 'Owner name is required',
                },
                testimonial: {
                  type: 'string',
                  description: 'Write testimonial text',
                },
              },
            },
          },
        },
        example: {
          total: 12,
          result: {
            _id: '6g6g8g8e7b8g8g8g8g8g8g8g',
            owner: 'Name',
            testimonial:
              'Thank you for the wonderful recipe for feta pasta with tomatoes and basil.',
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        name: 'authorization',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
    },
  },
};
