import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdEdit } from "react-icons/md";
import user from "../../assets/user-img/user.png";

type MenuItems = {
  id: number;
  label: string;
  value: string;
};

const menuItems: MenuItems[] = [
  { id: 1, label: "Dashboard", value: "/dashboard/userDashboard" },
  { id: 2, label: "Orders", value: "/dashboard/order" },
  { id: 3, label: "Downloads", value: "/dashboard/download" },
  { id: 4, label: "Addresses", value: "/dashboard/userAddress" },
  { id: 5, label: "Account details", value: "/dashboard/accountDetails" },
  { id: 6, label: "Logout", value: "/" },
];

const DashboardSidebar = () => {
  const { pathname } = useRouter();
  return (
    <div className="lg:w-[305px] lg:min-w-[305px] sm:w-[250px] min-w-[250px] h-[747px] bg-[#F2F4F8] rounded-[12px]">
      <div className="pt-[25px] pb-[16px] border-b border-[#D1D1D1]">
        <div className="relative w-[104px] h-[104px] mx-auto">
          <div className="w-[20px] bottom-2 right-1  absolute border-[2px] border-[#ffffff] h-[20px] bg-primary rounded-full flex items-center justify-center">
            <MdEdit className="text-[8px] text-[#031424]" />
          </div>
          <figure>
            <Image src={user} width={104} className={"mx-auto"} height={104} alt="user" />
          </figure>
        </div>
        <h5 className="text-[20px] text-center mt-[9px] leading-[35px] text-[#031424]">
          James_Smith
        </h5>
      </div>
      <div className="px-5 py-7">
        <ul className="flex flex-col">
          {menuItems.map((item) => (
            <li
              key={item?.id}
              className={`transition-all duration-150 ease-in-out text-lg lg:text-[20px] leading-8 pl-6 ${
                pathname == item?.value
                  ? "bg-info text-[#ffffff]"
                  : "hover:text-[#ffffff] hover:bg-info text-[#031424]"
              }`}
            >
              <Link href={`${item?.value}`} className="block py-[10px]">
                {" "}
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
