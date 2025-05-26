import Student from "../models/studentModle.js";

export const createStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    // Validate input
    if (!name || !age || !email) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const newStudent = new Student({
      name,
      email,
      age,
    });
    await newStudent.save();

    res.status(201).json({
      status: true,
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    // Validate input
    if (!name || !age || !email) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age, email },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        status: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res.status(404).json({
        status: false,
        message: "No students found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({
        status: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Student deleted successfully",
      data: deletedStudent,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
