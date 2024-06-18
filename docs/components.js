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
      Popular: {
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
        example: [
          {
            _id: '2',
            title: 'Recipe 2',
            description: 'Delicious main course recipe...',
            thumb: 'http://example.com/thumb.jpg',
          },
        ],
      },
      Profile: {
        type: 'object',
        require: ['_id', 'name', 'email', 'avatar', 'recipes', 'followers'],
        properties: {
          _id: {
            type: 'string',
            description: 'User _id or Current User _id',
          },
          name: {
            type: 'string',
            description: 'User name or Current User name',
          },
          email: {
            type: 'string',
            description: 'User email or Current User email',
          },
          avatar: {
            type: 'string',
            description: 'User avatar or Current User avatar or null,',
            default: null,
          },
          recipes: {
            type: 'number',
            description: 'User recipes or Current User recipes',
          },
          followers: {
            type: 'number',
            description: 'User followers or Current User followers',
          },
          favorites: {
            type: 'number',
            description: 'Current User favorites',
          },
          following: {
            type: 'number',
            description: 'Current User following',
          },
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
      Category: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Backend-generated unique identifier',
          },
          name: {
            type: 'string',
            description: 'Category name',
          },
        },
        example: {
          result: {
            _id: '6669cfeccc45e7b75b194ab8',
            name: 'Beef',
          },
        },
      },
      Area: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Backend-generated unique indentifier',
          },
          name: {
            type: 'string',
            description: 'Area recipe',
          },
        },
        example: {
          result: {
            _id: '6462a6f04c3d0ddd28897f9b',
            name: 'Ukrainian',
          },
        },
      },
      Ingredient: {
        type: 'object',
        properties: {
          _id: {
            tipe: 'string',
            description: 'Backend-generated unique identifier',
          },
          name: {
            type: 'string',
            description: 'ingredient name',
          },
          desc: {
            type: 'string',
            description: 'ingredient description',
          },
          img: {
            type: 'string',
            format: 'uri',
            description: 'ingredient image',
          },
        },
        example: {
          result: {
            _id: '640c2dd963a319ea671e383b',
            name: 'Ackee',
            desc: 'A fruit that is native to West Africa, but is also grown in the Caribbean, and is often used in traditional Jamaican dishes such as ackee and saltfish.',
            img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
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
