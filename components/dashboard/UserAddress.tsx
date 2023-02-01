import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserAddress = () => {
  return (
    <DashboardLayout>
      <div className="w-full pt-[14px]">
        <h2 className="text-[#031424] text-[20px] leading-[30px] font-[600]">Addresses</h2>
        <div className="flex pt-[15px] w-full">
          <div className="h-[5px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
        <div className="mt-10">
          <p className="text-[16px] leading-10">
            The following addresses will be used on the checkout page by default.
          </p>
          <div className="grid grid-cols-2 gap-7 mt-5">
            <div>
              <label className="text-[20px] w-full block border-b border-b-[#AEAEAE] pb-2 leading-[30px] font-[500] text-[#031424]">
                BILLING ADDRESS
              </label>
              <p className="text-[16px] mt-5 mb-6 leading-6 text-[#626262]">
                You have not set up this type of address yet.
              </p>
              <button className="w-[147px] h-[52px] bg-primary font-[500] leading-[32px] text-[#031424] md:text-[16px] text-sm bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate">
                Add address
              </button>
            </div>
            <div>
              <label className="text-[20px] w-full block border-b border-b-[#AEAEAE] pb-2 leading-[30px] font-[500] text-[#031424]">
                SHIPPING ADDRESS
              </label>
              <p className="text-[16px] mt-5 mb-6 leading-6 text-[#626262]">
                You have not set up this type of address yet.
              </p>
              <button className="w-[147px] h-[52px] bg-primary font-[500] leading-[32px] text-[#031424] md:text-[16px] text-sm bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate">
                Add address
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserAddress;
