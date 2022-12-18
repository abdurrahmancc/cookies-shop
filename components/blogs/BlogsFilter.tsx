import Image from "next/image";
import React from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import img1 from "../../assets/blogs/post-1.png";
import img2 from "../../assets/blogs/post-2.png";
import img3 from "../../assets/blogs/post3.png";
import img4 from "../../assets/blogs/post4.png";
import img5 from "../../assets/blogs/post-5.png";
import img6 from "../../assets/blogs/post-6.png";
import Collapsible from "react-collapsible";

const cookies = [
  { id: 1, label: "Chocolate Burn Cookies" },
  { id: 2, label: "Chocolate  Cheese Cookies" },
  { id: 3, label: "Chocolate  Chips Cookies" },
  { id: 4, label: "Dry Fruits Cookies" },
  { id: 5, label: "Lemendo Cookies" },
];
const chocolates = [
  { id: 6, label: "White Candy Chocolates" },
  { id: 7, label: "White Pipper  Chocolates" },
];

const cakes = [
  { id: 8, label: "Chocolates  Burn Cakes" },
  { id: 9, label: "Dark Chocolate Mufin" },
  { id: 10, label: "Chocolate  Mufins" },
  { id: 11, label: "Dry Burn Mufins" },
];

const BlogsFilter = () => {
  return (
    <>
      {/* =========search sec start */}
      <div className="py-[46px] px-[14px]">
        <div className="w-full mx-auto max-w-[240px] relative">
          <input
            type="text"
            placeholder="Search"
            className="input rounded-[4px] text-black text-xs placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none bg-white border border-primary h-[35px] w-full"
          />
          <button className=" rounded-[4px]  top-0 right-0 absolute w-[38px] flex justify-center items-center h-[35px] bg-[#7B3D11] ">
            <IoSearchSharp className="w-[14px] text-white h-[14px] " />
          </button>
        </div>
      </div>
      {/* =========search sec end =========*/}
      {/* ========= follow us start ====== */}
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.1)` }}
        className="py-5 mb-[46px] bg-white"
      >
        <h4 className="capitalize text-center text-primary text-[18px] leading-[22px] font-[500]">
          Follow Us
        </h4>
        <div className="flex items-center justify-center mt-[26px] gap-2">
          <BsFacebook className="w-[27px] h-[30px] text-primary" />
          <RiInstagramFill className="w-[30px] h-[30px] text-primary" />
          <BsTwitter className="w-[30px] h-[30px] text-primary" />
          <BsYoutube className="w-[30px] h-[30px] text-primary" />
        </div>
      </div>
      {/* ========= follow us end ====== */}
      {/* ========= categories start ====== */}
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }}
        className="bg-white px-[30px] mb-[46px] py-5"
      >
        <div className="pb-[18px] flex justify-center gap-[10px] items-center">
          <div className="w-[60px] h-[1px] bg-primary"></div>
          <h3 className="text-lg leading-[20px] font-[500] text-primary text-center">Categories</h3>
          <div className="w-[60px] h-[1px] bg-primary"></div>
        </div>

        <div>
          {/* ========== Cookies start ======== */}
          <div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[14px] h-1 border border-primary"></div>
              <h4 className="text-[16px] text-primary leading-[18.38px] font-[500]">Cookies</h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[9px]">
              {cookies.map((cookie) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <span className="label-text text-[13px] leading-[14.94px] text-[rgba(0,0,0,0.7)]">
                        {cookie.label}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ========== Cookies end ======== */}
          {/* ========== cakes start ======== */}
          <div className="mt-4">
            <div className="flex gap-[10px] items-center">
              <div className="w-[14px] h-1 border border-primary"></div>
              <h4 className="text-[16px] text-primary leading-[18.38px] font-[500]">Cookies</h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[9px]">
              {cakes.map((cookie, index) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <span className="label-text text-[13px] leading-[14.94px] text-[rgba(0,0,0,0.7)]">
                        {cookie.label}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ========== cakes end======== */}
          {/* ========== Chocolates start ======== */}
          <div className="mt-4">
            <div className="flex gap-[10px] items-center">
              <div className="w-[14px] h-1 border border-primary"></div>
              <h4 className="text-[16px] text-primary leading-[18.38px] font-[500]">Cookies</h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[9px]">
              {chocolates.map((cookie) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <span className="label-text text-[13px] leading-[14.94px] text-[rgba(0,0,0,0.7)]">
                        {cookie.label}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ========== chocolate end ======== */}
        </div>
      </div>
      {/* ========= categories end ====== */}
      {/* ========= popular posts start ====== */}
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }}
        className="bg-white px-[10px] mb-[46px] py-5"
      >
        <h3 className="text-lg pb-5 leading-[20px] font-[500] text-primary text-center">
          Categories
        </h3>
        <div className="max-w-[376px] md:max-w-[248px] w-full mx-auto">
          <div className="grid gap-2 grid-cols-3 md:grid-cols-2">
            <Image src={img1} width={120} height={85.7} alt="post image" />
            <Image src={img2} width={120} height={85.7} alt="post image" />
            <Image src={img3} width={120} height={85.7} alt="post image" />
            <Image src={img4} width={120} height={85.7} alt="post image" />
            <Image src={img5} width={120} height={85.7} alt="post image" />
            <Image src={img6} width={120} height={85.7} alt="post image" />
          </div>
        </div>
      </div>
      {/* ========= popular posts end ====== */}
      {/* ========= Archives start ====== */}
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }}
        className="bg-white px-[32px] h-[207px] mb-[46px] py-5"
      >
        <h3 className="text-lg pb-[20px] leading-[20px] font-[500] text-primary text-center">
          Archives
        </h3>
        <div>
          <Collapsible
            trigger={
              <div className="py-[12px] flex items-center justify-between bg-[#EEEEEE] px-5">
                <span className="text-primary text-[14px] leading-[16px]">Select Month</span>
                <TiArrowUnsorted className="text-[#643001]" />
              </div>
            }
            id="bottom-header-all-Categories"
            className="w-full"
            open={true}
          >
            <div className="border bg-[#FFFFFF]  border-[1px solid rgba(100,48,1,0.3)]">
              <ul>
                <li className="text-[14px] px-5 border-b border-[1px solid rgba(100,48,1,0.3)] py-3 leading-[16px] text-[rgba(0,0,0,0.7)]">
                  October 2022
                </li>
                <li className="text-[14px] px-5 py-3 leading-[16px] text-[rgba(0,0,0,0.7)]">
                  November 2022
                </li>
              </ul>
            </div>
          </Collapsible>
        </div>
      </div>
      {/* ========= Archives end ====== */}
      {/* ========= tags start ====== */}
      <div style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }} className="bg-white px-[30px] py-5">
        <h3 className="text-lg pb-5 leading-[20px] font-[500] text-primary text-center">Tags</h3>
        <ul className="flex w-full flex-wrap gap-x-2 gap-y-[11.5px]">
          <li className="text-sm max-w-[94px] w-full shrink bg-[#ECECEC] flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            Branding
          </li>
          <li className="text-sm bg-[#ECECEC] max-w-[105px] w-full shrink flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            Design
          </li>
          <li className="text-sm bg-[#ECECEC] max-w-[118px] w-full shrink flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            Gallery
          </li>
          <li className="text-sm bg-[#ECECEC] max-w-[81px] w-full shrink flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            Video
          </li>
          <li className="text-sm bg-[#ECECEC] max-w-[94px] w-full shrink flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            website
          </li>
          <li className="text-sm bg-[#ECECEC] max-w-[105px] w-full shrink flex justify-center py-[7px] leading-4 text-[rgba(0,0,0,0.7)]">
            Product
          </li>
        </ul>
      </div>
      {/* ========= tags end ====== */}
    </>
  );
};

export default BlogsFilter;
