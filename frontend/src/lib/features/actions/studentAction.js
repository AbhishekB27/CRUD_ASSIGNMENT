import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// Thunks with try/catch
export const fetchStudents = createAsyncThunk(
  "student/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/students");
      return res.data?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createStudent = createAsyncThunk(
  "student/create",
  async (studentData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/students", studentData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "student/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(`/students/${id}`, updatedData);
      return res.data?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "student/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/students/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
