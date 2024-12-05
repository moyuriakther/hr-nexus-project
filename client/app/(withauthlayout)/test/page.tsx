import TestRedux from "@/app/example/testRedux";
import React from "react";
import PaymentExport from "./Excel";

const TestPage = () => {
  return (
    <div>
      <TestRedux />
      <PaymentExport />
    </div>
  );
};

export default TestPage;
