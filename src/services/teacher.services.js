import {
  findTeacherByEmail,
  findTeacherById,
  saveTeacherDetails,
  updateTeacherDetails,
} from "../repository/teacher.repository.js";
import { BadRequestError, NotFoundError } from "../utils/app.errors.js";
import {hashPassword, comparePassword} from "../utils/encrypt.js"

export const signUpTeacherService = async (data) => {
  const teacherExists = await findTeacherByEmail(data.email);

  if (teacherExists) throw new BadRequestError(`Account already exists`);

  data.password = await hashPassword(data.password);

  const teacher = await saveTeacherDetails(data);

  return teacher;
};

export const loginTeacherService = async (data) => {
  const teacher = await findTeacherByEmail(data.email);
  if (!teacher) throw new NotFoundError(`Account not found`);

  const isMatch = await comparePassword(data.password, teacher.password);
  if (!isMatch) throw new BadRequestError(`Invalid credentials`);

  return teacher;
};

export const updateTeacherDetailsService = async (data, id) => {
    const teacher = await findTeacherById(id);
    if (!teacher) throw new NotFoundError(`Account not found`);

    const updatedDetails = await updateTeacherDetails(data, id);

    return updatedDetails;

}