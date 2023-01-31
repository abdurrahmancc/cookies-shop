import Image from "next/image";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import topItems from "../../assets/product-img/cake.png";
import Rating from "../shared/Rating";
import FilterPrice from "./FilterPrice";

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

const ShopFilter = () => {
  const [min, setMin] = useState<number>(43);
  const [max, setMax] = useState<number>(443);

  return (
    <>
      <div className="flex justify-center my-[7.5px] mx-auto bg-white gap-5 w-[101px] h-[30px] rounded-[3px] items-center">
        <h2 className="text-primary text-[12px] leading-[10px] ">filter</h2>
        <FiFilter className="text-primary" />
      </div>
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }}
        className="bg-white px-[30px] pt-5 pb-[21px]"
      >
        <h3 className="text-lg pb-5 leading-[20px] font-[500] text-primary text-center">
          Product Categories
        </h3>
        <div>
          {/* ========== Cookies start ======== */}
          <div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[14px] h-1 border border-primary"></div>
              <h4 className="text-[16px] capitalize text-primary leading-[16px] font-[500]">
                Cookies
              </h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[10px]">
              {cookies.map((cookie) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checked:border-none border border-[rgba(0,0,0,0.7)] rounded-none h-[14px] w-[14px]"
                      />
                      <span className="label-text text-[13px] leading-[14px] text-[rgba(0,0,0,0.7)]">
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
              <h4 className="text-[16px] capitalize text-primary leading-[16px] font-[500]">
                cakes
              </h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[10px]">
              {cakes.map((cookie, index) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checked:border-none border border-[rgba(0,0,0,0.7)] rounded-none h-[14px] w-[14px]"
                      />
                      <span className="label-text text-[13px] leading-[14px] text-[rgba(0,0,0,0.7)]">
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
              <h4 className="text-[16px] capitalize text-primary leading-[16px] font-[500]">
                chocolates
              </h4>
            </div>
            <div className="flex pl-6 mt-3 flex-col gap-[10px]">
              {chocolates.map((cookie) => (
                <div key={cookie.id}>
                  <div className="form-control">
                    <label className="label py-0 justify-start cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checked:border-none border border-[rgba(0,0,0,0.7)] rounded-none h-[14px] w-[14px]"
                      />
                      <span className="label-text text-[13px] leading-[14px] text-[rgba(0,0,0,0.7)]">
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
      {/* ======== Filter By Price start ======= */}
      <div
        style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }}
        className="bg-white px-[30px] mt-3 py-5"
      >
        <h3 className="text-lg pb-5 leading-[22px] font-[500] text-primary text-center">
          Filter By Price
        </h3>
        <FilterPrice min={min} max={max} setMax={setMax} setMin={setMin} />
        <div className="mt-[31px] flex items-center justify-between">
          <p className="text-[14px] text-center text-[rgba(0,0,0,0.8)] leading-[18px]">
            Price: ${min} - ${max}
          </p>
          <div className="flex px-3 max-w-[80px] h-[30px] bg-primary justify-center rounded-[3px] gap-2 text-white text-sm items-center">
            <FiFilter />
            Filter
          </div>
        </div>
      </div>
      {/* ======== Filter By Price end ======= */}
      {/* ======== Top Rated Items start ======= */}
      <div style={{ boxShadow: `0px 4px 4px rgba(0,0,0,0.2)` }} className="bg-white mt-3 pt-5">
        <h3 className="text-lg pb-5 leading-[22px] font-[500] text-primary text-center">
          Top Rated Items
        </h3>
        <div className="flex flex-col gap-y-4">
          <div className="bg-[rgba(0,0,0,0.05)] p-2 flex items-center gap-x-5">
            <div
              style={{ boxShadow: `0px 2px 4px rgba(0,0,0,0.06)` }}
              className="bg-white flex justify-center items-center w-[80px] h-[77px]"
            >
              <figure>
                <Image src={topItems} className="w-[57px] h-[64px]" alt="Top rated items" />
              </figure>
            </div>
            <div>
              <h4 className="text-sm leading-[17px] text-primary font-[500]">
                Chocolate Peanut Butter Cakes
              </h4>
              <div className="flex mt-[10px] items-center gap-7">
                <p className="text-lg  leading-[20px] text-primary font-bold">12$</p>
                <Rating height={"h-[15px]"} width={"w-[15px]"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.05)] p-2 flex items-center gap-x-5">
            <div
              style={{ boxShadow: `0px 2px 4px rgba(0,0,0,0.06)` }}
              className="bg-white flex justify-center items-center w-[80px] h-[77px]"
            >
              <figure>
                <Image src={topItems} className="w-[57px] h-[64px]" alt="Top rated items" />
              </figure>
            </div>
            <div>
              <h4 className="text-sm leading-[17px] text-primary font-[500]">
                Chocolate Peanut Butter Cakes
              </h4>
              <div className="flex mt-[10px] items-center gap-7">
                <p className="text-lg  leading-[20px] text-primary font-bold">12$</p>
                <Rating height={"h-[16px]"} width={"w-[16px]"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.05)] p-2 flex items-center gap-x-5">
            <div
              style={{ boxShadow: `0px 2px 4px rgba(0,0,0,0.06)` }}
              className="bg-white flex justify-center items-center w-[80px] h-[77px]"
            >
              <figure>
                <Image src={topItems} className="w-[57px] h-[64px]" alt="Top rated items" />
              </figure>
            </div>
            <div>
              <h4 className="text-sm leading-[17px] text-primary font-[500]">
                Chocolate Peanut Butter Cakes
              </h4>
              <div className="flex mt-[10px] items-center gap-7">
                <p className="text-lg  leading-[20px] text-primary font-bold">12$</p>
                <Rating height={"h-[16px]"} width={"w-[16px]"} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.05)] p-2 flex items-center gap-x-5">
            <div
              style={{ boxShadow: `0px 2px 4px rgba(0,0,0,0.06)` }}
              className="bg-white flex justify-center items-center w-[80px] h-[77px]"
            >
              <figure>
                <Image src={topItems} className="w-[57px] h-[64px]" alt="Top rated items" />
              </figure>
            </div>
            <div>
              <h4 className="text-sm leading-[17px] text-primary font-[500]">
                Chocolate Peanut Butter Cakes
              </h4>
              <div className="flex mt-[10px] items-center gap-7">
                <p className="text-lg  leading-[20px] text-primary font-bold">12$</p>
                <Rating height={"h-[16px]"} width={"w-[16px]"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======== Top Rated Items end ======= */}
    </>
  );
};

export default ShopFilter;
