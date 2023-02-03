import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserOrders = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <h2 className="text-primary text-[30px] leading-[40px] font-[700]">Order Info</h2>
        <div className="flex pt-[23px] w-full">
          <div className="h-[5px] bg-primary w-[154px]"></div>
          <div className="border-b w-full border-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="mt-8 flex items-center gap-5">
          <button className="w-[192px] h-[50px] bg-primary font-[500] leading-[32px] text-[#ffffff] md:text-[18px] text-sm">
            Browse Products
          </button>
          <span className="text-[rgba(0,0,0,0.7)] leading-[30px] text-[18px] ">
            No order has been made yet.
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserOrders;
