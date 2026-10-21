import { Teacher } from "../db/models/teacher.js";

export const findTeacherByEmail = async (email) => {
  return await Teacher.findOne({where: {email}});
};

export const findTeacherById = async (id, option = {}) => {
  return await Teacher.findOne({where: {id}}, option);
};

export const saveTeacherDetails = async (data, option = {}) => {
  return await Teacher.create(data, option);
};

export const updateTeacherDetails = async (data, id, option = {}) => {
  return await Teacher.update(data, {
    where: {id}
  }, option)
};