import * as authServices from '../services/authServices.js';
import HttpError from '../helpers/HttpError.js';
import emailToFilename from '../helpers/emailToFileName.js';
import ctrlWraper from '../decorators/ctrlWrapper.js';
import gravatar from 'gravatar';
import path from 'path';
import fs from 'fs/promises';
import Jimp from 'jimp';

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await authServices.findUser({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const avatar = gravatar.url(email, {
    s: 100,
    r: 'x',
    d: 'retro',
  });
  const newUser = await authServices.signup(name, email, password, avatar);
  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      avatar: avatar,
    },
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await authServices.signin(email, password);
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }
  res.json({
    token: user.token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

const logout = async (req, res) => {
  const user = await authServices.findUserById(req.user._id.toString());
  if (user.token != req.user.token) {
    throw HttpError(401, 'Unauthorized');
  }
  await authServices.logout(user);
  res.status(204).json({});
};

const getCurrent = async (req, res) => {
  const user = await authServices.findUserById(req.user._id.toString());
  if (user.token != req.user.token) {
    throw HttpError(401, 'Unauthorized');
  }
  res.json({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  });
};

const updateAvatar = async (req, res, next) => {
  const { _id: owner } = req.user;
  const user = await authServices.findUserById(owner);
  if (user.token != req.user.token) {
    throw HttpError(401, 'Not authorized');
  }

  if (!req.file) {
    next(HttpError(400, 'No file received'));
  } else {
    const avatarsPath = path.resolve('public', 'avatars');
    const { path: oldPath, filename } = req.file;
    const extension = path.extname(filename);
    const newFileName = emailToFilename(user.email) + extension;
    const newPath = path.join(avatarsPath, newFileName);

    Jimp.read(oldPath)
      .then(image => {
        image.resize(250, 250);
        image.write(newPath);
      })
      .catch(err => {
        throw HttpError(500);
      });

    await fs.unlink(oldPath);

    const avatar = path.join('avatars', newFileName);
    user.avatar = avatar;
    await user.save();

    res.json({
      avatar: user.avatar,
    });
  }
};

export default {
  signup: ctrlWraper(signup),
  signin: ctrlWraper(signin),
  logout: ctrlWraper(logout),
  getCurrent: ctrlWraper(getCurrent),
  updateAvatar: ctrlWraper(updateAvatar),
};
