import { aToken } from "../lib/jwt.js";
import { loginTeacherService, signUpTeacherService, updateTeacherDetailsService } from "../services/teacher.services.js";
import { BadRequestError, UnauthorizedError } from "../utils/app.errors.js";
import {
  loginTeacherSchema,
  signUpTeacherSchema,
  udateTeacherDetailsSchema,
} from "../validators/teacher.js";

export const signUpTeacherController = async (req, res, next) => {
  try {
    const { error, value } = signUpTeacherSchema.validate(req.body);

    if (error) throw new BadRequestError(error.message);

    const teacher = await signUpTeacherService(value);

    return res
      .status(201)
      .json({ message: `Teacher registered suvccesfully`, teacher });
  } catch (error) {
    next(error);
  }
};

export const loginTeacherController = async (req, res, next) => {
  try {
    const { error, value } = loginTeacherSchema.validate(req.body);

    if (error) throw new BadRequestError(error.message);

    const teacher = await loginTeacherService(value);

    const token = aToken({id: teacher.id, email: teacher.email, t_class: teacher.t_class});

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};

export const updateTeacherDetailsController = async (req, res, next) => {
  try {

    const loggedInTeacher = req.user;

    if(!loggedInTeacher) throw new UnauthorizedError(`Kindly login to access this endpoint`);

        const { error, value } = udateTeacherDetailsSchema.validate(req.body);

        if (error) throw new BadRequestError(error.message);

        await updateTeacherDetailsService(value, loggedInTeacher.id);

        return res.status(200).json({message: `Details updated successfully`});
    
  } catch (error) {
    next(error);
  }
}