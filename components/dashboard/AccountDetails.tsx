import React from "react";
import DashboardLayout from "./DashboardLayout";

const AccountDetails = () => {
  return (
    <DashboardLayout>
      <div className="w-full pt-[14px]">
        <h2 className="text-[#031424] text-[20px] leading-[30px] font-[600]">Account details</h2>
        <div className="flex pt-[15px] w-full">
          <div className="h-[5px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
        <div className="mt-10">
          <div>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px] focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px]  focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    James_Smith
                  </label>
                  <input
                    type="text"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px]  focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    Email address*
                  </label>
                  <input
                    type="text"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px]  focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
              </div>
              <button className="w-[84px] mt-[30px] h-[48px] bg-primary font-[500] leading-[32px] md:text-[16px] text-sm text-[#031424] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate">
                Save
              </button>
            </form>
          </div>
          <div className="mt-[50px]">
            <h3 className="text-[20px] pb-5 leading-[32px] font-[500] text-[#031424]">
              Change your password
            </h3>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    Current password
                  </label>
                  <input
                    type="password"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px]  focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    New password
                  </label>
                  <input
                    type="password"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px] focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label px-0 pt-0 text-[#424242] text-sm md:text-[16px] leading-6">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    className="input input-bordered text-[16px] placeholder:text-[#424242] h-[54px] focus:outline-none rounded-none border-[#D9D9D9] bg-white w-full "
                  />
                </div>
              </div>
              <button className="w-[84px] mt-[30px] h-[48px] bg-primary font-[500] leading-[32px] text-[#031424] md:text-[16px] text-sm bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountDetails;
