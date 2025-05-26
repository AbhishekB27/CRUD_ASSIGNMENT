import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../lib/features/actions/studentAction";

const StudentTable = () => {
  const { students, loading } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleEdit = (student) => {
    setEditingId(student._id);
    setValue("name", student.name);
    setValue("email", student.email);
    setValue("age", student.age);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset();
  };

  const handleUpdate = (data) => {
    dispatch(updateStudent({ id: editingId, updatedData: data }));
    setEditingId(null);
    reset();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 container mx-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all students including their name, email, and age.
          </p>
        </div>
        <button
          onClick={() => navigate("/student/add")}
          className="bg-blue-600 font-medium hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
        >
          Add Student
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Array.isArray(students) &&
                      students?.map((student) => (
                        <tr
                          key={student._id}
                          className={
                            editingId === student._id ? "bg-blue-50" : ""
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingId === student._id ? (
                              <div>
                                <input
                                  {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                      value: 2,
                                      message:
                                        "Name must be at least 2 characters",
                                    },
                                  })}
                                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.name
                                      ? "border-red-500"
                                      : "border-blue-300"
                                  }`}
                                  defaultValue={student.name}
                                />
                                {errors.name && (
                                  <p className="mt-1 text-sm text-red-600">
                                    {errors.name.message}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="text-sm font-medium text-gray-900">
                                {student.name}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingId === student._id ? (
                              <div>
                                <input
                                  {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                  type="email"
                                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.email
                                      ? "border-red-500"
                                      : "border-blue-300"
                                  }`}
                                  defaultValue={student.email}
                                />
                                {errors.email && (
                                  <p className="mt-1 text-sm text-red-600">
                                    {errors.email.message}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="text-sm text-gray-900">
                                {student.email}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {editingId === student._id ? (
                              <div>
                                <input
                                  {...register("age", {
                                    required: "Age is required",
                                    min: {
                                      value: 1,
                                      message: "Age must be at least 1",
                                    },
                                    max: {
                                      value: 120,
                                      message: "Age must be less than 120",
                                    },
                                  })}
                                  type="number"
                                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.age
                                      ? "border-red-500"
                                      : "border-blue-300"
                                  }`}
                                  defaultValue={student.age}
                                />
                                {errors.age && (
                                  <p className="mt-1 text-sm text-red-600">
                                    {errors.age.message}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="text-sm text-gray-900">
                                {student.age}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {editingId === student._id ? (
                              <div className="flex space-x-2">
                                <button
                                  onClick={handleSubmit(handleUpdate)}
                                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                                >
                                  Update
                                </button>
                                <button
                                  onClick={handleCancelEdit}
                                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleEdit(student)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(student._id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
