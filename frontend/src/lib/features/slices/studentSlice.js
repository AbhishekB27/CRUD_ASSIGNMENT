import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../actions/studentAction";
import toast from "react-hot-toast";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("Failed to fetch students");
      })

      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Student created successfully");
        state.students = action.payload;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("Failed to create student");
      })

      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.students.findIndex(
          (s) => s._id === action.payload._id
        );
        if (idx !== -1) state.students[idx] = action.payload;
        state.loading = false;
        toast.success("Student updated successfully");
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("Failed to update student");
      })

      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s._id !== action.payload);
        toast.success("Student deleted successfully");
        state.loading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error("Failed to delete student");
      });
  },
});

export default studentSlice.reducer;
