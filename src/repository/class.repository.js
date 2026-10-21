import { Class } from "../db/models/class.js";


export const findClassByNameAndSection = async (class_name, section, option = {}) => {
    return Class.findOne({where: {class_name, section}}, option);
};

export const createClassRecord = async (data, option = {}) => {
    return Class.create(data, option);
};