import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../lib/features/actions/studentAction";
import { useEffect } from "react";

const CreateStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.students);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createStudent(data));
  };

  useEffect(() => {
    if (students?.status) {
      navigate("/");
    }
  }, [students]);

  return (
    <div className="grid place-items-center h-screen">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add New Student</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the information below to add a new student.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              type="text"
              id="name"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter student name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be at least 1" },
                max: { value: 120, message: "Age must be less than 120" },
              })}
              type="number"
              id="age"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter age"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
            )}
          </div>

          <div className="flex space-x-3">
            {loading ? (
              <button
                type="button"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Loading
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Student
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
