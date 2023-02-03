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
  { id: 2, label: "Order Info", value: "/dashboard/order" },
  { id: 5, label: "Account Info", value: "/dashboard/accountDetails" },
  { id: 4, label: "Address Info", value: "/dashboard/userAddress" },
  { id: 6, label: "Logout", value: "/" },
];

const DashboardSidebar = () => {
  const { pathname } = useRouter();
  return (
    <div className="lg:w-[272px] lg:min-w-[272px] sm:w-[250px] min-w-[250px] bg-[rgba(255,161,17,0.05)] max-h-[503px] rounded-[12px]">
      <div className="pt-[26px] pb-8">
        <div
          style={{ filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))` }}
          className="relative rounded-full border border-primary w-[71px] h-[71px] mx-auto"
        >
          <div className="w-[20px] bottom-0 right-1  absolute border-[2px] border-[#ffffff] h-[20px] bg-primary rounded-full flex items-center justify-center">
            <MdEdit className="text-[8px] text-[#ffffff]" />
          </div>
          <figure>
            <Image src={user} width={104} className={"mx-auto"} height={104} alt="user" />
          </figure>
        </div>
        <h5 className="text-[18px] font-[500] text-center mt-[12px] leading-[20px] text-primary">
          Amine Tasla
        </h5>
      </div>
      <div className="">
        <ul className="flex gap-y-[18px] flex-col">
          {menuItems.map((item) => (
            <li
              key={item?.id}
              className={`transition-all border border-[rgba(100,48,1,0.2)] font-[500] duration-150 ease-in-out text-[18px] leading-[20px] ${
                pathname == item?.value
                  ? "bg-primary text-[#ffffff] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]"
                  : "hover:text-[#ffffff] hover:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)] hover:bg-primary text-primary"
              }`}
            >
              <Link href={`${item?.value}`} className="block text-center py-[16px]">
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
