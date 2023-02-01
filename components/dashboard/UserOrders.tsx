import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserOrders = () => {
  return (
    <DashboardLayout>
      <div className="w-full pt-[14px]">
        <h2 className="text-[#031424] text-[20px] leading-[30px] font-[600]">Orders</h2>
        <div className="flex pt-[15px] w-full">
          <div className="h-[5px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
        <div className="mt-10 flex items-center gap-[14px]">
          <button className="w-[179px] h-[52px] bg-primary font-[500] leading-[32px] text-[#031424] md:text-[16px] text-sm bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate">
            Browse Products
          </button>
          <span className="text-[#031424] leading-8 text-[16px] ">No order has been made yet.</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserOrders;
