// "use client";

// import { useUpdateHolidayMutation } from "@/app/Redux/api/holidayApi";
// import HRForm from "@/app/components/Form/HRForm";
// import HRInput from "@/app/components/Form/HRInput";
// import HRModal from "@/app/components/Modal/HRModal";
// import { TAttendance, THoliday } from "@/app/types";
// import {
//   getDayMonthAndYear,
//   getTimeFromDate,
// } from "@/app/utils/getYearAndMonth";
// import { Button, Divider } from "@nextui-org/react";
// import React from "react";
// import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";
// import CustomSelect from "../../components/CustomSelect";
// import { FormValues, monthOptions } from "../../create/common";
// import { useCreateAttendanceMutation } from "@/app/Redux/api/attendanceApi";

// type TProps = {
//   modalIsOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   attendance: TAttendance;
// };

// const UpdateAttendanceModal = ({
//   modalIsOpen,
//   setIsOpen,
//   attendance,
// }: TProps) => {
//     const [updateAttendance, { isLoading }] = useCreateAttendanceMutation();

//   const defaultValues = {
//     employee: `${attendance?.employee?.firstName} ${attendance?.employee?.lastName}`,
//     date: getDayMonthAndYear(attendance?.date),
//     monthName: attendance.monthName,
//     checkIn: getTimeFromDate(attendance?.checkIn),
//     checkOut: getTimeFromDate(attendance?.checkOut),
//   };

//   const {
//     control,
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     const date = new Date(data?.day);

//     const checkInDateTime = new Date(
//       `${data?.day}T${data?.timeIn}`
//     ).toISOString();
//     const checkOutDateTime = new Date(
//       `${data?.day}T${data?.timeOut}`
//     ).toISOString();

//     const resData = {
//       employeeId: data?.employee?.value,
//       date: date.toISOString(),
//       checkIn: checkInDateTime,
//       checkOut: checkOutDateTime,
//       monthName: data?.month?.value,
//     };

//     // const res = await updateAttendance(resData).unwrap();

//     // if (res?.id) {
//     //   toast.success("Attendance created successfully!!");
//     //   router.push("/hr/attendances/attendance-list");
//     // }
//   };

//   return (
//     <HRModal
//       modalIsOpen={modalIsOpen}
//       modalTitle="Edit holiday"
//       setIsOpen={setIsOpen}
//     >
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mx-auto border rounded-lg shadow-sm bg-white"
//       >
//         <h2 className="text-xl font-semibold p-4 ms-2 text-gray-800">
//           Take attendance
//         </h2>
//         <div className="border border-t-0 mb-5"></div>
//         <div className="p-6 space-y-4">
//             {/* Employee Select */}
//             <div className="flex items-center mb-2">
//               <label
//                 htmlFor="employee"
//                 className=" w-40 text-sm font-bold text-gray-800"
//               >
//                 Employee <span className="text-red-500">*</span>
//               </label>
//               <div className="w-full max-w-sm">
//                 <Controller
//                   name="employee"
//                   control={control}
//                   rules={{ required: "Employee is required" }}
//                   render={({ field }) => (
//                     <CustomSelect
//                       id="employee"
//                       isDisabled={}
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.employee && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.employee.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Year Select */}
//             <div className="flex items-center mb-4">
//               <label
//                 htmlFor="day"
//                 className="w-40 text-sm font-bold text-gray-800"
//               >
//                 Day <span className="text-red-500">*</span>
//               </label>
//               <div className="w-full max-w-sm">
//                 <Controller
//                   name="day"
//                   control={control}
//                   rules={{ required: "Day is required" }}
//                   render={({ field }) => (
//                     <input
//                       type="date"
//                       className="border rounded p-2 w-full"
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.day && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.day.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Month Select */}
//             <div className="flex items-center mb-2">
//               <label
//                 htmlFor="month"
//                 className="w-40 text-sm font-bold text-gray-800"
//               >
//                 Month <span className="text-red-500">*</span>
//               </label>
//               <div className="w-full max-w-sm">
//                 <Controller
//                   name="month"
//                   control={control}
//                   rules={{ required: "Month is required" }}
//                   render={({ field }) => (
//                     <CustomSelect
//                       id="month"
//                       options={monthOptions}
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.month && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.month.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Time in */}
//             <div className="flex items-center mb-2">
//               <label
//                 htmlFor="timeIn"
//                 className="w-40 text-sm font-bold text-gray-800"
//               >
//                 Time in <span className="text-red-500">*</span>
//               </label>
//               <div className="w-full max-w-sm">
//                 <input
//                   type="time"
//                   id="timeIn"
//                   {...register("timeIn", { required: "Time in is required" })}
//                   className="border rounded-md w-full p-2"
//                 />
//                 {errors.timeIn && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.timeIn.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Time out */}
//             <div className="flex items-center mb-4">
//               <label
//                 htmlFor="timeOut"
//                 className="w-40 text-sm font-bold text-gray-800"
//               >
//                 Time out <span className="text-red-500">*</span>
//               </label>
//               <div className="w-full max-w-sm">
//                 <input
//                   type="time"
//                   id="timeOut"
//                   {...register("timeOut", { required: "Time out is required" })}
//                   className="border rounded-md w-full p-2"
//                 />
//                 {errors.timeOut && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.timeOut.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end max-w-sm">
//               <button
//                 type="submit"
//                 className="bg-[#198754] text-white py-2 px-4 text-sm rounded-md hover:bg-green-600"
//               >
//                 {isLoading ? "Updating...." : "Update"}
//               </button>
//             </div>
//           </div>
//       </form>
//     </HRModal>
//   );
// };

// export default UpdateAttendanceModal;
