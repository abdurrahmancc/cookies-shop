import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserAddress = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <h2 className="text-primary text-[30px] leading-[40px] font-[700]">Address Info</h2>
        <div className="flex pt-[23px] w-full">
          <div className="h-[5px] bg-primary w-[154px]"></div>
          <div className="border-b w-full border-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="mt-[57px]">
          <div className="grid grid-cols-2 gap-7 gap-x-[74px] mt-5">
            <div>
              <label className="text-[24px] w-full block border-b-2 border-b-[rgba(0,0,0,0.3)] pb-[18px] leading-[25px] font-[500] text-[rgba(0,0,0,0.9)]">
                Billing Address
              </label>
              <p className="text-[16px] mt-4 mb-[26px] leading-[30px] text-[rgba(0,0,0,0.7)]">
                You have not set up this type of address yet.
              </p>
              <button className="font-[500] h-[50px] w-[192px] text-[18px] leading-[20px] text-[#FFFFFF] bg-primary hover:bg-[#642f01ec]">
                Add address
              </button>
            </div>
            <div>
              <label className="text-[24px] w-full block border-b-2 border-b-[rgba(0,0,0,0.3)] pb-[18px] leading-[25px] font-[500] text-[rgba(0,0,0,0.9)]">
                Shipping Address
              </label>
              <p className="text-[16px] mt-4 mb-[26px] leading-[30px] text-[rgba(0,0,0,0.7)]">
                You have not set up this type of address yet.
              </p>
              <button className="font-[500] h-[50px] w-[192px] text-[18px] leading-[20px] text-[#FFFFFF] bg-primary hover:bg-[#642f01ec]">
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
