export default {
  get: {
    tags: ['ingredients'],
    summary: 'Get list of ingredients',
    responses: {
      200: {
        description: 'List of ingredients fetched successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '640c2dd963a319ea671e383b',
                    description: 'Unique identifier of the ingredient',
                  },
                  name: {
                    type: 'string',
                    example: 'Ackee',
                    description: 'Name of the ingredient',
                  },
                  desc: {
                    type: 'string',
                    example: 'A fruit that is native to West Africa...',
                    description: 'Description of the ingredient',
                  },
                  img: {
                    type: 'string',
                    format: 'uri',
                    example: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
                    description: 'URL of the image for the ingredient',
                  },
                },
              },
            },
            example: [
              {
                _id: '640c2dd963a319ea671e383b',
                name: 'Ackee',
                desc: 'A fruit that is native to West Africa...',
                img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
              },
              {
                _id: '640c2dd963a319ea671e365e',
                name: 'Pork',
                desc: 'Pork is the culinary name for the flesh of a domestic pig...',
                img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365e.png',
              },
              {
                _id: '640c2dd963a319ea671e3804',
                name: 'Smoked Haddock',
                desc: 'Haddock that has been smoked over wood chips...',
                img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3804.png',
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