import { Teacher } from "../db/models/teacher.js";

export const findTeacherByEmail = async (email) => {
  return await Teacher.findOne({where: {email}});
};

export const findTeacherById = async (id) => {
  return await Teacher.findOne({where: {id}});
};

export const saveTeacherDetails = async (data) => {
  return await Teacher.create(data);
};

export const updateTeacherDetails = async (data, id) => {
  return await Teacher.update(data, {
    where: {id}
  })
};