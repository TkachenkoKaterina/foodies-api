const { CLIENT_URL } = process.env;

export default {
  servers: [
    {
      url: `${CLIENT_URL}/api`,
    },
  ],
};
