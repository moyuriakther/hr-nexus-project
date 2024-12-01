"use client";

import React from "react";
import { FaCamera } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import ProfileTab from "./components/ProfileTab";
import UpdateProfileImg from "./components/UpdateProfileImg";

const ProfilePage = () => {
  return (
    <div className="min-h-[89vh] bg-white p-[24px] rounded-[12px]">
      <UpdateProfileImg />

      {/* Profile Tabs */}
      <div>
        <ProfileTab />
      </div>
    </div>
  );
};

export default ProfilePage;
