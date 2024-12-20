/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/app/Redux/api/userApi";
import { uploadImage } from "@/app/utils/UploadImage";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { toast } from "sonner";

const UpdateProfileImg = () => {
  const { data: myProfile } = useGetMyProfileQuery("");
  const [updateProfile, { isLoading }] = useUpdateMyProfileMutation();

  const inputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    if (file) {
      const photo = await uploadImage(file);

      const resData = {
        photo: photo,
      };

      const res = await updateProfile(resData).unwrap();

      if (res?.id) {
        toast.success("Profile photo updated successfully!!");
      }
    }
  };

  const handleUpdateCoverPhoto = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]; // Access the selected file
    if (file) {
      console.log("Selected file:", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("File preview URL:", reader.result);
      };
      reader.readAsDataURL(file);

      const uploadedImage = await uploadImage(file);

      const resData = {
        coverPhoto: uploadedImage,
      };

      const res = await updateProfile(resData).unwrap();

      if (res?.id) {
        toast.success("Cover photo updated successfully!");
      }
    }
  };

  return (
    <div>
      <div className="relative w-full overflow-visible rounded-lg">
        <div className="rounded-[10px] h-[250px]">
          <Image
            src={
              myProfile?.coverPhoto
                ? myProfile?.coverPhoto
                : "https://i.ibb.co.com/djfNFB9/technology-background-connection-abstract-blue-600nw-1652094658.webp"
            }
            alt="cover"
            className="rounded-[10px] h-[250px] w-full"
            width={120}
            height={120}
          />
        </div>

        <button
          type="button"
          disabled={isLoading}
          onClick={handleButtonClick}
          className="absolute flex items-center gap-2 bottom-2 right-2 bg-black bg-opacity-25 text-white px-[15px] py-[8px] rounded-[15px]"
        >
          <FiEdit className="text-[28px]" />
          <span>Edit cover image</span>
        </button>

        <input
          ref={inputRef}
          type="file"
          name="coverPhoto"
          onChange={handleUpdateCoverPhoto}
          className="hidden"
        />

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -bottom-[60px] left-8 w-[120px] h-[120px] bg-gray-900 text-white rounded-full flex items-center justify-center border-[5px] border-white overflow-visible">
            <Image
              src={
                myProfile?.photo
                  ? myProfile?.photo
                  : "https://i.ibb.co.com/nnTfqMb/download-7.jpg"
              }
              alt="myProfile"
              className="w-full h-full object-cover rounded-full"
              width={120}
              height={120}
            />
          </div>

          {isHovered && (
            <div className="absolute left-[68px] -bottom-[28px]">
              <FaCamera
                className="text-[48px] cursor-pointer text-white"
                onClick={() => document.getElementById("file-input")?.click()}
              />
            </div>
          )}

          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      <h1 className="font-[700] text-[20px] mb-4 mt-16 text-black ml-10">
        {myProfile?.role}
      </h1>
    </div>
  );
};

export default UpdateProfileImg;
