import Joi from 'joi';
import { emailRegexp } from '../constants/constants.js';

export const authSignupSchema = Joi.object({
  name: Joi.string().required().min(4),
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().required().min(8),
});

export const authSigninSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().required().min(8),
});
