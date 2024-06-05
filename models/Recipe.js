import { Schema, model } from 'mongoose';
import { handleSaveError } from './hooks.js';

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for recipe'],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: 'areas',
    },
    instructions: {
      type: String,
      required: [true, 'Set instructions for recipe'],
    },
    description: {
      type: String,
      required: [true, 'Set description for recipe'],
    },
    thumb: {
      type: String,
      required: [true, 'Set image for recipe'],
    },
    time: {
      type: Number,
      required: [true, 'Set cooking time for recipe'],
    },
    ingredients: {
      type: Schema.Types.ObjectId,
      ref: 'ingredients',
    },

    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

recipesSchema.post('save', handleSaveError);
const Recipe = model('Recipe', recipesSchema);

export default Recipe;
