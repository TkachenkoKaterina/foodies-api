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
          'thumb',
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
          thumb: {
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
