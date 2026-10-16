import { sequelize } from "../../lib/db.js";
// import { Course } from "./course.js";
import {Teacher} from "./teacher.js";
import {Student} from "./student.js";
import {Academic_Year} from "./academic_year.js";
import { User_Account } from "./user_account.js";
import { Student_Enrollment } from "./student_enrollment.js";
import {Class} from "./class.js";
import {Homeroom_Assignment} from "./homeroom_assignment.js";

// Associations

// A teacher can teach many courses
// Teacher.hasMany(Course, {
//   foreignKey: "teacher",
//   as: "courses"
// });


// // one course is taught by one teacher
// Course.belongsTo(Teacher, {
//   foreignKey: "teacher"
// });

export const iniDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export {Teacher, Student, Academic_Year, User_Account, Student_Enrollment, Class, Homeroom_Assignment};