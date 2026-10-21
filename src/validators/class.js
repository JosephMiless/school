import Joi from "joi";


export const createClasssSchema = Joi.object({
    class_name: Joi.string().required(),
    section: Joi.string().required()
}).strict();