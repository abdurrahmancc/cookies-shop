import { useRouter } from "next/router";
import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserDashboard = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <div className="w-full pt-[14px]">
        <h2 className="text-[#031424] text-[20px] leading-[30px] font-[600]">Dashboard</h2>
        <div className="flex pt-[15px] w-full">
          <div className="h-[5px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
        <div className="mt-10">
          <h6 className="text-[#031424] leading-8">
            <span className="text-[#3E3E3E]">Hello, </span>
            {""}
            <span className="font-[500] ">James_Smith</span> (
            <span className="text-[#3E3E3E]">not</span>{" "}
            <span className="font-[500]">James_Smith?</span>{" "}
            <span className="text-info cursor-pointer" onClick={() => router.push("/")}>
              Log out
            </span>
            )
          </h6>
          <p className="text-[16px] mt-2 leading-8 ">
            From your account dashboard you can view your{" "}
            <span className="text-info font-[500]">recent orders</span>, manage your{" "}
            <span
              onClick={() => router.push("/dashboard/userAddress")}
              className="text-info font-[500]"
            >
              shipping and billing addresses
            </span>
            , and{" "}
            <span
              onClick={() => router.push("/dashboard/accountDetails")}
              className="text-info font-[500]"
            >
              edit your password and account details
            </span>
            .
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
