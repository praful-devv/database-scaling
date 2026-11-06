import { Router } from "express";
import studentCotroller from "../controllers/students.controller.js";

const studentRouter = Router()

studentRouter.get("/", studentCotroller);

export default studentRouter