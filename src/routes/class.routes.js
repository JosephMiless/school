import { Router } from "express";
import { createClassController } from "../controllers/class.controller.js";
import {auth, teacherAuth} from "../middleware/auth.js";


export const classRouter = Router();


classRouter.post("/register", auth, teacherAuth, createClassController);