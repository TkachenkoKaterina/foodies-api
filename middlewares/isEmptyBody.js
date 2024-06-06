import HttpError from '../helpers/HttpError.js';

const isEmptyBody = (req, res, next) => {
  const bodyLength = Object.keys(req.body).length;
  const fileLength = req.file ? 1 : 0;

  if (!bodyLength && !fileLength) {
    return next(HttpError(400, 'Body must have at least one field or file'));
  }
  next();
};

export default isEmptyBody;
