"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomSelect from "../components/CustomSelect";
import BulkInsertModal from "../components/BulkInsertModal"; // Import BulkInsertModal component
import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { attendancePageHeaderData } from "../../employees/components/pageHeaderData";

const employeeOptions = [
  { value: "honorato_imogene", label: "Honorato Imogene Curry Terry" },
  { value: "maisha_lucy", label: "Maisha Lucy Zamora Gonzales" },
  { value: "amy_aphrodite", label: "Amy Aphrodite Zamora Peck" },
  { value: "jonathan_ibrahim", label: "Jonathan Ibrahim Shekh" },
  { value: "scarlet_melvin", label: "Scarlet Melvin Reese Rogers" },
];

type FormValues = {
  employee: string;
  time: string;
};

const AttendanceForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="mb-5">
        {" "}
        <PageHeader item={attendancePageHeaderData} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto border rounded-lg shadow-sm bg-white"
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Take attendance
          </h2>
          <button
            type="button"
            className="bg-[#198754] text-white py-2 px-4 text-sm rounded-md hover:bg-green-600"
            onClick={() => setIsModalOpen(true)}
          >
            + Bulk Insert
          </button>
        </div>
        <div className="border border-t-0 mb-5"></div>
        <div className="p-6 space-y-6">
          {/* Employee Select */}
          <div className="flex items-center">
            <label
              htmlFor="employee"
              className="w-32 font-medium text-gray-800"
            >
              Employee <span className="text-red-500">*</span>
            </label>
            <div className="w-full max-w-sm">
              <Controller
                name="employee"
                control={control}
                rules={{ required: "Employee is required" }}
                render={({ field }) => (
                  <CustomSelect
                    id="employee"
                    options={employeeOptions}
                    {...field}
                  />
                )}
              />
              {errors.employee && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.employee.message}
                </p>
              )}
            </div>
          </div>

          {/* Time Input */}
          <div className="flex items-center">
            <label htmlFor="time" className="w-32 font-medium text-gray-800">
              Time <span className="text-red-500">*</span>
            </label>
            <div className="w-full max-w-sm">
              <input
                type="datetime-local"
                id="time"
                {...register("time", { required: "Time is required" })}
                className="border rounded-md w-full p-2"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start max-w-sm">
            <button
              type="submit"
              className="bg-[#198754] text-white py-2 px-4 text-sm rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Modal Section */}
      {isModalOpen && (
        <BulkInsertModal modalIsOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default AttendanceForm;
