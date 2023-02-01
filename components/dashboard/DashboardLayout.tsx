import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-[57px] w-full">
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
