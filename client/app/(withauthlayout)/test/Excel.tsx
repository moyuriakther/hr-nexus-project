"use client";
import React from "react";
import { useGetAllPaymentQuery } from "@/app/Redux/api/fakeApiExamples";
import ExcelExport from "./ExcelExport";

const PaymentExport = () => {
  const { data, isLoading } = useGetAllPaymentQuery({});

  const csvHeaders = [
    { label: "ID", key: "id" },
    { label: "Amount", key: "amount" },
    { label: "Salary Month", key: "salaryMonth" },

    // -[-[---[-[ you can add more headers here]]]]
  ];

  return (
    <ExcelExport
      data={data?.data || []}
      headers={csvHeaders}
      baseFileName="payments_data"
      isLoading={isLoading}
      displayField="salaryMonth"
    />
  );
};

export default PaymentExport;
