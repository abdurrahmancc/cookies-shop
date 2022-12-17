import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const TopFilter = () => {
  return (
    <div className="max-w-[1200px] lg:mx-auto mx-5">
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-2 md:gap-x-8 gap-y-5 justify-center items-center ">
        <div className=" w-full">
          <ul className="menu menu-horizontal w-full p-0">
            <li tabIndex={0} className="w-full">
              <a className="bg-primary border border-primary flex justify-center h-[50px] items-center gap-2 duration-150 transition-all ease-linear  text-white  font-[700] text-[20px] leading-[22.98px] w-full">
                Cookies
                <RiArrowDownSFill />
              </a>
              <ul
                style={{ filter: `drop-shadow(0px 4px 4px rgba(0,0,0,0.25))` }}
                className="w-full z-50 bg-white"
              >
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Burn Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Cheese Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Dry Fruits Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Lemendo Cookies
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" w-full">
          <ul className="menu menu-horizontal w-full p-0">
            <li tabIndex={0} className="w-full">
              <a className="bg-primary border border-primary flex justify-center h-[50px] items-center gap-2 duration-150 transition-all ease-linear  text-white  font-[700] text-[20px] leading-[22.98px] w-full">
                Cakes
                <RiArrowDownSFill />
              </a>
              <ul
                style={{ filter: `drop-shadow(0px 4px 4px rgba(0,0,0,0.25))` }}
                className="w-full z-40 bg-white"
              >
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Burn Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Cheese Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Dry Fruits Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Lemendo Cookies
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" w-full">
          <ul className="menu menu-horizontal w-full p-0">
            <li tabIndex={0} className="w-full">
              <a className="bg-primary border border-primary flex justify-center h-[50px] items-center gap-2 duration-150 transition-all ease-linear  text-white  font-[700] text-[20px] leading-[22.98px] w-full">
                Cakes
                <RiArrowDownSFill />
              </a>
              <ul
                style={{ filter: `drop-shadow(0px 4px 4px rgba(0,0,0,0.25))` }}
                className="w-full bg-white"
              >
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Burn Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Chocolate Cheese Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Dry Fruits Cookies
                  </a>
                </li>
                <li className="hover:bg-[#FFA111] transition-all duration-150 ease-linear ">
                  <a className="py-2 active:bg-secondary active:text-white hover:text-[#000000] text-[rgba(0,0,0,0.7)]">
                    Lemendo Cookies
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#944A07] mt-[46px] items-center flex flex-col justify-center h-[112px] ">
        <h2 className="text-center font-[500] text-[#FFFFFF] text-[20px] leading-[23px]">
          Chocolate Cheese Cookies
        </h2>
        <p className="text-sm pt-3 text-center text-[#FFFFFF]">72 items in Search</p>
      </div>
    </div>
  );
};

export default TopFilter;
