const formDataToJSON = (req, res, next) => {
  const { body, file } = req;

  req.body = {
    ...body,
    ingredients: body.ingredients ? JSON.parse(body.ingredients) : [],
    time: parseInt(body.time, 10),
  };

  next();
};

export default formDataToJSON;
