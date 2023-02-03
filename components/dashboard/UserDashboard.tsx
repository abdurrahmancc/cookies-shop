import { useRouter } from "next/router";
import React from "react";
import DashboardLayout from "./DashboardLayout";

const UserDashboard = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <div className="w-full">
        <h2 className="text-primary text-[30px] leading-[40px] font-[700]">Dashboard</h2>
        <div className="flex pt-[23px] w-full">
          <div className="h-[5px] bg-primary w-[154px]"></div>
          <div className="border-b w-full border-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="mt-8">
          <p className="text-[18px] text-[rgba(0,0,0,0.7)] mt-2 leading-[30px] ">
            From your account dashboard you can view your{" "}
            <span className="text-primary font-[500]">recent orders</span>, manage your{" "}
            <span
              onClick={() => router.push("/dashboard/userAddress")}
              className="text-primary font-[500]"
            >
              shipping and billing addresses
            </span>
            , and{" "}
            <span
              onClick={() => router.push("/dashboard/accountDetails")}
              className="text-primary font-[500]"
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
