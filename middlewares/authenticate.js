import jwt from 'jsonwebtoken';
import HttpError from '../helpers/HttpError.js';
import { findUserById } from '../services/authServices.js';
import 'dotenv/config';

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(HttpError(401, 'Not authorized'));
  }

  if (!authorization.startsWith('Bearer ')) {
    return next(HttpError(401, 'Not authorized'));
  }

  const token = authorization.slice(7);

  if (token === '') {
    return next(HttpError(401, 'Not authorized'));
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findUserById(id);
    if (!user) {
      throw HttpError(401, 'Not authorized');
    }
    if (user.token != token) {
      throw HttpError(401, 'Not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    return next(HttpError(401, 'Not authorized'));
  }
};

export default authenticate;
