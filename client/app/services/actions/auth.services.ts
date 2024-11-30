/* eslint-disable @typescript-eslint/no-explicit-any */

import { authKey } from "@/app/constants";
import { instance as axiosInstance } from "@/app/helpers/axios/axiosInstance";
import { decodedToken } from "@/app/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/app/utils/localStorage";

// import {
//   getFromLocalStorage,
//   removeFromLocalStorage,
//   setToLocalStorage,
// } from "@/utils/localStorage";
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  // console.log(accessToken)
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    // console.log(decodedData);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/auth/refresh-token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
