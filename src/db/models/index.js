import { sequelize } from "../../lib/db.js";
import { Course } from "./course.js";
import {Teacher} from "./teacher.js";

// Associations

// A teacher can teach many courses
Teacher.hasMany(Course, {
  foreignKey: "teacher",
  as: "courses"
});


// one course is taught by one teacher
Course.belongsTo(Teacher, {
  foreignKey: "teacher"
});

export const iniDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export {Teacher, Course};