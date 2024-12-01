import React from "react";
import { FaCamera } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const UpdateProfileImg = () => {
  return (
    <div>
      {/* Cover Section */}
      <div className="relative w-full overflow-visible rounded-lg">
        {/* Background Gradient */}
        <div className="bg-gradient-to-r rounded-[10px] from-blue-900 via-blue-600 to-blue-500 h-[250px]"></div>

        {/* Edit Cover Image Button */}
        <button className="absolute flex items-center gap-2 bottom-2 right-2 bg-black bg-opacity-25 text-white px-[15px] py-[8px] rounded-[15px]">
          <FiEdit className="text-[18px]" /> Edit cover image
        </button>

        {/* Profile Camera Icon */}
        <div className="absolute -bottom-[60px] left-8 w-[120px] h-[120px] bg-gray-900 text-white rounded-full flex items-center justify-center border-[5px] border-white overflow-visible">
          <FaCamera className="text-[48px]" />
        </div>
      </div>

      {/* Role Heading */}
      <h1 className="font-[700] text-[20px] mb-4 mt-16 text-black ml-10">
        Role
      </h1>
    </div>
  );
};

export default UpdateProfileImg;
