import { Router } from "express";
import { loginTeacherController, signUpTeacherController, updateTeacherDetailsController } from "../controllers/teacher.controller.js";
import {auth} from "../middleware/auth.js";

export const teacherRouter = Router();

teacherRouter.post("/register", signUpTeacherController);
teacherRouter.post("/login", loginTeacherController);
teacherRouter.patch("/update", auth, updateTeacherDetailsController);