import {
  findTeacherByEmail,
  findTeacherById,
  saveTeacherDetails,
  updateTeacherDetails,
} from "../repository/teacher.repository.js";
import { BadRequestError, NotFoundError } from "../utils/app.errors.js";
import { hashPassword, comparePassword } from "../utils/encrypt.js";
import {
  findUserAccountByEmail,
  saveUserAccount,
} from "../repository/user.accounts.repository.js";
import { sequelize } from "../lib/db.js";

export const signUpTeacherService = async (data) => {
  return sequelize.transaction(async (t) => {
    const teacherExists = await findUserAccountByEmail(data.email, {
      transaction: t,
    });

    if (teacherExists) throw new BadRequestError(`Account already exists`);

    data.password = await hashPassword(data.password);

    const userAccountData = {
      email: data.email,
      password_hash: data.password,
      role: "TEACHER",
      account_status: "ACTIVE",
    };

    const userAccount = await saveUserAccount(userAccountData, {
      transaction: t,
    });

    const teacherData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      employment_date: data.employment_date,
      employment_status: "ACTIVE",
      account_id: userAccount.id,
    };

    const teacher = await saveTeacherDetails(teacherData, { transaction: t });

    return teacher;
  });
};

export const loginTeacherService = async (data) => {
  return sequelize.transaction(async (t) => {
    const teacher = await findUserAccountByEmail(data.email, {
      transaction: t,
    });
    if (!teacher) throw new NotFoundError(`Account not found`);

    const isMatch = await comparePassword(data.password, teacher.password_hash);
    if (!isMatch) throw new BadRequestError(`Invalid credentials`);

    return teacher;
  });
};

export const updateTeacherDetailsService = async (data, id) => {
  return sequelize.transaction(async (t) => {
    const teacher = await findTeacherById(id, {transaction: t});
    if (!teacher) throw new NotFoundError(`Account not found`);

    const updatedDetails = await updateTeacherDetails(data, id, {transaction: t});

    return updatedDetails;
  });
};
