import Testimonial from "../models/Testimonial.js";

export const getAll = (search = {}) => {
    const { filter = {}, fields = '', settings = {} } = search;
    return Testimonial.find(filter, fields, settings).populate(
        'owner',
        'name'
    );
};
    

export const countTestimonials = () => Testimonial.countDocuments();