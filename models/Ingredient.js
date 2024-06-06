import { Schema, model } from 'mongoose';

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    desc: {
      type: String,
      required: [true, 'Description  is required'],
    },
    img: {
      type: String,
      required: [true, 'img is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredient = model('ingredient', ingredientSchema);

export default Ingredient;
