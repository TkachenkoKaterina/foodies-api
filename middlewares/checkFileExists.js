import HttpError from '../helpers/HttpError.js';

const checkFileExists = (req, res, next) => {
  if (!req.file && !req.files) {
    return next(HttpError(400, 'File is required'));
  }
  next();
};

export default checkFileExists;
