import Category from "../models/Category.js";

export const getAll = (search = {}) => {
    const { filter = {}, fields = '', settings = {} } = search;
    return Category.find(filter, fields, settings);
};

export const countCategories = () => Category.countDocuments();