import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

interface Props {
  children: string;
}

const NavLink: FC<PropsWithChildren<Props>> = ({ children: textColor }) => {
  return (
    <nav className="h-full">
      <ul className="flex menu menu-horizontal gap-x-7 items-center h-full">
        <li className="py-1 hover:bg-inherit" tabIndex={0}>
          <Link
            href={"/"}
            className={`text-lg focus:bg-inherit hover:bg-inherit ${textColor} px-0 flex font-[500] gap-[10px] items-center`}
          >
            Home
            <RiArrowDownSFill className="text-sm" />
          </Link>
          <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
            <li>
              <Link
                href={"/"}
                className={`sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 1</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/home2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 2</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/home2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 3</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="py-1 hover:bg-inherit" tabIndex={0}>
          <Link
            href={"/shop"}
            className={`text-lg focus:bg-inherit hover:bg-inherit ${textColor} px-0 flex font-[500] gap-[10px] items-center`}
          >
            Shop
            <RiArrowDownSFill className="text-sm" />
          </Link>
          <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
            <li>
              <Link
                href={"/shop"}
                className={`sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Shop default</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/shop/shop2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Right Filter Shop</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/shop/shop3"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Shop 3</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex hover:bg-inherit font-[500] gap-[10px] items-center">
          <Link
            href={"/about"}
            className={`text-lg ${textColor} focus:bg-inherit hover:bg-inherit px-0`}
          >
            About
          </Link>
        </li>
        <li className="flex hover:bg-inherit font-[500] gap-[10px] items-center">
          <Link
            href={"/contact"}
            className={`text-lg ${textColor} font-[500] focus:bg-inherit hover:bg-inherit px-0`}
          >
            Contact
          </Link>
        </li>

        <li className="flex hover:bg-inherit font-[500] gap-[10px] items-center">
          <Link href={"/blogs"} className={`text-lg ${textColor} font-[500] hover:bg-inherit px-0`}>
            Blog
          </Link>
        </li>
        <li className="flex hover:bg-inherit font-[500] gap-[10px] items-center">
          <Link href={"/home"} className={`text-lg ${textColor} hover:bg-inherit px-0`}>
            Deals
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
