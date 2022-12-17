import Image from "next/image";
import React from "react";
import Collapsible from "react-collapsible";
import { BiCaretDown } from "react-icons/bi";
import { FiGrid } from "react-icons/fi";
import cookies from "../../assets/category/cookies.png";
import cakes from "../../assets/category/cakes.png";
import chocolates from "../../assets/category/chocolates.png";
import all from "../../assets/category/all.png";
import NavLink from "../shared/navLink/NavLink";

const BottomHeader1 = () => {
  return (
    <div className="bg-[#944A07] hidden lg:block">
      <div className="max-w-[1200px]  lg:mx-auto mx-5">
        <div className="h-[67px] flex justify-between">
          <div className="h-full">
            <Collapsible
              id="bottom-header-all-Categories"
              className=" h-full "
              open={false}
              trigger={
                <div className="flex w-[230px] h-[67px] justify-center text-white items-center bg-[#7B3D11]">
                  <FiGrid className="h-4 w-4" />
                  <span className="block text-lg font-[500] capitalize pl-4 mr-[10px]">
                    All Categories
                  </span>
                  <BiCaretDown />
                </div>
              }
            >
              <div className="xl:flex grid grid-cols-2 xl:grid-cols-none xl:flex-row flex-auto  px-5 xl:w-[682px] w-[356px] py-5  justify-center items-center xl:h-[190px] gap-[10px] category-index bg-white">
                <div className="bg-[#FFF4E2] hover:border-primary h-[149px] hover:border duration-200 ease-linear transition-all hover:bg-inherit rounded-[9px] w-[153px] mx-auto flex items-center flex-col pt-[10px] px-[27px]">
                  <Image src={cakes} className="mb-5 w-[99px] h-[81px]" alt="cakes" />
                  <p className="text-primary text-center pb-[14px] font-[500]">Cakes</p>
                </div>
                <div className="bg-[#FFF4E2] hover:border-primary h-[149px] hover:border duration-200 ease-linear transition-all hover:bg-inherit rounded-[9px] w-[153px] mx-auto flex items-center flex-col pt-[10px] px-[27px]">
                  <Image src={cookies} className="mb-5 w-[99px] h-[81px]" alt="cookies" />
                  <p className="text-primary text-center pb-[14px] font-[500]">Cookies</p>
                </div>
                <div className="bg-[#FFF4E2] hover:border-primary h-[149px] hover:border duration-200 ease-linear transition-all hover:bg-inherit rounded-[9px] w-[153px] mx-auto flex items-center flex-col pt-[10px] px-[27px]">
                  <Image src={chocolates} className="mb-5 w-[99px] h-[81px]" alt="chocolates" />
                  <p className="text-primary text-center pb-[14px] font-[500]">chocolates</p>
                </div>
                <div className="bg-[#FFF4E2] hover:border-primary h-[149px] hover:border duration-200 ease-linear transition-all hover:bg-inherit rounded-[9px] w-[153px] mx-auto flex items-center flex-col pt-[10px] px-[27px]">
                  <Image src={all} className="mb-5 w-[99px] h-[81px]" alt="cookies" />
                  <p className="text-primary text-center pb-[14px] font-[500]">All</p>
                </div>
              </div>
            </Collapsible>
          </div>
          <div className="h-full">
            {/* ========== nav link start ========= */}
            <NavLink>{"text-white"}</NavLink>
            {/* ========== nav link end ========= */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader1;
