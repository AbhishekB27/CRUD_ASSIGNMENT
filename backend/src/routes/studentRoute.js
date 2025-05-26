import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/studentController.js";
const studentRouter = express.Router();

studentRouter
  .post("/students", createStudent)
  .get("/students", getAllStudents)
  .patch("/students/:id", updateStudent)
  .delete("/students/:id", deleteStudent);
export default studentRouter;
