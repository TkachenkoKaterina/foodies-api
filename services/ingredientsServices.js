import Ingredient from "../models/Ingredient.js";

export const getAll = () => Ingredient.find();
