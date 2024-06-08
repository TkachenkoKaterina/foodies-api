import Joi from 'joi';
import { emailRegexp } from '../constants/constants.js';

export const authSignupSchema = Joi.object({
  name: Joi.string().required().trim().min(3),
  email: Joi.string().required().trim().pattern(emailRegexp),
  password: Joi.string().required().trim().min(8),
});

export const authSigninSchema = Joi.object({
  email: Joi.string().required().trim().pattern(emailRegexp),
  password: Joi.string().required().trim().min(8),
});
