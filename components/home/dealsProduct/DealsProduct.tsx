import Image from "next/image";
import React from "react";
import { HiArrowNarrowRight, HiShoppingCart } from "react-icons/hi";
import chocolate from "../../../assets/product-img/chocolate.png";
import chocolate2 from "../../../assets/product-img/chocolate-2.png";

const DealsProduct = () => {
  return (
    <div className="pt-[32px]">
      <div className="flex justify-between md:mx-10 lg:mx-0">
        <h2 className="text-primary text-center xl:text-[48px] xl:leading-[62px] lg:text-3xl sm:text-2xl text-xl  font-[Candal]">
          Deals
        </h2>
        <div className="text-primary cursor-pointer gap-2 flex items-center">
          <span className=" md:text-[20px] font-[500] leading-[22px]">See all</span>
          <HiArrowNarrowRight className="md:text-2xl text-[xl] " />
        </div>
      </div>
      <div className="py-8">
        <div className="grid lg:grid-cols-2 gap-x-4 gap-y-8 grid-cols-1">
          <div
            style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
            className="text-center rounded-[9px] pb-8 bg-[#ffffff] max-w-[592px] mx-auto w-full  relative"
          >
            <div className="relative">
              <figure>
                <Image src={chocolate} alt="chocolate" className=" mx-auto" />
              </figure>
              <div className="absolute w-full top-[40%]">
                <div className="bg-[rgba(100,48,1,0.3)] h-[50px] w-full ">
                  <div className="flex items-center justify-center gap-[5px]">
                    <div className="text-white bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
                      <span>09</span> <br />
                      <span>D</span>
                    </div>
                    <span className="text-white text-[20px] ">:</span>
                    <div className="text-white bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
                      <span>09</span> <br />
                      <span>D</span>
                    </div>
                    <span className="text-white text-[20px] ">:</span>
                    <div className="text-white bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
                      <span>09</span> <br />
                      <span>D</span>
                    </div>
                    <span className="text-white text-[20px] ">:</span>
                    <div className="text-white bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
                      <span>09</span> <br />
                      <span>D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-[55px] text-center text-[20px] leading-[22px] text-primary">
                Chocolate Peanut Butter Cookies
              </p>
              <p className="text-primary text-center mt-3 mb-[26px] text-[32px] font-bold">12$</p>
              <button className="text-white py-3 bg-primary w-full gap-[25px] flex justify-center font-[500] items-center mx-auto rounded-[4px] max-w-[250px]">
                <HiShoppingCart className="w-5 h-5" /> Add to cart
              </button>
            </div>
          </div>
          <div className="max-w-[592px] w-full mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center ">
              <div
                style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
                className="max-w-[292px] w-full rounded-[9px] bg-[#ffffff] flex justify-center box-border items-center h-[244px]"
              >
                <Image src={chocolate2} alt="chocolate" />
              </div>
              <div
                style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
                className="max-w-[292px] w-full  rounded-[9px] bg-[#ffffff] flex justify-center box-border items-center h-[244px]"
              >
                <Image src={chocolate2} alt="chocolate" />
              </div>
              <div
                style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
                className="max-w-[292px] w-full  rounded-[9px] bg-[#ffffff] flex justify-center box-border items-center h-[244px]"
              >
                <Image src={chocolate2} alt="chocolate" />
              </div>
              <div
                style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
                className="max-w-[292px] w-full  rounded-[9px] bg-[#ffffff] flex justify-center box-border items-center h-[244px]"
              >
                <Image src={chocolate2} alt="chocolate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsProduct;
