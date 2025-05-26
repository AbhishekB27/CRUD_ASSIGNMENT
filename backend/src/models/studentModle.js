import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be at least 1"],
  },
});
const Student = mongoose.model("Student", studentSchema, "Student");
export default Student;
