import Joi from 'joi';

const ingredientSchema = Joi.object({
  _id: Joi.string().required().messages({
    'any.required': 'Ingredient ID is required',
    'string.empty': 'Ingredient ID cannot be empty',
  }),
  measure: Joi.string().required().messages({
    'any.required': 'Measure is required',
    'string.empty': 'Measure cannot be empty',
  }),
}).unknown(false);

export const createRecipeSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title cannot be empty',
  }),
  category: Joi.string().required().messages({
    'any.required': 'Category is required',
    'string.empty': 'Category cannot be empty',
  }),
  area: Joi.string().required().messages({
    'any.required': 'Area is required',
    'string.empty': 'Area cannot be empty',
  }),
  instructions: Joi.string().required().messages({
    'any.required': 'Instructions are required',
    'string.empty': 'Instructions cannot be empty',
  }),
  description: Joi.string().required().messages({
    'any.required': 'Description is required',
    'string.empty': 'Description cannot be empty',
  }),
  ingredients: Joi.array().items(ingredientSchema).min(1).required().messages({
    'array.min': 'Ingredients must have at least one item',
    'any.required': 'Ingredients are required',
  }),
  time: Joi.number().required().messages({
    'any.required': 'Time is required',
    'number.base': 'Time must be a number',
  }),
});
