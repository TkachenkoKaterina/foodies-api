import Category from "../models/Category.js";

export const getAll = () => Category.find();