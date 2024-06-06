import express from 'express';
import ctrlUser from '../controllers/authControllers.js';
import userController from '../controllers/user/index.js';
import isEmptyBody from '../middlewares/isEmptyBody.js';
import validateBody from '../decorators/validateBody.js';
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';

const authRouter = express.Router();

import { authSignupSchema, authSigninSchema } from '../schemas/authSchemas.js';

authRouter.post(
  '/signup',
  isEmptyBody,
  validateBody(authSignupSchema),
  ctrlUser.signup
);

authRouter.post(
  '/signin',
  isEmptyBody,
  validateBody(authSigninSchema),
  ctrlUser.signin
);

authRouter.get('/current', authenticate, ctrlUser.getCurrent);

authRouter.post('/logout', authenticate, ctrlUser.logout);

authRouter.patch(
  '/avatars',
  upload.single('avatar'),
  authenticate,
  ctrlUser.updateAvatar
);

authRouter.get('/profile/:id', authenticate, ctrlUser.getProfileInfo);

authRouter.post('/follow/:id', authenticate, userController.followUser);

authRouter.delete('/follow/:id', authenticate, userController.unfollowUser);

authRouter.get('/followers/:id', authenticate, userController.getFollowers);

authRouter.get('/following', authenticate, userController.getFollowing);

export default authRouter;
