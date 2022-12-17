import Image from "next/image";
import React from "react";
import subscribeOffer from "../../assets/product-img/subscribeOffer.png";
import specialOffer from "../../assets/product-img/specialOffer.png";

const SpecialOffer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[31px]">
      <div className="w-full relative">
        <Image src={subscribeOffer} className="w-full h-auto" alt="subscribe offer" />
        <div className="h-full flex justify-center items-center w-full absolute top-0">
          <h4
            style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
            className="lg:text-[34px] lg:leading-10 text-[24px] leading-7 w-full bg-[rgba(255,161,17,0.7)] py-[15.5px] text-center  text-black"
          >
            Subscribe & Get This Offer
          </h4>
        </div>
        <div className="h-full flex justify-center items-center w-full absolute top-0">
          <div className="mt-40">
            <button className="bg-white hover:bg-[#f6f5f5] transition-all duration-100 ease-linear lg:w-[250px] lg:h-[60px] w-[200px] h-[52px] text-[20px] leading-[22px] flex justify-center items-center rounded-[4px] text-[#944A07]">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <Image src={specialOffer} className="w-full h-auto" alt="special Offer" />
        <div className="h-full flex justify-center items-center w-full absolute top-0">
          <h4
            style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
            className="text-[34px] w-full bg-[rgba(100,48,1,0.6)] py-[15.5px] text-center leading-10 text-white"
          >
            Special Offer For Today
          </h4>
        </div>
        <div className="h-full flex justify-center items-center w-full absolute top-0">
          <div className="mt-40">
            <button className="bg-white hover:bg-[#f6f5f5] transition-all duration-100 ease-linear w-[250px] h-[60px] text-[20px] leading-[22px] flex justify-center items-center rounded-[4px] text-[#944A07]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
