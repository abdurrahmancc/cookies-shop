import React from "react";
import DashboardLayout from "./DashboardLayout";

const AccountDetails = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <h2 className="text-primary text-[30px] leading-[40px] font-[700]">Account Info</h2>
        <div className="flex pt-[23px] w-full">
          <div className="h-[5px] bg-primary w-[154px]"></div>
          <div className="border-b w-full border-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="mt-8 border box-border p-5 pb-8 border-[rgba(0,0,0,0.5)]">
          <div>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
              </div>
              <div className="form-control mt-5 w-full">
                <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                  Gender
                </label>
                <select className="select text-[16px] h-[56px] focus:outline-none rounded-none focus:border-[#643001] font-[400] text-[rgba(0,0,0,0.5)] border-[#fff0] bg-[#F0F0F0] w-full">
                  <option disabled hidden selected>
                    Select
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <h3 className="text-[18px] pb-5 leading-[20px] font-[500] text-primary">
              Change Password
            </h3>
            <form>
              <div className="grid mb-8 grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    Current Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter current password"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    New Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter new password"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-primary text-sm md:text-[16px] leading-6">
                    Re-Type Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter conform password"
                    className="input input-bordered text-[16px] text-[rgba(0,0,0,0.5)] h-[56px] focus:outline-none rounded-none focus:border-[#643001] border-[#fff0] bg-[#F0F0F0] w-full "
                  />
                </div>
              </div>
              <button className="text-[#FFFFFF] w-[186px] h-[60px] rounded-[4px] box-border font-[500] text-[20px] bg-primary hover:bg-[#642f01ec]">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountDetails;
