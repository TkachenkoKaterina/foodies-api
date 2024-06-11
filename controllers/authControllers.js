import * as authServices from '../services/authServices.js';
import HttpError from '../helpers/HttpError.js';
import emailToFilename from '../helpers/emailToFileName.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import gravatar from 'gravatar';
import path from 'path';
import fs from 'fs/promises';
import resizeImage from '../helpers/resizeImg.js';

import { listAllRecipesService } from '../services/recipesServices.js';

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

  const newName = name.trim();
  const newPassword = password.trim();

  const newUser = await authServices.signup(
    newName,
    email,
    newPassword,
    avatar
  );

  res.status(201).json({
    user: {
      _id: newUser._id,
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
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      following: user.following,
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
  const user = req.user;

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    following: user.following,
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

    resizeImage(oldPath, newPath, 250, 250);

    await fs.unlink(oldPath);

    const avatar = path.join('avatars', newFileName);
    user.avatar = avatar;
    await user.save();

    res.json({
      avatar: user.avatar,
    });
  }
};

const getProfileInfo = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const currentUser = await authServices.findUserById(owner);
  const user = await authServices.findUserById(id);
  console.log({ id });
  if (owner.toString() === id) {
    const filter = { owner };
    console.log(filter);
    const currentUserRecipes = await listAllRecipesService({ filter });
    res.json({
      _id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      avatar: currentUser.avatar,
      recipes: currentUserRecipes.length,
      favorites: currentUser.favorites.length,
      followers: currentUser.followers.length,
      following: currentUser.following.length,
    });
  } else {
    const filter = { id };
    const userRecipes = await listAllRecipesService({ filter });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      recipes: userRecipes.length,
      avatar: user.avatar,
      followers: user.followers.length,
    });
  }
};

export default {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  updateAvatar: ctrlWrapper(updateAvatar),
  getProfileInfo: ctrlWrapper(getProfileInfo),
};
