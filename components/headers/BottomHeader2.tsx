import Link from "next/link";
import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import NavLink from "../shared/navLink/NavLink";

const BottomHeader2 = () => {
  return (
    <div className="bg-[#944A07]  hidden lg:block">
      <div className="max-w-[1200px] lg:mx-auto mx-5">
        <div className="h-[67px] flex items-center justify-between">
          <div className="h-full">
            {/* <ul className="flex menu menu-horizontal gap-x-7 items-center h-full">
              <li className="py-2 hover:bg-inherit" tabIndex={0}>
                <Link
                  href={"/"}
                  className="text-lg hover:bg-inherit text-[#ffffff] px-0 flex font-[500] gap-[10px] items-center"
                >
                  Home
                  <RiArrowDownSFill className="text-sm" />
                </Link>
                <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
                  <li>
                    <Link
                      href={"/"}
                      className={
                        "sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Home 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/home2"}
                      className={
                        "sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Home 2</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/home2"}
                      className={
                        "sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Home 3</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="py-2 hover:bg-inherit" tabIndex={0}>
                <Link
                  href={"/shop"}
                  className="text-lg hover:bg-inherit text-[#ffffff] px-0 flex font-[500] gap-[10px] items-center"
                >
                  Shop
                  <RiArrowDownSFill className="text-sm" />
                </Link>
                <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
                  <li>
                    <Link
                      href={"/shop"}
                      className={
                        "sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Shop default</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop"}
                      className={
                        "sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Shop wide</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/shop"}
                      className={
                        "sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary"
                      }
                    >
                      <span className="px-8">Product list</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="py-2 hover:bg-inherit">
                <Link
                  href={"/home"}
                  className="text-lg text-[#ffffff] font-[500] hover:bg-inherit px-0"
                >
                  About
                </Link>
              </li>
              <li className="py-2 hover:bg-inherit">
                <Link
                  href={"/home"}
                  className="text-lg text-[#ffffff] font-[500] hover:bg-inherit px-0"
                >
                  Contact
                </Link>
              </li>

              <li className="py-2 hover:bg-inherit">
                <Link
                  href={"/home"}
                  className="text-lg text-[#ffffff] font-[500] hover:bg-inherit px-0"
                >
                  Blog
                </Link>
              </li>
              <li className="py-2 hover:bg-inherit">
                <Link
                  href={"/home"}
                  className="text-lg text-[#ffffff] font-[500] hover:bg-inherit px-0"
                >
                  Deals
                </Link>
              </li>
            </ul> */}
            <NavLink>{"text-[#ffffff]"}</NavLink>
          </div>
          <div
            style={{ filter: `drop-shadow(0px 4px 4px rgba(0,0,0,0.25))` }}
            className="flex h-[38px] px-[10px] bg-[#FFFFFF] items-center text-lg font-[500] leading-[20.68px] text-secondary gap-[10px]"
          >
            <span>Special Offers</span>
            <BiCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader2;
