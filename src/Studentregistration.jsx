import React from "react";
import { useForm } from "react-hook-form";

export const Studentregistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful!");
  };

  // watch subjects to validate at least one is checked
  const subjects = watch("subjects") || [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Student Registration
        </h1>

        {/* Username */}
        <div>
          {errors.username && (
            <p className="text-red-500 text-sm">Username is required</p>
          )}
          <label className="block mb-1">Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          {errors.email && (
            <p className="text-red-500 text-sm">Valid email is required</p>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Grade */}
        <div>
          {errors.grade && (
            <p className="text-red-500 text-sm">{errors.grade.message}</p>
          )}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade Level
          </label>
          <input
            type="number"
            placeholder="Enter grade"
            {...register("grade", {
              required: "Grade is required",
              min: { value: 1, message: "Grade must be at least 1" },
              max: { value: 12, message: "Grade cannot exceed 12" },
              valueAsNumber: true
            })}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Subjects */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Subject Interest
          </p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="math"
                {...register("subjects", {
                  validate: () =>
                    subjects.length > 0 || "Select at least one subject",
                })}
                className="accent-blue-600"
              />
              Math
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="science"
                {...register("subjects", {
                  validate: () =>
                    subjects.length > 0 || "Select at least one subject",
                })}
                className="accent-blue-600"
              />
              Science
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="english"
                {...register("subjects", {
                  validate: () =>
                    subjects.length > 0 || "Select at least one subject",
                })}
                className="accent-blue-600"
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Studentregistration;