/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useGetAllPaymentQuery } from "../Redux/api/fakeApiExamples";
import Loader from "../components/utils/Loader";

const TestRedux = () => {
  const { data, isLoading } = useGetAllPaymentQuery({});
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="text-2xl min-h-screen flex items-center justify-center">
      {data?.data?.map((item: any) => item?.salaryMonth)}
    </div>
  );
};

export default TestRedux;
