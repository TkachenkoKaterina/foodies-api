import User from '../models/User.js';
import bcrypt from 'bcrypt';
import HttpError from '../helpers/HttpError.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const findUser = async filter => {
  const result = await User.findOne(filter);
  return result;
};

export const findUserById = async id => {
  const result = await User.findById(id);
  return result;
};

export const signup = async (name, email, pass, avatar) => {
  const password = await bcrypt.hash(pass, 10);

  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  const { JWT_SECRET } = process.env;
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
  user.token = token;
  await user.save();

  return user;
};

export const signin = async (email, pass) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const isValid = await bcrypt.compare(pass, user.password);
  if (!isValid) {
    throw HttpError(401, 'Email or password is wrong');
  }

  if (user) {
    const { JWT_SECRET } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
    user.token = token;
    await user.save();
    return user;
  }

  return user;
};

export const logout = async user => {
  user.token = null;
  await user.save();
  return user;
};
